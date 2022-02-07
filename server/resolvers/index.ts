import { Resolvers } from "../generated/graphql";
import { Hello } from "./HelloWorld/queries/Hello";
import { createUser } from "./User/mutations/createUser";
import { updateUser } from "./User/mutations/updateUser";
import { deleteUser } from "./User/mutations/deleteUser";
import { getUserList } from "./User/queries/getUserList";
import { firstName } from "./User/fieldResolvers/User";

import { getRecipeList } from "./Recipe/queries/getRecipeList";
import { getRecipe } from "./Recipe/queries/getRecipe";
import { createOrUpdateRecipe } from "./Recipe/mutations/createOrUpdateRecipe";
import { createOrUpdateCategory } from "./Category/mutations/createOrUpdateCategory";
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
        createOrUpdateRecipe,
        createOrUpdateCategory,
        updateUser,
        deleteUser,
    },
    Category: {
        childCategories,
        recipes,
        parentCategory,
    },
    User: {
        firstName,
    },
};
