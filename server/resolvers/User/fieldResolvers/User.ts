import { ApolloContext } from "../../../../@types/graphql";
import { UserResolvers, User } from "../../../generated/graphql";

export const firstName: UserResolvers<ApolloContext, User>["firstName"] = (
    user,
) => {
    return user.name.split(" ")[0] || "";
};
