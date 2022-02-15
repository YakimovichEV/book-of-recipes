import { GetRecipeListQueryResult } from "../../../client/generated/graphql";

export type Recipe = NonNullable<
    GetRecipeListQueryResult["data"]
>["getRecipeList"][number];
