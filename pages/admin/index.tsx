import React, { Fragment } from "react";

import { AdminHeader } from "components/Admin/AdminHeader";
import { AdminAside } from "components/Admin/AdminAside";

const Admin = () => {
    return (
        <Fragment>
            <AdminHeader />
            <AdminAside />
        </Fragment>
    );
};

export default Admin;
