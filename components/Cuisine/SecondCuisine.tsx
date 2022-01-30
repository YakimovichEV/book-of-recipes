import React, { useState } from "react";
import Image from "next/image";

import { groupClasses } from "./helper";

import SecondPreferences from "/public/images/preferences-2.jpg";
import Test from "/public/images/preferences-1.1.png";
import TesT from "/public/images/preferences-1.2.png";

export const SecondCuisine: React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleOnChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="group relative w-72 h-2/5 m-5 bg-dijon shadow-xl rounded-tl-2xl rounded-br-2xl flex items-center justify-center border-4 border-dark overflow-hidden 2xl:w-96">
            <div className="relative flex justify-center items-center flex-col duration-500 h-full">
                <Image
                    src={SecondPreferences}
                    className={
                        isChecked
                            ? `${groupClasses.imageChanged}`
                            : `${groupClasses.image}`
                    }
                    alt="second-preference"
                />
                <div
                    className={
                        isChecked
                            ? `${groupClasses.titleChanged}`
                            : `${groupClasses.title}`
                    }
                >
                    <h3>
                        Middle <br /> eastern
                    </h3>
                </div>
            </div>
            <div
                className={
                    isChecked
                        ? `${groupClasses.imgBlockChanged}`
                        : `${groupClasses.imgBlock}`
                }
            >
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
                <label className="flex justify-center 2xl:mt-20">
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleOnChange}
                        className="w-14 h-14 rounded-full bg-green text-dijon cursor-pointer border-black border-4 focus:ring-0 focus:ring-offset-0 2xl:w-16 2xl:h-16"
                    />
                </label>
            </div>
        </div>
    );
};
