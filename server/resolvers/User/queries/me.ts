import { QueryResolvers } from "../../../generated/graphql";

export const getMe: QueryResolvers["me"] = async (
    _root,
    _args,
    { currentUser },
) => currentUser;
