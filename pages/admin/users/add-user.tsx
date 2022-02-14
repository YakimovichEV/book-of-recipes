import React, { Fragment } from "react";

import { AddUser } from "components/Admin/Users/AddUser";
import { AdminHeader } from "components/Admin/AdminHeader";
import { AdminAside } from "components/Admin/AdminAside";

const AddUserPage = () => {
    return (
        <Fragment>
            <AdminHeader />
            <div className="flex">
                <AdminAside />
                <div className="w-full flex flex-col">
                    <AddUser />
                </div>
            </div>
        </Fragment>
    );
};

export default AddUserPage;
