import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaRegClock, FaBasketballBall } from "react-icons/fa";

import img1 from "/public/images/preferences-1.jpg";
import img2 from "/public/images/preferences-2.jpg";
import img3 from "/public/images/preferences-3.jpg";

export const Similar: React.FC = () => {
    return (
        <div className="font-secondFont mx-2">
            <div className="flex items-center mt-10 mb-5">
                <span className="text-xl text-black dark:text-white sm:text-2xl mr-3">
                    You should also try
                </span>
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-24 sm:w-32 h-[1px] bg-gray-300 dark:bg-darkCharcoal" />
            </div>

            <div className="flex flex-row flex-wrap xl:flex-col">
                <div className="w-80 flex items-center mb-5 lg:flex-row">
                    <Image
                        src={img1}
                        width={100}
                        height={120}
                        alt="Recipe photo"
                    />
                    <div className="flex flex-col m-2">
                        <Link href="#" passHref>
                            <a className="w-48 text-lg text-black dark:text-white truncate hover:underline">
                                Cosmopolitan Cocktails
                            </a>
                        </Link>
                        <div className="flex items-center mt-3">
                            <FaRegClock size={16} color="#ef4444" />
                            <span className="mx-2 text-black dark:text-gray-300">
                                30 min.
                            </span>
                            <FaBasketballBall size={17} color="#ef4444" />
                            <span className="ml-2 text-black dark:text-gray-300">
                                Western
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-80 flex items-center mb-5">
                    <Image
                        src={img2}
                        width={100}
                        height={120}
                        alt="Recipe photo"
                    />
                    <div className="flex flex-col m-2">
                        <Link href="#" passHref>
                            <a className="w-48 text-lg text-black dark:text-white truncate hover:underline">
                                Bangkok Coconut
                            </a>
                        </Link>
                        <div className="flex items-center mt-3">
                            <FaRegClock size={16} color="#ef4444" />
                            <span className="mx-2 text-black dark:text-gray-300">
                                50 min.
                            </span>
                            <FaBasketballBall size={17} color="#ef4444" />
                            <span className="ml-2 text-black dark:text-gray-300">
                                Turkish
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-80 flex items-center mb-5">
                    <Image
                        src={img3}
                        width={100}
                        height={120}
                        alt="Recipe photo"
                    />
                    <div className="flex flex-col m-2">
                        <Link href="#" passHref>
                            <a className="w-48 text-lg text-black dark:text-white truncate hover:underline">
                                Roasted Veg Tacos
                            </a>
                        </Link>
                        <div className="flex items-center mt-3">
                            <FaRegClock size={16} color="#ef4444" />
                            <span className="mx-2 text-black dark:text-gray-300">
                                10 min.
                            </span>
                            <FaBasketballBall size={17} color="#ef4444" />
                            <span className="ml-2 text-black dark:text-gray-300">
                                Chinese
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-80 flex items-center mb-5">
                    <Image
                        src={img1}
                        width={100}
                        height={120}
                        alt="Recipe photo"
                    />
                    <div className="flex flex-col m-2">
                        <Link href="#" passHref>
                            <a className="w-48 text-lg text-black dark:text-white truncate hover:underline">
                                Stacked Tomato
                            </a>
                        </Link>
                        <div className="flex items-center mt-3">
                            <FaRegClock size={16} color="#ef4444" />
                            <span className="mx-2 text-black dark:text-gray-300">
                                45 min.
                            </span>
                            <FaBasketballBall size={17} color="#ef4444" />
                            <span className="ml-2 text-black dark:text-gray-300">
                                East
                            </span>
                        </div>
                    </div>
                </div>

                <div className="w-80 flex items-center mb-5">
                    <Image
                        src={img2}
                        width={100}
                        height={120}
                        alt="Recipe photo"
                    />
                    <div className="flex flex-col m-2">
                        <Link href="#" passHref>
                            <a className="w-48 text-lg text-black dark:text-white truncate hover:underline">
                                Bangkok Coconut
                            </a>
                        </Link>
                        <div className="flex items-center mt-3">
                            <FaRegClock size={16} color="#ef4444" />
                            <span className="mx-2 text-black dark:text-gray-300">
                                50 min.
                            </span>
                            <FaBasketballBall size={17} color="#ef4444" />
                            <span className="ml-2 text-black dark:text-gray-300">
                                Turkish
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
