import React, { useState } from "react";

import { Header } from "components/Recipe/Header";

export const Recipe: React.FC = () => {
    const [isActive, setIsActive] = useState<boolean>(false);

    const onChangeHandler = () => {
        setIsActive(!isActive);
    };

    // To do: Сократить ingrefients, instructions, recipe notes, nutritions

    return (
        <div className="container mx-auto max-w-5xl mb-10 second-font">
            <Header />
            <div className="bg-charlestonGreen h-10" />
            <div className="bg-[#f6f5f3] px-10 pb-10 dark:bg-eerieBlack">
                <p className="text-sacramento text-center texl-lg py-5 dark:text-gray-300">
                    A wonderful classic, elegant cocktail made famous by the
                    ladies of Sex and the City! The key is to get the balance of
                    each component just right so it`s not too sweet, not too
                    tart. <br />I particularly love Cosmos because they`re so
                    quick and easy to make. Also works well to make a big jug
                    and keep it cold in the fridge.
                </p>

                <div>
                    <h2 className="text-congo uppercase ml-2">Ingredients</h2>

                    <label
                        className={
                            !isActive
                                ? "flex items-center text-[#6d6c6c] m-2 dark:text-gray-400"
                                : "flex items-center text-[#6d6c6c] line-through m-2 dark:text-gray-400"
                        }
                    >
                        <input
                            type="checkbox"
                            className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0 bg-white checked:bg-dijon dark:bg-raisinBlack dark:checked:bg-raisinBlack"
                            onChange={onChangeHandler}
                        />
                        600ml/20 oz Vodka
                    </label>
                    <label className="flex items-center text-[#6d6c6c] m-2 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0 bg-white checked:bg-dijon dark:bg-raisinBlack dark:checked:bg-raisinBlack"
                        />
                        300ml/10 oz Cointreu
                    </label>
                    <label className="flex items-center text-[#6d6c6c] m-2 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0 bg-white checked:bg-dijon dark:bg-raisinBlack dark:checked:bg-raisinBlack"
                        />
                        900ml/30 oz Cranberry juice
                    </label>
                    <label className="flex items-center text-[#6d6c6c] m-2 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0 bg-white checked:bg-dijon dark:bg-raisinBlack dark:checked:bg-raisinBlack"
                        />
                        20 tsp lime juice
                    </label>
                    <label className="flex items-center text-[#6d6c6c] m-2 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0 bg-white checked:bg-dijon dark:bg-raisinBlack dark:checked:bg-raisinBlack"
                        />
                        Ice
                    </label>
                    <label className="flex items-center text-[#6d6c6c] m-2 dark:text-gray-400">
                        <input
                            type="checkbox"
                            className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0 bg-white checked:bg-dijon dark:bg-raisinBlack dark:checked:bg-raisinBlack"
                        />
                        Orange peel
                    </label>
                </div>

                <div className="py-2">
                    <h2 className="text-congo uppercase ml-2">Instructions</h2>

                    <div className="ml-2">
                        <div className="flex items-center m-2">
                            <span className="w-5 h-5 bg-sacramento flex items-center justify-center text-[#f6f5f3] rounded-full dark:bg-raisinBlack">
                                1
                            </span>
                            <span className="ml-2 text-black dark:text-gray-300">
                                Fill cocktail shaker with ice.
                            </span>
                        </div>
                        <div className="flex items-center m-2">
                            <span className="w-5 h-5 bg-sacramento flex items-center justify-center text-[#f6f5f3] rounded-full dark:bg-raisinBlack">
                                2
                            </span>
                            <span className="ml-2 text-black dark:text-gray-300">
                                Fill cocktail shaker with ice.
                            </span>
                        </div>
                        <div className="flex items-center m-2">
                            <span className="w-5 h-5 bg-sacramento flex items-center justify-center text-[#f6f5f3] rounded-full dark:bg-raisinBlack">
                                3
                            </span>
                            <span className="ml-2 text-black dark:text-gray-300">
                                Fill cocktail shaker with ice.
                            </span>
                        </div>
                    </div>
                </div>

                <div className="py-2 bg-white dark:bg-raisinBlack">
                    <h2 className="text-congo uppercase ml-2">Recipe Notes</h2>
                    <p className="text-[#6d6c6c] m-2 dark:text-gray-400">
                        1. Vodka – there`s a decent slug of vodka in Cosmos so
                        be sure to use a decent vodka. Absolut is my mid-shelf
                        vodka of choice. I reserve top shelf (expensive) vodka
                        for drinking straight!
                    </p>
                    <p className="text-[#6d6c6c] m-2 dark:text-gray-400">
                        2. Cointreau is a sweet orange flavoured liquor, called
                        triple sec. If you can`t find Cointreau, another brand
                        will be fine.
                    </p>
                    <p className="text-[#6d6c6c] m-2 dark:text-gray-400">
                        3. Cranberry juice – don`t get “diet” unsweetened
                        cranberry juice, you`ll find the drink too potent! Need
                        the sugar in the cranberry juice. If you accidentally
                        got unsweetened, make a simple syrup with equal parts
                        white sugar and hot water*, dissolve sugar, chill, then
                        add to your drink to take the sour edge off.
                    </p>
                    <p className="text-[#6d6c6c] m-2 dark:text-gray-400">
                        4. Nutrition per drink.
                    </p>
                </div>

                <div className="pt-2 border border-gray-300 my-7">
                    <h2 className="text-congo uppercase ml-2">
                        Nutrition Information
                    </h2>

                    <div className="ml-1 p-2">
                        <ul className="list-disc ml-4 flex flex-wrap">
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Calories:{" "}
                                <span className="font-normal">
                                    260 cal. (14%)
                                </span>
                            </li>
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Carbohydrates:{" "}
                                <span className="font-normal">20g (7%)</span>
                            </li>
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Protein:{" "}
                                <span className="font-normal">1g (2%)</span>
                            </li>
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Fat:{" "}
                                <span className="font-normal">1g (2%)</span>
                            </li>
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Saturated Fat:{" "}
                                <span className="font-normal">1g (6%)</span>
                            </li>
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Sodium: <span className="font-normal">5mg</span>
                            </li>
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Potassium:{" "}
                                <span className="font-normal">65mg (2%)</span>
                            </li>
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Sugar:{" "}
                                <span className="font-normal">20g (22%)</span>
                            </li>
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Vitamin C:{" "}
                                <span className="font-normal">11mg (13%)</span>
                            </li>
                            <li className="font-bold mr-8 text-black dark:text-gray-300">
                                Iron:{" "}
                                <span className="font-normal">1mg (6%)</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
