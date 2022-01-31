import React from "react";

import { ProfileHeader } from "components/Profile/ProfileHeader";
import { ProfileInfo } from "components/Profile/ProfileInfo";
import { ProfileForm } from "components/Profile/ProfileForm";

const Profile = () => {
    return (
        <div>
            <ProfileHeader />
            <div className="lg:flex lg:items-center lg:w-full">
                <div className="lg:w-1/2">
                    <h2 className="second-font text-center text-2xl text-green mb-5 lg:text-3xl 2xl:text-4xl">
                        Personal information
                    </h2>
                    <ProfileInfo />
                </div>
                <div className="lg:w-1/2">
                    <h2 className="second-font text-center text-2xl text-green my-5 lg:text-3xl 2xl:text-4xl">
                        Profile Settings
                    </h2>
                    <ProfileForm />
                </div>
            </div>
        </div>
    );
};

export default Profile;
