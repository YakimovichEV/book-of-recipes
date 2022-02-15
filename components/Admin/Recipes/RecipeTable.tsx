import React, { Fragment } from "react";
import Link from "next/link";

import { Row } from "./Row";
import { useGetRecipeListQuery } from "client/generated/graphql";
import { Spinner } from "../../Spinner/Spinner";
import { Pagination } from "components/Pagination/Pagination";
import { Button } from "components/Button/Button";

const headerTable =
    "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray500 uppercase border-b border-gray200 bg-gray-50 table-cell";

export const RecipeTable: React.FC = () => {
    const { data, loading } = useGetRecipeListQuery();

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <Fragment>
            <div className="w-full table bg-white">
                <div className="table-header-group">
                    <div className="table-row">
                        <div className={headerTable}>Name</div>
                        <div className={headerTable}>Description</div>
                        <div className={headerTable}>Category</div>
                        <div className={headerTable}>Ingredients</div>
                        <div className={headerTable}>Cooking Time</div>
                        <div className={headerTable}>Instructions</div>
                        <div className={headerTable}>Prep. Time</div>
                        <div className={headerTable}>Serves</div>
                        <div className={headerTable}>Tips</div>
                        <div className={headerTable}>Edit</div>
                        <div className={headerTable}>Delete</div>
                    </div>
                </div>
                <div className="table-row-group">
                    {data?.getRecipeList?.map((recipe) => (
                        <Row key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="px-6 py-3">
                    <Link href="/admin/recipes/add-recipe" passHref>
                        <a>
                            <Button type="button" style="addUserButton">
                                Add Recipe
                            </Button>
                        </a>
                    </Link>
                </div>
                <Pagination />
            </div>
        </Fragment>
    );
};
