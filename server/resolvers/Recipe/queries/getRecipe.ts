import { QueryResolvers } from "../../../generated/graphql";
import { Recipe } from "../../../entities/Recipe";

export const getRecipe: QueryResolvers["getRecipe"] = async (
    _,
    { recipeId },
    { em },
) => {
    console.log(em.findOne(Recipe, { id: recipeId }));

    return em.findOne(Recipe, { id: recipeId });
};
