import React, { Fragment } from "react";

import { Header } from "components/Admin/Header";
import { Aside } from "components/Admin/Aside";
import { Settings } from "components/Admin/Settings";

const AdminSettingsPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex">
                <Aside />
                <Settings />
            </div>
        </Fragment>
    );
};

export default AdminSettingsPage;
