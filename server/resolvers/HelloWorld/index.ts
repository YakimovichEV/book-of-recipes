import { Resolvers } from "../../generated/graphql";
import { Hello } from "./queries/Hello";

export const HelloWorldResolvers: Resolvers = {
    Query: {
        hello: Hello,
    },
};
