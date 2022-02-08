import "reflect-metadata";
import { ApolloServer } from "apollo-server-micro";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { NextApiRequest, NextApiResponse } from "next";
import { typeDefs } from "../../server/generated/graphql";
import { ApolloResolvers } from "../../server/resolvers";
import { ApolloContext } from "../../@types/graphql";
import { getMikro } from "server/helpers/db";
import { User } from "server/entities/User";
import { getToken } from "next-auth/jwt";

async function createServer() {
    return new ApolloServer({
        typeDefs,
        resolvers: ApolloResolvers,
        introspection: true,
        context: async ({
            req,
            res,
        }: {
            req: NextApiRequest;
            res: NextApiResponse;
        }): Promise<ApolloContext> => {
            const token = await getToken({ req });

            let user = null;

            const { em } = await getMikro();

            if (token && token.email) {
                user = await em.findOne(User, { email: token.email });
            }

            return {
                req,
                res: res as ApolloContext["res"],
                em,
                currentUser: user,
            };
        },
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
