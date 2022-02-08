import { UserInputError } from "apollo-server-micro";
import { User } from "../../../entities/User";
import { MutationResolvers } from "../../../generated/graphql";

export const updateUser: MutationResolvers["updateUser"] = async (
    _,
    { userId, user },
    { em },
) => {
    const userEntity = await em.findOne(User, { id: userId });

    if (!userEntity) {
        throw new UserInputError("No such user was found");
    }

    await em.nativeUpdate(User, { id: userId }, user);

    const updatedUser = await em.findOne(User, { id: userId });

    if (!updatedUser) {
        throw new UserInputError("Something went very wrong");
    }

    return updatedUser;
};
