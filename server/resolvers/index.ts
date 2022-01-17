import { Resolvers } from "../generated/graphql";
import { Hello } from "./HelloWorld/queries/Hello";
import { createUser } from "./User/mutations/createUser";
import { getUserList } from "./User/queries/getUserList";

export const ApolloResolvers: Resolvers = {
    Query: {
        hello: Hello,
        getUserList,
    },
    Mutation: {
        createUser,
    },
};
