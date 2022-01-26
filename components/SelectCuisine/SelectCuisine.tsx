import React from "react";
import Image from "next/image";

import FirstPreferences from "/public/images/preferences-1.jpg";
import SecondPreferences from "/public/images/preferences-2.jpg";
import ThirdPreferences from "/public/images/preferences-3.jpg";
import Test from "/public/images/preferences-1.1.png";
import TesT from "/public/images/preferences-1.2.png";

export const SelectCuisine: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center my-5 box-border">
            <div className="group relative w-72 h-2/5 m-5 bg-dijon shadow-xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center border-4 border-dark overflow-hidden 2xl:w-96">
                <div className="relative flex justify-center items-center flex-col duration-500 h-full">
                    <Image
                        src={FirstPreferences}
                        className="object-cover brightness-75 duration-500 group-hover:brightness-50 group-hover:scale-125"
                        alt="first-preference"
                    />
                    <div className="primary-font absolute top-50 text-5xl text-white duration-500 group-hover:-translate-y-32 2xl:text-7xl">
                        <h3>Asian</h3>
                    </div>
                </div>
                <div className="absolute -bottom-72 h-60 flex flex-col justify-between duration-500 group-hover:bottom-4 2xl:group-hover:bottom-16">
                    <div className="flex">
                        <div className="mr-4">
                            <Image
                                src={Test}
                                className="w-1/3 rounded-tr-xl rounded-bl-xl border-2 border-dijon"
                                alt="test"
                            />
                        </div>
                        <div className="">
                            <Image
                                src={TesT}
                                className="w-1/3 rounded-tr-xl rounded-bl-xl border-2 border-dijon"
                                alt="TesT"
                            />
                        </div>
                    </div>
                    <label className="flex justify-center 2xl:mt-20">
                        <input
                            type="checkbox"
                            className="w-14 h-14 rounded-full bg-green text-dijon cursor-pointer border-black border-4 focus:ring-0 focus:ring-offset-0 2xl:w-16 2xl:h-16"
                        />
                    </label>
                </div>
            </div>
            <div className="group relative w-72 h-2/5 m-5 bg-dijon shadow-xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center border-4 border-dark overflow-hidden 2xl:w-96">
                <div className="relative flex justify-center items-center flex-col duration-500 h-full">
                    <Image
                        src={SecondPreferences}
                        className="object-cover brightness-75 duration-500 group-hover:brightness-50 group-hover:scale-125"
                        alt="second-preference"
                    />
                    <div className="primary-font absolute top-50 text-5xl text-white duration-500 group-hover:-translate-y-32 2xl:text-7xl">
                        <h3>
                            Middle <br /> eastern
                        </h3>
                    </div>
                </div>
                <div className="absolute -bottom-72 h-60 flex flex-col justify-between duration-500 group-hover:bottom-4 2xl:group-hover:bottom-10">
                    <div className="flex">
                        <div className="mr-4">
                            <Image
                                src={Test}
                                className="w-1/3 rounded-tr-xl rounded-bl-xl border border-dijon"
                                alt="test"
                            />
                        </div>
                        <div className="">
                            <Image
                                src={TesT}
                                className="w-1/3 rounded-tr-xl rounded-bl-xl border-2 border-dijon"
                                alt="TesT"
                            />
                        </div>
                    </div>
                    <label className="flex justify-center 2xl:mt-16">
                        <input
                            type="checkbox"
                            className="w-14 h-14 rounded-full bg-green text-dijon cursor-pointer border-black border-4 focus:ring-0 focus:ring-offset-0 2xl:w-16 2xl:h-16"
                        />
                    </label>
                </div>
            </div>
            <div className="group relative w-72 h-2/5 m-5 bg-dijon shadow-xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center border-4 border-dark overflow-hidden 2xl:w-96">
                <div className="relative flex justify-center items-center flex-col duration-500 h-full">
                    <Image
                        src={ThirdPreferences}
                        className="object-cover brightness-75 duration-500 group-hover:brightness-50 group-hover:scale-125"
                        alt="third-preference"
                    />
                    <div className="primary-font absolute top-50 text-5xl text-white duration-500 group-hover:-translate-y-32 2xl:text-7xl">
                        <h3>Western</h3>
                    </div>
                </div>
                <div className="absolute -bottom-72 h-60 flex flex-col justify-between duration-500 group-hover:bottom-4 2xl:group-hover:bottom-16">
                    <div className="flex">
                        <div className="mr-4">
                            <Image
                                src={Test}
                                className="w-1/3 rounded-tr-xl rounded-bl-xl border-2 border-dijon"
                                alt="test"
                            />
                        </div>
                        <div className="">
                            <Image
                                src={TesT}
                                className="w-1/3 rounded-tr-xl rounded-bl-xl border-2 border-dijon"
                                alt="TesT"
                            />
                        </div>
                    </div>
                    <label className="flex justify-center 2xl:mt-20">
                        <input
                            type="checkbox"
                            className="w-14 h-14 rounded-full bg-green text-dijon cursor-pointer border-black border-4 focus:ring-0 focus:ring-offset-0 2xl:w-16 2xl:h-16"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};
