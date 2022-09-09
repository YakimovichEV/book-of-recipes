import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecipeQuery } from "client/generated/graphql";

import { Spinner } from "components/common";
import { Header, Footer } from "components/Layout";
import { Details, Recipe, Similar } from "components/Recipe";

// Добавить имя автора, рейтинг в запрос, застайлить проверки

const RecipePage: NextPage = () => {
    const router = useRouter();

    const id =
        typeof router.query.id === "string" ? String(router.query.id) : "-1";

    const { data, loading, error } = useRecipeQuery({
        variables: {
            recipeId: id,
        },
    });

    if (loading) {
        return <Spinner />;
    }

    if (error) {
        return (
            <h1 className="text-center font-bold text-xl">
                An error has occured
            </h1>
        );
    }

    if (!data?.getRecipe) {
        return (
            <div className="w-full h-screen flex items-center justify-center">
                <h1 className="font-bold text-4xl">Could not find recipe</h1>
            </div>
        );
    }

    return (
        <>
            <Header />
            <div className="container mx-auto my-0">
                <div className="flex flex-col justify-between w-full px-2 xl:flex-row">
                    <Details
                        name={data.getRecipe.name}
                        description={data.getRecipe.description}
                    />
                    <Similar />
                </div>
                <div className="h-[1px] mt-10 bg-gray-300 dark:bg-darkCharcoal sm:mt-20" />
                <Recipe />
            </div>
            {loading}
            <Footer />
        </>
    );
};

export default RecipePage;
