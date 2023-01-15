import { WithFieldResolvers } from "../helpers";
import { User } from "../../generated/graphql";

export type UserFieldResolversNames = "firstName";

export type UserWithFieldResolvers = WithFieldResolvers<
    User,
    UserFieldResolversNames
>;
