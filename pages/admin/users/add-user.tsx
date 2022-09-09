import React, { Fragment } from "react";
import { NextPage } from "next";

import { AddUser } from "components/Admin/Users/AddUser";
import { Aside, Header } from "components/Admin";

const AddUserPage: NextPage = () => {
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
