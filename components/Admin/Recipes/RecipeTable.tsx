import React, { Fragment, useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { Row } from "./Row";
import { useGetRecipeListQuery } from "client/generated/graphql";
import { Spinner } from "../../Spinner/Spinner";
import { Pagination } from "components/Pagination/Pagination";
import { Button } from "components/Button/Button";
import { SearchField } from "components/SearchField/SearchField";

export const RecipeTable: React.FC = () => {
    const [query, setQuery] = useState<string>("");

    const { t } = useTranslation("recipe-table");

    const { data, loading } = useGetRecipeListQuery();

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const filteredAndMappedData = data?.getRecipeList
        ?.filter((element) => {
            if (query === "") {
                return element;
            }

            return element.name.toLowerCase().includes(query.toLowerCase());
        })
        .map((recipe) => <Row key={recipe.id} recipe={recipe} />);

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <Fragment>
            <div className="px-6 py-4 flex items-center justify-end">
                {/* <DropDown /> */}
                <div className="flex items-stretch justify-center w-96">
                    <SearchField onChange={onChange} />
                </div>
            </div>
            <div className="w-full table dark:border-black">
                <div className="table-header-group">
                    <div className="table-row">
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:name")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:description")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:category")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:ingredients")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:cooking-time")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:instructions")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:prep-time")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:serves")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:tips")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:edit")}
                        </div>
                        <div className="recipe-table__header--admin">
                            {t("recipe-table:delete")}
                        </div>
                    </div>
                </div>
                <div className="table-row-group">{filteredAndMappedData}</div>
            </div>
            <div className="flex justify-between">
                <div className="px-6 py-4">
                    <Link href="/admin/recipes/add-recipe" passHref>
                        <a>
                            <Button type="button" style="adminButton">
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
