import React, { Fragment, useCallback, useMemo, useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { Row } from "./index";
import { useDebounce } from "client/hooks/useDebounce";
import { Order, useOrderBy } from "client/hooks/useOrderBy";
import { useGetUserListQuery } from "../../../client/generated/graphql";
import { Button, Pagination, SearchField, Spinner } from "components/common";

export const UserTable: React.FC = () => {
    const [query, setQuery] = useState<string>("");
    const [order, setOrder] = useState<Order>("asc");

    const { t } = useTranslation("user-table");

    const { data, loading } = useGetUserListQuery();

    const debauncedQuery = useDebounce(query, 700);

    const onChange = useCallback(
        (event: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(event.target.value),
        [],
    );

    const orderBy = () => setOrder(order === "asc" ? "desc" : "asc");

    const filteredData = useMemo(
        () =>
            data?.getUserList?.filter((element) => {
                if (debauncedQuery === "") {
                    return element;
                }

                return element.name
                    .toLowerCase()
                    .includes(debauncedQuery.toLowerCase());
            }),
        [data?.getUserList, debauncedQuery],
    );

    const sortedData = useOrderBy<
        Exclude<typeof filteredData, undefined>[number]
    >(filteredData || [], order, "name");

    const mappedData = sortedData.map((user) => (
        <Row key={user.id} user={user} />
    ));

    if (loading) {
        return (
            <div className="flex items-center justify-center">
                <Spinner />
            </div>
        );
    }

    return (
        <>
            <div className="px-6 py-4 flex items-center justify-end">
                <div className="flex items-stretch justify-center w-96">
                    <SearchField onChange={onChange} />
                </div>
            </div>
            <div className="w-full table dark:border-black">
                <div className="table-header-group">
                    <div className="table-row">
                        <div className="w-52 user-table__header--admin">
                            {t("user-table:role")}
                        </div>
                        <div
                            className="w-96 cursor-pointer user-table__header--admin"
                            onClick={orderBy}
                        >
                            {t("user-table:name")}
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
                        <div className="w-96 user-table__header--admin">
                            {t("user-table:email")}
                        </div>
                        <div className="w-96 user-table__header--admin">
                            {t("user-table:phone")}
                        </div>
                        <div className="user-table__header--admin">
                            {t("user-table:edit")}
                        </div>
                        <div className="user-table__header--admin">
                            {t("user-table:delete")}
                        </div>
                    </div>
                </div>
                <div className="table-row-group relative">{mappedData}</div>
            </div>
            {!sortedData.length && (
                <h1 className="no-matches">{t("user-table:no-matches")} 😕</h1>
            )}
            <div className="flex justify-between">
                <div className="px-6 py-4">
                    <Link href="/admin/users/add-user" passHref>
                        <a>
                            <Button type="button" style="adminButton">
                                {t("user-table:add-user")}
                            </Button>
                        </a>
                    </Link>
                </div>
                <Pagination />
            </div>
        </>
    );
};
