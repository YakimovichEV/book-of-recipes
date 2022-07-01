import { MutationResolvers } from "../../../generated/graphql";
import { Recipe } from "../../../entities/Recipe";
import { UserInputError } from "apollo-server-micro";
import { uploadFileS3 } from "../../../helpers/s3";

export const createOrUpdateRecipe: MutationResolvers["createOrUpdateRecipe"] =
    async (_root, { recipe, recipeId }, { em }) => {
        recipe.image = await uploadFileS3(recipe.image);

        if (recipeId) {
            await em.nativeUpdate(Recipe, { id: recipeId }, recipe);

            const recipeEntity = await em.findOne(Recipe, { id: recipeId });

            if (!recipeEntity) {
                throw new UserInputError("Error. Cancel?");
            }

            return recipeEntity;
        }

        const recipeEntity = new Recipe(recipe);

        await em.persistAndFlush(recipeEntity);

        return recipeEntity;
    };
