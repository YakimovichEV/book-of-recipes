import React, { Fragment } from "react";
import Image from "next/image";

import { AdminHeader } from "components/Admin/AdminHeader";
import { AdminAside } from "components/Admin/AdminAside";

import AdminImg from "public/images/admin.png";

const Admin = () => {
    return (
        <Fragment>
            <AdminHeader />
            <div className="flex">
                <AdminAside />
                <div className="w-full flex flex-col items-center justify-center">
                    <h1 className="text-center text-4xl m-10">Admin Page</h1>
                    <Image
                        src={AdminImg}
                        alt="Admin Img"
                        className="rounded-xl"
                    />
                </div>
            </div>
        </Fragment>
    );
};

export default Admin;
