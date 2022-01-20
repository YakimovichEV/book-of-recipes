import React from "react";
import Image from "next/image";

import FirstPreferences from "/public/images/preferences-1.jpg";
import SecondPreferences from "/public/images/preferences-2.jpg";
import ThirdPreferences from "/public/images/preferences-3.jpg";
import Test from "/public/images/preferences-1.1.jpg";
import TesT from "/public/images/preferences-1.2.jpg";

export const Cuisine: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center my-5 box-border">
            <div className="group relative w-72 h-2/5 m-5 bg-dijon shadow-xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center border-4 border-dark overflow-hidden">
                <div className="relative flex justify-center items-center flex-col duration-500 h-full">
                    <Image
                        src={FirstPreferences}
                        className="object-cover brightness-75 duration-500 group-hover:brightness-50"
                        alt="first-preference"
                    />
                    <div className="primary-font absolute top-50 text-5xl text-white duration-500 group-hover:-translate-y-28">
                        <h3>Asian</h3>
                    </div>
                </div>
                <div className="absolute -bottom-72 h-60 flex flex-col justify-between duration-500 group-hover:bottom-6">
                    <div className="flex justify-between">
                        <div className="mr-2">
                            <Image
                                width={130}
                                height={100}
                                src={Test}
                                className="mr-2 rounded-tr-xl rounded-bl-xl border border-dijon"
                            />
                        </div>
                        <div>
                            <Image
                                width={130}
                                height={100}
                                src={TesT}
                                className="rounded-tr-xl rounded-bl-xl border border-dijon"
                            />
                        </div>
                    </div>
                    <label className="flex justify-center">
                        <input
                            type="checkbox"
                            className="w-14 h-14 rounded-full bg-green text-dijon cursor-pointer border-black border-4 focus:ring-0 focus:ring-offset-0"
                        />
                    </label>
                </div>
            </div>
            <div className="group relative w-72 h-2/5 m-5 bg-dijon shadow-xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center border-4 border-dark overflow-hidden">
                <div className="relative flex justify-center items-center flex-col duration-500 h-full">
                    <Image
                        src={SecondPreferences}
                        className="object-cover brightness-75 duration-500 group-hover:brightness-50"
                        alt="first-preference"
                    />
                    <div className="primary-font absolute top-50 text-5xl text-white text-center duration-500 group-hover:-translate-y-28">
                        <h3>Middle eastern</h3>
                    </div>
                </div>
                <div className="absolute -bottom-72 flex h-72 overflow-hidden duration-500 group-hover:bottom-0">
                    <div className="pr-2 translate-y-10">
                        <Image width={130} height={100} src={Test} />
                    </div>
                    <div className="translate-y-10">
                        <Image width={130} height={100} src={TesT} />
                    </div>
                    <label className="absolute inset-1/2 -ml-7 translate-y-16">
                        <input
                            type="checkbox"
                            className="w-14 h-14 rounded-full bg-green text-dijon cursor-pointer border-black border-4 focus:ring-0 focus:ring-offset-0"
                        />
                    </label>
                </div>
            </div>
            <div className="group relative w-72 h-2/5 m-5 bg-dijon shadow-xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center border-4 border-dark overflow-hidden">
                <div className="relative flex justify-center items-center flex-col duration-500 h-full">
                    <Image
                        src={ThirdPreferences}
                        className="object-cover brightness-75 duration-500 group-hover:brightness-50"
                        alt="first-preference"
                    />
                    <div className="primary-font absolute top-50 text-5xl text-white duration-500 group-hover:-translate-y-28">
                        <h3>Western</h3>
                    </div>
                </div>
                <div className="absolute -bottom-72 flex h-72 overflow-hidden duration-500 group-hover:bottom-0">
                    <div className="pr-2 translate-y-10">
                        <Image width={130} height={100} src={Test} />
                    </div>
                    <div className="translate-y-10">
                        <Image width={130} height={100} src={TesT} />
                    </div>
                    <label className="absolute inset-1/2 -ml-7 translate-y-16">
                        <input
                            type="checkbox"
                            className="w-14 h-14 rounded-full bg-green text-dijon cursor-pointer border-black border-4 focus:ring-0 focus:ring-offset-0"
                        />
                    </label>
                </div>
            </div>
        </div>
    );
};
