import { MyResolvers, QueryResolvers, Resolvers } from "../generated/graphql";
import { createUser } from "./User/mutations/createUser";
import { updateUser } from "./User/mutations/updateUser";
import { deleteUser } from "./User/mutations/deleteUser";
import { getUserList } from "./User/queries/getUserList";
import { firstName } from "./User/fieldResolvers/User";
import { getRecipeList } from "./Recipe/queries/getRecipeList";
import { getRecipe } from "./Recipe/queries/getRecipe";
import { createOrUpdateRecipe } from "./Recipe/mutations/createOrUpdateRecipe";
import { deleteRecipe } from "./Recipe/mutations/deleteRecipe";
import { createOrUpdateCategory } from "./Category/mutations/createOrUpdateCategory";
import { getCategory } from "./Category/queries/getCategory";
import { getMe } from "./User/queries/me";
import {
    childCategories,
    parentCategory,
    recipes,
} from "./Category/fieldResolvers/Category";
import { GraphQLUpload } from "graphql-upload";
import { getCategoryList } from "./Category/queries/getCategoryList";
import { recipeCategory } from "./Recipe/fieldResolvers/Recipe";

const key: keyof Required<Resolvers>["User"] = "firstName";

console.log(key);

// export type MyResolvers = {
//     Category: { parentCategory: MyType };
// };
const Query: QueryResolvers = {
    getUserList,
    getRecipeList,
    getRecipe,
    getCategory,
    getCategoryList,
    me: getMe,
};

export const ApolloResolvers: MyResolvers = {
    Query,
    Mutation: {
        createOrUpdateRecipe,
        deleteRecipe: deleteRecipe,
        createOrUpdateCategory,
        createUser,
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
    Recipe: {
        category: recipeCategory,
    },
    Upload: GraphQLUpload,
};
