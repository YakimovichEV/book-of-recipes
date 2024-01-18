import { MyResolvers } from "server/generated/graphql";

export const firstName: MyResolvers["User"]["firstName"] = (user) => {
    return user.name.split(" ")[0] || "";
};
