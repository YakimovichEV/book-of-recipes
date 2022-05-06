import React, { Fragment } from "react";

import { Header } from "components/Admin/Header";
import { Aside } from "components/Admin/Aside";
import { History } from "components/Admin/History";

const AdminHistoryPage = () => {
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
