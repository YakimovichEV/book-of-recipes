import React from "react";
import Image from "next/image";

import RecipeImg from "/public/images/dishes-history.jpg";
import {
    FaBasketballBall,
    FaRegClock,
    FaRegUser,
    FaUtensils,
} from "react-icons/fa";
import { useRecipeQuery } from "client/generated/graphql";

export const Header: React.FC = () => {
    const { data } = useRecipeQuery();

    console.log(data);

    return (
        <div className="bg-sacramento h-80 relative flex flex-col items-center justify-end mt-40 sm:h-64 sm:mt-48">
            <div className="bg-sacramento absolute -top-28 z-10 border-8 border-sacramento rounded-full">
                <Image
                    src={RecipeImg}
                    width={200}
                    height={200}
                    alt="Recipe photo"
                    className="rounded-full"
                />
            </div>
            <h2 className="text-2xl text-dijon mb-1 sm:text-4xl sm:mb-5">
                Cosmopolitan Cocktails
            </h2>
            <ul className="flex flex-col items-center mb-2 sm:mb-10 sm:flex-row">
                <li className="flex items-center m-2">
                    <FaRegUser size={20} color="#c7a003" />
                    <span className="ml-1 text-dijon">Author: Username</span>
                </li>
                <li className="flex items-center m-2">
                    <FaRegClock size={20} color="#c7a003" />
                    <span className="ml-1 text-dijon">Prep: 5 min.</span>
                </li>
                <li className="flex items-center m-2">
                    <FaUtensils size={20} color="#c7a003" />
                    <span className="ml-1 text-dijon">Cocktails</span>
                </li>
                <li className="flex items-center m-2">
                    <FaBasketballBall size={20} color="#c7a003" />
                    <span className="ml-1 text-dijon">Western</span>
                </li>
            </ul>
        </div>
    );
};
