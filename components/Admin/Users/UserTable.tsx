import React, { Fragment } from "react";
import Link from "next/link";

import { Row } from "./Row";
import { useGetUserListQuery } from "../../../client/generated/graphql";
import { Spinner } from "../../Spinner/Spinner";
import { Button } from "components/Button/Button";
import { Pagination } from "components/Pagination/Pagination";

const headerTable =
    "px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray500 uppercase border-b border-gray200 bg-gray-50 table-cell";

export const UserTable: React.FC = () => {
    const { data, loading } = useGetUserListQuery();

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
                        <div className={headerTable}>Email</div>
                        <div className={headerTable}>Phone</div>
                        <div className={headerTable}>Edit</div>
                        <div className={headerTable}>Delete</div>
                    </div>
                </div>
                <div className="table-row-group relative">
                    {data?.getUserList?.map((user) => (
                        <Row key={user.id} user={user} />
                    ))}
                </div>
            </div>
            <div className="flex justify-between">
                <div className="px-6 py-3">
                    <Link href="/admin/users/add-user" passHref>
                        <a>
                            <Button type="button" style="addUserButton">
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
