import React from "react";
import Link from "next/link";

import { PersonalDataIcon } from "components/Icons/ProfileIcon/PersonalDataIcon";
import { DishesHistoryIcon } from "components/Icons/ProfileIcon/DishesHistoryIcon";

export const ProfileHeader: React.FC = () => {
    return (
        <div className="flex justify-between items-center mx-2 my-5 border-b-4 border-dijon pb-3 sm:mx-5 sm:my-10 2xl:mx-20">
            <div className="flex items-center">
                <div className="bg-green w-16 h-16 flex items-center justify-center rounded-lg sm:w-20 sm:h-20">
                    <Link href="profile" passHref>
                        <a>
                            <PersonalDataIcon />
                        </a>
                    </Link>
                </div>
                <div className="w-16 h-16 flex items-center justify-center rounded-lg sm:w-20 sm:h-20 sm:ml-2">
                    <Link href="dishes-history" passHref>
                        <a>
                            <DishesHistoryIcon />
                        </a>
                    </Link>
                </div>
            </div>
            <h1 className="second-font text-lg text-green sm:text-2xl lg:text-3xl">
                Welcome, Username
            </h1>
        </div>
    );
};
