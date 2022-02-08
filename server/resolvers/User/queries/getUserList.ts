import { QueryResolvers } from "../../../generated/graphql";
import { User } from "../../../entities/User";

export const getUserList: QueryResolvers["getUserList"] = async (
    _root,
    _args,
    { em },
) => {
    const list = await em.find(User, {}, { limit: 10 });

    return list;
};
