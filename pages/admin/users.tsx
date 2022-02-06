import React, { Fragment } from "react";

import { AdminHeader } from "components/Admin/AdminHeader";
import { AdminAside } from "components/Admin/AdminAside";
import { AdminUserTable } from "components/Admin/AdminUserTable";

const AdminUsersPage = () => {
    return (
        <Fragment>
            <AdminHeader />
            <div className="flex">
                <AdminAside />
                <AdminUserTable />
            </div>
        </Fragment>
    );
};

export default AdminUsersPage;
