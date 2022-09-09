import React from "react";
import Link from "next/link";
import { NextPage } from "next";

import { Button } from "components/common";
import { SelectCuisine } from "components/SelectCuisine/SelectCuisine";

const Cuisine: NextPage = () => {
    return (
        <div className="container mx-auto">
            <h2 className="primary-font text-6xl text-sacramento text-center mt-5 sm:text-6xl md:text-8xl">
                Cuisine
            </h2>
            <SelectCuisine />
            <Link href="/preferences" passHref>
                <a className="flex justify-center second-font mt-10">
                    <Button style="roundedButton" className="text-shadow">
                        Save
                    </Button>
                </a>
            </Link>
            <h2 className="text-center second-font text-2xl text-sacramento my-8 sm:text-3xl md:text-4xl lg:flex justify-end mr-10 xl:mr-40">
                You can&nbsp;
                <span className="text-dijon underline">
                    <Link href="/testPage">skip</Link>
                </span>
            </h2>
        </div>
    );
};

export default Cuisine;
