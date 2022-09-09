import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { Header, Footer } from "components/Layout";
import { DeleteAccount, ProfilePicture, Settings } from "components/Profile";

const Profile: NextPage = () => {
    // const router = useRouter();

    // const { data: session } = useSession();

    // useEffect(() => {
    //     if (typeof window !== "undefined" && !session?.user) {
    //         router.replace("/auth/login");
    //     }
    // }, [router, session?.user]);

    return (
        <>
            <Header />
            <div className="container mx-auto font-secondFont my-8">
                <h2 className="text-2xl mb-8 text-black dark:text-white">
                    Personal Profile
                </h2>
                <div className="w-full h-[1px] bg-gray-300 dark:bg-darkCharcoal" />
                <ProfilePicture />
                <Settings />
                <DeleteAccount />
            </div>
            <Footer />
        </>
    );
};

export default Profile;
