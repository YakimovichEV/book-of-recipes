import { QueryResolvers } from "../../../generated/graphql";

export const Hello: QueryResolvers["hello"] = async (
    _root,
    _args,
    { currentUser },
) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, 1000);
    });

    return currentUser?.name || "Hello World!";
};
