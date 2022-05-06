import React, { Fragment, useCallback, useMemo, useState } from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { Row } from "./Row";
import { useGetUserListQuery } from "../../../client/generated/graphql";
import { Spinner } from "components/Spinner/Spinner";
import { Button } from "components/Button/Button";
import { Pagination } from "components/Pagination/Pagination";
import { SearchField } from "components/SearchField/SearchField";
import { useDebounce } from "client/hooks/useDebounce";
import { Order, useOrderBy } from "client/hooks/useOrderBy";

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

    // Сортировка столбика // ЗБЕРЕГТИ ЗМІНИ
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
                        <div className="w-52 user-table__header--admin">
                            {t("user-table:role")}
                        </div>
                        <div
                            className="w-96 cursor-pointer user-table__header--admin"
                            onClick={() =>
                                setOrder(order === "asc" ? "desc" : "asc")
                            }
                        >
                            {t("user-table:name")}
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
                <div className="table-row-group relative">
                    {sortedData.map((user) => (
                        <Row key={user.id} user={user} />
                    ))}
                    {!sortedData.length && <h1>No matches were found</h1>}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="px-6 py-4">
                    <Link href="/admin/users/add-user" passHref>
                        <a>
                            <Button type="button" style="adminButton">
                                Add User
                            </Button>
                        </a>
                    </Link>
                </div>
                <Pagination />
            </div>
        </Fragment>
    );
};
