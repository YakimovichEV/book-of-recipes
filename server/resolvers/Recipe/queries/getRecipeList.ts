import { QueryResolvers } from "../../../generated/graphql";
import { Recipe } from "../../../entities/Recipe";

export const getRecipeList: QueryResolvers["getRecipeList"] = async (
    _root,
    _args,
    { em },
) => {
    return em.find(Recipe, {});
};
