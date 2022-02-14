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
import { processRequest } from "graphql-upload";

async function createServer() {
    const { em } = await getMikro();

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

            if (token && token.email) {
                user = await em.findOne(User, { email: token.email });
            }

            return {
                req,
                res: res as ApolloContext["res"],
                em: em.fork(),
                currentUser: user,
            };
        },
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });
}

const apolloServer = createServer();
const server = apolloServer.then((server) => server.start());

const apolloHandler = server.then(async () =>
    (await apolloServer).createHandler({
        path: "/api/graphql",
    }),
);

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {
    const contentType = req.headers["content-type"];
    if (contentType && contentType.startsWith("multipart/form-data")) {
        //@ts-expect-error creating a field for library
        req.filePayload = await processRequest(req, res);
    }

    (await apolloHandler)(req, res);
}

export const config = {
    api: {
        bodyParser: false,
    },
};
