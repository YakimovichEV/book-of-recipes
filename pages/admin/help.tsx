import React, { Fragment } from "react";
import { NextPage } from "next";

import { Aside, Header, Help } from "components/Admin";

const AdminHelpPage: NextPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex">
                <Aside />
                <Help />
            </div>
        </Fragment>
    );
};

export default AdminHelpPage;
