import React, { Fragment } from "react";

import { Header } from "components/Admin/Header";
import { Aside } from "components/Admin/Aside";
import { Help } from "components/Admin/Help";

const AdminHelpPage = () => {
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
