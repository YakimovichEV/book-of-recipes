import React from "react";
import Image from "next/image";

import { AuthorIcon } from "../Icons/RecipeIcon/AuthorIcon";
import { PrepIcon } from "../Icons/RecipeIcon/PrepIcon";
import { RecipeTypeIcon } from "../Icons/RecipeIcon/RecipeTypeIcon";
import { CuisineIcon } from "../Icons/RecipeIcon/CuisineIcon";

import RecipeImg from "/public/images/dishes-history.jpg";

export const RecipeHeader: React.FC = () => {
    return (
        <div className="bg-green flex flex-col items-center justify-center">
            <div className="m-3">
                <Image
                    src={RecipeImg}
                    width={200}
                    height={200}
                    alt="Recipe photo"
                    className="rounded-full overflow-visible"
                />
            </div>
            <h2 className="text-xl text-dijon mt-2">Cosmopolitan Cocktails</h2>
            <ul className="flex flex-col items-center">
                <li className="flex items-center m-1">
                    <AuthorIcon />
                    <span className="ml-2 text-dijon">Author: Username</span>
                </li>
                <li className="flex items-center m-1">
                    <PrepIcon />
                    <span className="ml-2 text-dijon">Prep: 5 min.</span>
                </li>
                <li className="flex items-center m-1">
                    <RecipeTypeIcon />
                    <span className="ml-2 text-dijon">Cocktails</span>
                </li>
                <li className="flex items-center m-1 pb-3">
                    <CuisineIcon />
                    <span className="ml-2 text-dijon">Western</span>
                </li>
            </ul>
        </div>
    );
};
