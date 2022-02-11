import React, { Fragment } from "react";

import { AdminHeader } from "components/Admin/AdminHeader";
import { AdminAside } from "components/Admin/AdminAside";
import { UserTable } from "components/Admin/Users/UserTable";
import { AddUser } from "components/Admin/Users/AddUser";

const AdminUsersPage = () => {
    return (
        <Fragment>
            <AdminHeader />
            <div className="flex">
                <AdminAside />
                <div className="w-full flex flex-col">
                    <div className="m-10 w-4/5">
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray200 shadow sm:rounded-lg">
                            <UserTable />
                        </div>
                    </div>
                    <AddUser />
                </div>
            </div>
        </Fragment>
    );
};

export default AdminUsersPage;
