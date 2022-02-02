import React from "react";
import Link from "next/link";

import { PersonalDataIconChanged } from "../../Icons/ProfileIcon/PersonalDataIconChanged";
import { DishesHistoryIconChanged } from "../../Icons/ProfileIcon/DishesHistoryIconChanged";

export const DishesHeader: React.FC = () => {
    return (
        <div className="flex justify-between items-center mx-2 my-5 border-b-4 border-dijon pb-3 sm:mx-5 sm:my-10 2xl:mx-20">
            <div className="flex items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-lg sm:w-20 sm:h-20">
                    <Link href="profile" passHref>
                        <a>
                            <PersonalDataIconChanged />
                        </a>
                    </Link>
                </div>
                <div className="bg-green w-16 h-16 flex items-center justify-center rounded-lg sm:w-20 sm:h-20 sm:ml-2">
                    <Link href="order-history" passHref>
                        <a>
                            <DishesHistoryIconChanged />
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
