import React from "react";
import { NextPage } from "next";

import { Footer, Header } from "components/Layout";

const PrivacyPolicy: NextPage = () => {
    return (
        <>
            <div className="main">
                <Header />
                <div className="container mx-auto">
                    <h2 className="second-font text-2xl text-black mt-5 lg:text-3xl dark:text-white">
                        Privacy Policy
                    </h2>

                    <p className="my-5">
                        At Recipe book, we understand our role and our social
                        obligation in protecting all personal information held
                        by us. As such, we have drawn up this personal
                        information protection policy (Privacy Policy) to
                        explicitly state the intention of all our officers and
                        employees to obey all applicable laws and regulations on
                        personal information usage and disclosure, to implement
                        an appropriate data protection management system, and to
                        maintain and enhance such system in light of the social
                        and technological changes of an ever-evolving society.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
