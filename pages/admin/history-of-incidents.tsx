import React, { Fragment } from "react";

import { AdminHeader } from "components/Admin/AdminHeader";
import { AdminAside } from "components/Admin/AdminAside";
import { AdminHistory } from "components/Admin/AdminHistory";

const AdminHistoryPage = () => {
    return (
        <Fragment>
            <AdminHeader />
            <div className="flex">
                <AdminAside />
                <AdminHistory />
            </div>
        </Fragment>
    );
};

export default AdminHistoryPage;
