import { QueryResolvers } from "../../../generated/graphql";
import { Recipe } from "../../../entities/Recipe";

export const getRecipe: QueryResolvers["getRecipe"] = async (
    {},
    { recipeId },
    { em },
) => {
    return em.findOne(Recipe, { id: recipeId });
};
