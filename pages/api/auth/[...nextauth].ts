import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

import { User } from "server/entities/User";
import { verifyPassword } from "server/helpers/auth";
import { getMikro } from "server/helpers/db";

export const authConfig: NextAuthOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    jwt: { maxAge: 60 * 15 },
    session: {
        maxAge: 60 * 60 * 7,
        strategy: "jwt",
    },
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            type: "credentials",
            async authorize(credentials) {
                if (!credentials) {
                    return null;
                }

                const { em } = await getMikro();

                const user = await em.findOne(User, {
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
                    throw new Error("Could now log you in");
                }

                return {
                    id: user.id,
                    email: user.email,
                    image: user.image,
                    name: user.name,
                };
            },
        }),
    ],
};

export default NextAuth(authConfig);
