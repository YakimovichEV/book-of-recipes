import React, { Fragment } from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

import { Header } from "components/Admin/Header";
import { Aside } from "components/Admin/Aside";
import AdminImg from "public/images/admin.png";

const Admin = () => {
    const { t } = useTranslation("admin");

    return (
        <Fragment>
            <Header />
            <div className="flex">
                <Aside />
                <div className="w-4/5 flex flex-col items-center justify-center">
                    <h1 className="text-center text-4xl m-10 text-black dark:text-white">
                        {t("admin:title")}
                    </h1>
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
