import { WithFieldResolvers } from "../helpers";
import { User } from "../../generated/graphql";

export type UserWithFieldResolvers = WithFieldResolvers<User, "firstName">;
