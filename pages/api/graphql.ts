import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { NextApiRequest, NextApiResponse } from "next";
import { typeDefs } from "../../server/generated/graphql";
import { HelloWorldResolvers } from "../../server/resolvers/HelloWorld";

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers: {
        ...HelloWorldResolvers,
    },
    // @ts-ignore
    playground: true,
    introspection: true,
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

const startServer = apolloServer.start();

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    await startServer;
    await apolloServer.createHandler({
        path: "/api/graphql",
    })(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};
