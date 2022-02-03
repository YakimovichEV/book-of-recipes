import React from "react";
import Link from "next/link";

import { SpiceRating } from "components/Rating/SpiceRating";
import { VeganRating } from "components/Rating/VeganRating";
import { ChooseDifficulty } from "components/Rating/ChooseDifficulty";
import { ToggleButton } from "components/ToggleButton/ToggleButton";
import { Button } from "components/Button/Button";

const Preferences = () => {
    return (
        <div className="container mx-auto primary-font">
            <h2 className="text-5xl text-green text-center mt-5 sm:text-6xl md:text-8xl md:my-10">
                Preferences
            </h2>
            <div className="flex flex-col w-72 mx-auto sm:w-96 lg:w-3/5">
                <div className="mt-5 sm:flex sm:justify-between">
                    <h3 className="text-4xl mb-2 xl:text-5xl">
                        Spice tollerance:
                    </h3>

                    <SpiceRating />
                </div>
                <div className="mt-5 sm:flex sm:justify-between">
                    <h3 className="text-4xl mb-2 xl:text-5xl">
                        Vegetarian options:
                    </h3>

                    <VeganRating />
                </div>
                <div className="mt-5 text-4xl sm:flex sm:justify-between">
                    <span className="mr-5 text-4xl xl:text-5xl">
                        Difficulty:
                    </span>

                    <ChooseDifficulty />
                </div>

                <div className="mt-8 flex items-center justify-between">
                    <h3 className="text-4xl xl:text-5xl">Include gluten:</h3>
                    <span className="mr-11 sm:mr-0">
                        <ToggleButton />
                    </span>
                </div>
                <div className="flex justify-center mt-10 xl:mt-32">
                    <Link href="/testPage" passHref>
                        <a>
                            <Button
                                style="roundedButton"
                                className="second-font"
                            >
                                Save
                            </Button>
                        </a>
                    </Link>
                    <Link href="/cuisine" passHref>
                        <a>
                            <Button
                                style="roundedButton"
                                className="second-font ml-2"
                            >
                                Back
                            </Button>
                        </a>
                    </Link>
                </div>

                <h2 className="text-center second-font text-2xl text-green my-8 sm:text-3xl md:text-4xl xl:text-right xl:mt-32">
                    You can&nbsp;
                    <span className="text-dijon underline">
                        <Link href="/testPage">skip</Link>
                    </span>
                </h2>
            </div>
        </div>
    );
};

export default Preferences;
