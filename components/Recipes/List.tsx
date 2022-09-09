import React, { useMemo } from "react";
import { useGetRecipeListQuery } from "client/generated/graphql";

import { Item } from "./Item";
import { Skeleton } from "./Skeleton";

// Застайлить ошибку

export const List: React.FC = () => {
    const { data, loading, error } = useGetRecipeListQuery();

    const recipes = useMemo(
        () =>
            data?.getRecipeList.map((recipe) => (
                <Item key={recipe.id} {...recipe} />
            )),
        [data?.getRecipeList],
    );

    const skeletons = [...new Array(6)].map((_, index: number) => (
        <Skeleton key={index} />
    ));

    if (error) {
        return (
            <h1 className="text-2xl font-bold text-center mt-10">
                An error has occured
            </h1>
        );
    }

    return (
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-x-12 my-10">
            {loading ? skeletons : recipes}
        </div>
    );
};
