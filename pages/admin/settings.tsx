import React, { Fragment } from "react";

import { AdminHeader } from "components/Admin/AdminHeader";
import { AdminAside } from "components/Admin/AdminAside";
import { AdminSettings } from "components/Admin/AdminSettings";

const AdminSettingsPage = () => {
    return (
        <Fragment>
            <AdminHeader />
            <div className="flex">
                <AdminAside />
                <AdminSettings />
            </div>
        </Fragment>
    );
};

export default AdminSettingsPage;
