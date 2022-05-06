import React, { Fragment } from "react";

import { Header } from "components/Admin/Header";
import { Aside } from "components/Admin/Aside";
import { UserTable } from "components/Admin/Users/UserTable";

const AdminUsersPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex">
                <Aside />
                <div className="w-full flex flex-col">
                    <div className="mx-10">
                        <div className="table__wrapper--admin">
                            <UserTable />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default AdminUsersPage;
