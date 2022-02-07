import { ApolloContext } from "../../../../@types/graphql";
import { CategoryResolvers, Category } from "../../../generated/graphql";

type ResolverList = CategoryResolvers<ApolloContext, Category>;

export const childCategories: ResolverList["childCategories"] = async (
    category,
    {},
    { em },
) => {
    await em.populate(category, ["childCategories"]);

    return category.childCategories || [];
};

export const recipes: ResolverList["recipes"] = async (
    category,
    {},
    { em },
) => {
    await em.populate(category, ["recipes"]);

    return category.recipes || [];
};

export const parentCategory: ResolverList["parentCategory"] = async (
    category,
    {},
    { em },
) => {
    await em.populate(category, ["parentCategory"]);
    return category.parentCategory || null;
};
