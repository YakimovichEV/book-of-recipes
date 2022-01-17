import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { NextApiRequest, NextApiResponse } from "next";
import { typeDefs } from "../../server/generated/graphql";
import { ApolloResolvers } from "../../server/resolvers";
import { MikroORM } from "@mikro-orm/core";
import microConfig from "../../server/mikro-orm.config";

async function createServer() {
    const orm = await MikroORM.init(microConfig);

    return new ApolloServer({
        typeDefs,
        resolvers: ApolloResolvers,
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
