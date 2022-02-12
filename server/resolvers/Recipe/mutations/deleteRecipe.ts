import { MutationResolvers } from "../../../generated/graphql";
import { Recipe } from "../../../entities/Recipe";

export const deleteRecipe: MutationResolvers["deleteRecipe"] = async (
    _root,
    { recipeId },
    { em },
) => {
    await em.nativeDelete(Recipe, { id: recipeId });

    return true;
};
