import { MutationResolvers } from "../../../generated/graphql";
import { User } from "../../../entities/User";
import { UserInputError } from "apollo-server-micro";

export const deleteUser: MutationResolvers["deleteUser"] = async (
    _root,
    { userId },
    { em },
) => {
    const user = await em.findOne(User, { id: userId });

    if (!user) {
        throw new UserInputError("No such user was found");
    }

    await em.nativeDelete(User, { id: userId });

    return userId;
};
