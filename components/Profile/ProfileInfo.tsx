import React from "react";

import { UserIcon } from "components/Icons/ProfileIcon/UserIcon";

export const ProfileInfo: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="bg-green w-20 h-20 rounded-full flex items-center justify-center lg:w-28 lg:h-28">
                <UserIcon />
            </div>
            <span className="second-font text-xl text-green mt-3 lg:text-2xl 2xl:text-3xl">
                Toshka Jekie
            </span>
            <span className="second-font text-base text-zinc-500 lg:text-lg 2xl:text-xl">
                test@gmail.com
            </span>
        </div>
    );
};
