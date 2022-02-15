import React, { Fragment, useState } from "react";

import { Header } from "components/Header/Header";
import { RecipeHeader } from "components/Recipe/RecipeHeader";

const RecipePage = () => {
    const [isActive, setIsActive] = useState(false);

    const onChangeHandler = () => {
        setIsActive(!isActive);
    };

    return (
        <Fragment>
            <Header />
            <div className="container mx-auto mt-16 second-font">
                <RecipeHeader />
                <div className="bg-lightBlack h-10" />
                <div className="bg-[#f6f5f3]">
                    <p className="text-green text-center texl-lg py-5">
                        A wonderful classic, elegant cocktail made famous by the
                        ladies of Sex and the City! The key is to get the
                        balance of each component just right so it`s not too
                        sweet, not too tart.
                    </p>

                    <div className="py-2">
                        <h2 className="text-lightRed uppercase ml-2">
                            Ingredients
                        </h2>

                        <label
                            className={
                                !isActive
                                    ? "flex items-center text-[#6d6c6c] m-2"
                                    : "flex items-center text-[#6d6c6c] line-through m-2"
                            }
                        >
                            <input
                                type="checkbox"
                                className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0"
                                onChange={onChangeHandler}
                            />
                            600ml/20 oz Vodka
                        </label>
                        <label className="flex items-center text-[#6d6c6c] m-2">
                            <input
                                type="checkbox"
                                className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0"
                            />
                            300ml/10 oz Cointreu
                        </label>
                        <label className="flex items-center text-[#6d6c6c] m-2">
                            <input
                                type="checkbox"
                                className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0"
                            />
                            900ml/30 oz Cranberry juice
                        </label>
                        <label className="flex items-center text-[#6d6c6c] m-2">
                            <input
                                type="checkbox"
                                className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0"
                            />
                            20 tsp lime juice
                        </label>
                        <label className="flex items-center text-[#6d6c6c] m-2">
                            <input
                                type="checkbox"
                                className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0"
                            />
                            Ice
                        </label>
                        <label className="flex items-center text-[#6d6c6c] m-2">
                            <input
                                type="checkbox"
                                className="w-7 h-7 mr-2 text-dijon cursor-pointer border-2 border-[#6d6c6c] focus:ring-0 focus:ring-offset-0"
                            />
                            Orange peel
                        </label>
                    </div>

                    <div className="my-2">
                        <h2 className="text-lightRed uppercase ml-2">
                            Instructions
                        </h2>

                        <div className="ml-2">
                            <div className="flex items-center m-2">
                                <span className="w-5 h-5 bg-green flex items-center justify-center text-[#f6f5f3] rounded-full">
                                    1
                                </span>
                                <span className="ml-2">
                                    Fill cocktail shaker with ice.
                                </span>
                            </div>
                            <div className="flex items-center m-2">
                                <span className="w-5 h-5 bg-green flex items-center justify-center text-[#f6f5f3] rounded-full">
                                    2
                                </span>
                                <span className="ml-2">
                                    Fill cocktail shaker with ice.
                                </span>
                            </div>
                            <div className="flex items-center m-2">
                                <span className="w-5 h-5 bg-green flex items-center justify-center text-[#f6f5f3] rounded-full">
                                    3
                                </span>
                                <span className="ml-2">
                                    Fill cocktail shaker with ice.
                                </span>
                            </div>
                        </div>

                        <div className="bg-white pt-2">
                            <h2 className="text-lightRed uppercase ml-2">
                                Recipe Notes
                            </h2>
                            <p className="text-[#6d6c6c] m-2">
                                1. Vodka – there`s a decent slug of vodka in
                                Cosmos so be sure to use a decent vodka. Absolut
                                is my mid-shelf vodka of choice. I reserve top
                                shelf (expensive) vodka for drinking straight!
                            </p>
                            <p className="text-[#6d6c6c] m-2">
                                2. Cointreau is a sweet orange flavoured liquor,
                                called triple sec. If you can`t find Cointreau,
                                another brand will be fine.
                            </p>
                            <p className="text-[#6d6c6c] m-2">
                                3. Cranberry juice – don`t get “diet”
                                unsweetened cranberry juice, you`ll find the
                                drink too potent! Need the sugar in the
                                cranberry juice. If you accidentally got
                                unsweetened, make a simple syrup with equal
                                parts white sugar and hot water*, dissolve
                                sugar, chill, then add to your drink to take the
                                sour edge off.
                            </p>
                            <p className="text-[#6d6c6c] m-2">
                                4. Nutrition per drink.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default RecipePage;
