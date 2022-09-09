import React from "react";
import Image from "next/image";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import img1 from "/public/images/preferences-1.jpg";
import img2 from "/public/images/preferences-2.jpg";
import img3 from "/public/images/preferences-3.jpg";

interface DetailsProps {
    name: string;
    description: string;
}

export const Details: React.FC<DetailsProps> = ({ name, description }) => (
    <div className="font-secondFont mt-10 text-xl w-full lg:w-2/3 sm:mx-0">
        <h2 className="text-xl text-black dark:text-white sm:text-2xl">
            {name}
        </h2>

        <div className="flex flex-col mt-2 mb-3 sm:mt-3 sm:mb-5 sm:items-center sm:flex-row">
            <div className="flex items-center">
                <Image
                    className="rounded-full"
                    src={img2}
                    width={40}
                    height={40}
                    alt="Author photo"
                />
                <span className="text-dijon ml-2">Blossom</span>
            </div>
            <span className="my-2 text-black dark:text-white sm:mx-5">
                Cuisine: Western
            </span>
            <div className="flex items-center">
                <span className="mr-2 text-black dark:text-white">Rating:</span>
                <FaStar size={18} color="#ffb200" />
                <FaStar size={18} color="#ffb200" />
                <FaStar size={18} color="#ffb200" />
                <FaStarHalfAlt size={18} color="#ffb200" />
                <FaRegStar size={18} color="#ffb200" />
            </div>
        </div>

        <div className="flex items-center">
            <span className="mr-2 sm:mr-5">
                <Image
                    className="rounded-3xl"
                    src={img1}
                    width={280}
                    height={400}
                    alt="Recipe photo"
                />
            </span>
            <span className="mr-2 sm:mr-5">
                <Image
                    className="rounded-3xl"
                    src={img2}
                    width={280}
                    height={400}
                    alt="Recipe photo"
                />
            </span>
            <span>
                <Image
                    className="rounded-3xl"
                    src={img3}
                    width={280}
                    height={400}
                    alt="Recipe photo"
                />
            </span>
        </div>

        <div className="mt-5">
            <p className="text-base text-black dark:text-white sm:text-lg lg:text-xl">
                {description}
            </p>
        </div>
    </div>
);
