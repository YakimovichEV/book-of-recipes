import React, { Fragment } from "react";

import { AdminHeader } from "components/Admin/AdminHeader";
import { AdminAside } from "components/Admin/AdminAside";
import { AdminHelp } from "components/Admin/AdminHelp";

const AdminHelpPage = () => {
    return (
        <Fragment>
            <AdminHeader />
            <div className="flex">
                <AdminAside />
                <AdminHelp />
            </div>
        </Fragment>
    );
};

export default AdminHelpPage;
