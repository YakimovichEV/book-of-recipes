import React from "react";
import { NextPage } from "next";

import { RegistrationForm } from "components/Auth/Registration/RegistrationForm";

const Registration: NextPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-khaki11">
            <RegistrationForm />
        </div>
    );
};

export default Registration;
