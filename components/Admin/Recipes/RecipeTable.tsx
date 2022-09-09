import React, { Fragment, useCallback, useMemo, useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { Row } from "./index";
import { useDebounce } from "client/hooks/useDebounce";
import { Order, useOrderBy } from "client/hooks/useOrderBy";
import { useGetRecipeListQuery } from "client/generated/graphql";
import { Button, Pagination, SearchField, Spinner } from "components/common";

export const RecipeTable: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [order, setOrder] = useState<Order>("asc");

    const { t } = useTranslation("recipe-table");

    const { data, loading } = useGetRecipeListQuery();

    const debauncedQuery = useDebounce(query, 700);

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value),
        [],
    );

    const orderBy = () => setOrder(order === "asc" ? "desc" : "asc");

    const filteredData = useMemo(
        () =>
            data?.getRecipeList?.filter((element) => {
                if (debauncedQuery === "") {
                    return element;
                }

                return element.name
                    .toLowerCase()
                    .includes(debauncedQuery.toLowerCase());
            }),
        [data?.getRecipeList, debauncedQuery],
    );

    const sortedData = useOrderBy<
        Exclude<typeof filteredData, undefined>[number]
    >(filteredData || [], order, "name");

    const mappedData = sortedData.map((recipe) => (
        <Row key={recipe.id} recipe={recipe} />
    ));

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
                <div className="flex items-stretch justify-center w-96">
                    <SearchField onChange={onChange} />
                </div>
            </div>
            <div className="w-full table dark:border-black">
                <div className="table-header-group">
                    <div className="table-row">
                        <div
                            className="flex cursor-pointer recipe-table__header--admin"
                            onClick={orderBy}
                        >
                            {t("recipe-table:name")}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 ml-3"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                />
                            </svg>
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
                <div className="table-row-group">{mappedData}</div>
            </div>
            {!sortedData.length && (
                <h1 className="no-matches">
                    {t("recipe-table:no-matches")} 😕
                </h1>
            )}
            <div className="flex justify-between">
                <div className="px-6 py-4">
                    <Link href="/admin/recipes/add-recipe" passHref>
                        <a>
                            <Button type="button" style="adminButton">
                                {t("recipe-table:add-recipe")}
                            </Button>
                        </a>
                    </Link>
                </div>
                <Pagination />
            </div>
        </Fragment>
    );
};
