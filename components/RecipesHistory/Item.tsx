import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
    FaRegClock,
    FaBasketballBall,
    FaStar,
    FaStarHalfAlt,
    FaRegStar,
} from "react-icons/fa";

interface ItemProps {
    id: string;
    image: string;
    name: string;
    description: string;
    prepTime: number;
}

export const Item: React.FC<ItemProps> = ({
    id,
    name,
    image,
    description,
    prepTime,
}) => {
    return (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <Link href="/recipe/[id]" as={`/recipe/${id}`} passHref>
                <a className="group block bg-white shadow-md hover:shadow-xl duration-300 rounded-lg overflow-hidden dark:bg-eerieBlack">
                    <div className="relative overflow-hidden">
                        <Image
                            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 duration-300"
                            src={`/${image}`}
                            width={100}
                            height={100}
                            layout="responsive"
                            alt="Cosmopolitan Cocktails"
                        />
                    </div>
                    <div className="p-4">
                        <span className="inline-block px-2 py-1 leading-none bg-orange-200 rounded-full ">
                            <div className="flex items-center">
                                <FaBasketballBall size={20} color="#9a341280" />
                                <span className="ml-2 text-orange-800 font-semibold uppercase tracking-wide text-xs">
                                    Western
                                </span>
                            </div>
                        </span>
                        <h2 className="my-2 font-bold text-black dark:text-white">
                            {name}
                        </h2>
                        <p className="text-sm text-black dark:text-gray-300">
                            {description}
                        </p>
                    </div>
                    <div className="p-4 border-y text-xs text-gray-700 dark:text-gray-300">
                        <span className="flex items-center mb-1">
                            <FaRegClock
                                size={17}
                                className="text-black dark:text-white"
                            />
                            <span className="ml-2 text-sm">
                                {prepTime} min.
                            </span>
                        </span>
                    </div>
                    <div className="p-4 flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <FaStar size={16} color="#ffb200" />
                        <FaStar size={16} color="#ffb200" />
                        <FaStar size={16} color="#ffb200" />
                        <FaStarHalfAlt size={16} color="#ffb200" />
                        <FaRegStar size={16} color="#ffb200" />
                        <span className="ml-2">Overall Rating</span>
                    </div>
                </a>
            </Link>
        </div>
    );
};
