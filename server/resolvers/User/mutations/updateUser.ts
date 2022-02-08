import { UserInputError } from "apollo-server-micro";
import { User } from "../../../entities/User";
import { MutationResolvers } from "../../../generated/graphql";

export const updateUser: MutationResolvers["updateUser"] = async (
    _,
    { userId, user },
    { em },
) => {
    await em.nativeUpdate(User, { id: userId }, user);

    const updatedUser = await em.findOne(User, { id: userId });

    if (!updatedUser) {
        throw new UserInputError("Something went very wrong");
    }

    return updatedUser;
};
