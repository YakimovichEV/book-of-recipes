import React, { Fragment } from "react";
import Image from "next/image";
import { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

import { Aside, Header } from "components/Admin";

import AdminImg from "public/images/admin.png";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Admin: NextPage = () => {
    const router = useRouter();

    const { status } = useSession({
        required: true,
        onUnauthenticated() {
            router.push("/recipes");
        },
    });

    console.log(status);

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
