import React, { Fragment } from "react";
import { NextPage } from "next";

import { Aside, Header, History } from "components/Admin";

const AdminHistoryPage: NextPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex">
                <Aside />
                <History />
            </div>
        </Fragment>
    );
};

export default AdminHistoryPage;
