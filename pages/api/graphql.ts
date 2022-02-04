import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { NextApiRequest, NextApiResponse } from "next";
import { typeDefs } from "../../server/generated/graphql";
import { ApolloResolvers } from "../../server/resolvers";
import { MikroORM } from "@mikro-orm/core";
import microConfig from "../../server/mikro-orm.config";
import { mapSchema, getDirective, MapperKind } from "@graphql-tools/utils";
import { defaultFieldResolver, GraphQLSchema } from "graphql";

import { makeExecutableSchema } from "@graphql-tools/schema";

let schema = makeExecutableSchema({
    typeDefs,
    resolvers: ApolloResolvers,
});

function upperDirectiveTransformer(
    schema: GraphQLSchema,
    directiveName: string,
) {
    return mapSchema(schema, {
        // Executes once for each object field in the schema
        [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
            // Check whether this field has the specified directive
            const upperDirective = getDirective(
                schema,
                fieldConfig,
                directiveName,
            )?.[0];

            console.log(upperDirective);

            if (upperDirective) {
                // Get this field's original resolver
                const { resolve = defaultFieldResolver } = fieldConfig;

                // Replace the original resolver with a function that *first* calls
                // the original resolver, then converts its result to upper case
                fieldConfig.resolve = async function (
                    source,
                    args,
                    context,
                    info,
                ) {
                    const result = await resolve(source, args, context, info);
                    console.log(result);
                    if (typeof result === "string") {
                        return result.toUpperCase();
                    }
                    return result;
                };
            }

            return fieldConfig;
        },
    });
}

schema = upperDirectiveTransformer(schema, "upper");

async function createServer() {
    const orm = await MikroORM.init(microConfig);

    return new ApolloServer({
        schema,
        // @ts-ignore
        playground: true,
        introspection: true,

        context: ({ req, res }) => ({ req, res, em: orm.em }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });
}

const apolloServer = createServer();

const startServer = apolloServer.then((server) => server.start());

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    await startServer;
    const server = await apolloServer;

    server.createHandler({
        path: "/api/graphql",
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};
