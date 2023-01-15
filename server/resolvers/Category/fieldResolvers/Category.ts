import { MyResolvers } from "../../../generated/graphql";

export const childCategories: MyResolvers["Category"]["childCategories"] =
    async (category, {}, { em }) => {
        await em.populate(category, ["childCategories"]);

        return category.childCategories || [];
    };

export const recipes: MyResolvers["Category"]["recipes"] = async (
    category,
    {},
    { em },
) => {
    await em.populate(category, ["recipes"]);

    return category.recipes || [];
};

export const parentCategory: MyResolvers["Category"]["parentCategory"] = async (
    category,
    {},
    { em },
) => {
    await em.populate(category, ["parentCategory"]);
    return category.parentCategory || null;
};
