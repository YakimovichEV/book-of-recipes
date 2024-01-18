import { UserInputError } from "apollo-server-micro";
import { RecipeResolvers } from "../../../generated/graphql";

export const recipeCategory: RecipeResolvers["category"] = async (
    recipe,
    {},
    { em },
) => {
    if (!recipe.category) {
        throw new UserInputError("No category found! Volvo fix plz!");
    }

    await em.populate(recipe, ["category"]);

    return recipe.category || [];
};
