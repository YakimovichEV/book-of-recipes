import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { verifyPassword } from "server/helpers/auth";
import { connectToDatabase } from "server/helpers/db";

export default NextAuth({
    session: {
        jwt: true,
    },
    providers: [
        CredentialsProvider({
            async authorize(credentials: any) {
                const client = await connectToDatabase();

                const usersCollection = client.db().collection("users");

                const user = await usersCollection.findOne({
                    email: credentials.email,
                });

                if (!user) {
                    throw new Error("No user found!");
                }

                const isValid = await verifyPassword(
                    credentials.password,
                    user.password,
                );

                if (!isValid) {
                    client.close();
                    throw new Error("Could now log you in");
                }

                client.close();

                return { email: user.email };
            },
        }),
    ],
});
