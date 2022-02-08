import { Resolvers } from "../generated/graphql";
import { Hello } from "./HelloWorld/queries/Hello";
import { createUser } from "./User/mutations/createUser";
import { getUserList } from "./User/queries/getUserList";
import { getRecipeList } from "./Recipe/queries/getRecipeList";
import { getRecipe } from "./Recipe/queries/getRecipe";
import { createRecipe } from "./Recipe/mutations/createRecipe";
import { createCategory } from "./Category/mutations/createCategory";
import { getCategory } from "./Category/queries/getCategory";
import {
    childCategories,
    parentCategory,
    recipes,
} from "./Category/fieldResolvers/Category";

export const ApolloResolvers: Resolvers = {
    Query: {
        hello: Hello,
        getUserList,
        getRecipeList,
        getRecipe,
        getCategory,
    },
    Mutation: {
        createUser,
        createRecipe,
        createCategory,
    },
    Category: {
        childCategories,
        recipes,
        parentCategory,
    },
};
