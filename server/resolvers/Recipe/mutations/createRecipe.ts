import { MutationResolvers } from "../../../generated/graphql";
import { Recipe } from "../../../entities/Recipe";

export const createRecipe: MutationResolvers["createRecipe"] = async (
    _root,
    { recipe },
    { em },
) => {
    const recipeEntity = new Recipe(recipe);

    await em.persistAndFlush(recipeEntity);

    return recipeEntity;
};
