import { Category } from "../../generated/graphql";
import { WithFieldResolvers } from "../helpers";

export type CategoryWithFieldResolvers = WithFieldResolvers<
    Category,
    "childCategories" | "recipes" | "parentCategory"
>;
