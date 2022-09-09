import React from "react";

import { ProfileSettings } from "components/Forms/ProfileSettings";

export const Settings: React.FC = () => {
    return (
        <>
            <h2 className="text-2xl mt-8 mb-1 text-black dark:text-white">
                Profile Settings
            </h2>
            <h3 className="text-lg text-gray-400 mb-5">
                Change identifying details for your account
            </h3>
            <ProfileSettings />
        </>
    );
};
