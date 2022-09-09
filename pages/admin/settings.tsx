import React, { Fragment } from "react";
import { NextPage } from "next";

import { Aside, Header, Settings } from "components/Admin";

const AdminSettingsPage: NextPage = () => {
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
