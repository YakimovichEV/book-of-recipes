import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBasketballBall } from "react-icons/fa";

// To Do: Заменить поле prepTime на  cuisine

interface ItemProps {
    id: string;
    name: string;
    image?: string;
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
        <div className="relative mt-5 bg-white rounded-lg shadow-lg hover:-translate-y-2 transition duration-300 ease-in-out dark:bg-eerieBlack">
            <Link href="/recipe/[id]" as={`/recipe/${id}`} passHref>
                <a>
                    <div className="relative overflow-hidden bg-none shadow-lg rounded-lg mx-4 -mt-4">
                        <Image
                            src={`/${image}`}
                            width={445}
                            height={300}
                            layout="responsive"
                            alt="Recipe photo"
                        />
                    </div>
                    <div className="p-6">
                        <h5 className="font-bold text-lg mb-3 text-black truncate dark:text-white">
                            {name}
                        </h5>
                        <p className="flex items-center text-gray-500 mb-4">
                            Cuisine: {prepTime}
                            <FaBasketballBall
                                size={17}
                                color="#c7a003"
                                className="ml-1"
                            />
                        </p>
                        <p className="mb-4 pb-2 text-black dark:text-white">
                            {description}
                        </p>
                    </div>
                </a>
            </Link>
        </div>
    );
};
