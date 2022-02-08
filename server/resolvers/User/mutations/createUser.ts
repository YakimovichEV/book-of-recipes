import { UserInputError } from "apollo-server-micro";
import { User } from "server/entities/User";
import { hashPassword } from "server/helpers/auth";
import { MutationResolvers } from "../../../generated/graphql";

export const createUser: MutationResolvers["createUser"] = async (
    _root,
    { user: { email, password, name, phoneNumber } },
    { em },
) => {
    const userExists = await em.findOne(User, { email });

    if (userExists) {
        throw new UserInputError("User with such email already exists");
    }

    const user = new User();

    user.email = email;
    user.password = await hashPassword(password);
    user.name = name;
    user.phoneNumber = phoneNumber;

    await em.persistAndFlush(user);

    return true;
};
