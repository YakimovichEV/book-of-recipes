import { User } from "server/entities/User";
import { QueryResolvers } from "../../../generated/graphql";

export const Hello: QueryResolvers["hello"] = async (_root, _args, { em }) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, 3000);
    });

    return "Hello World!";
};
