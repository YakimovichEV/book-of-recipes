import { Resolvers } from "../generated/graphql";
import { Hello } from "./HelloWorld/queries/Hello";
import { createUser } from "./User/mutations/createUser";
import { getUserList } from "./User/queries/getUserList";
import { getRecipeList } from "./Recipe/queries/getRecipeList";
import { createRecipe } from "./Recipe/mutations/createRecipe";
import { createCategory } from "./Category/mutations/createCategory";
import { getCategory } from "./Category/queries/getCategory";
import { childCategories, recipes } from "./Category/fieldResolvers/Category";

export const ApolloResolvers: Resolvers = {
    Query: {
        hello: Hello,
        getUserList,
        getRecipeList,
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
    },
};
