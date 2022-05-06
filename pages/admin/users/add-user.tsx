import React, { Fragment } from "react";

import { AddUser } from "components/Admin/Users/AddUser";
import { Header } from "components/Admin/Header";
import { Aside } from "components/Admin/Aside";

const AddUserPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex">
                <Aside />
                <div className="w-full flex flex-col">
                    <AddUser />
                </div>
            </div>
        </Fragment>
    );
};

export default AddUserPage;
