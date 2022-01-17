import { QueryResolvers } from "../../../generated/graphql";
export const Hello: QueryResolvers["hello"] = async () => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, 3000);
    });
    return "Hello World!";
};
