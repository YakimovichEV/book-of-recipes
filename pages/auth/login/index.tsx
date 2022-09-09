import React from "react";
import { NextPage } from "next";

import { LoginForm } from "components/Auth/Login/LoginForm";

const Login: NextPage = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-khaki11">
            <LoginForm />
        </div>
    );
};

export default Login;
