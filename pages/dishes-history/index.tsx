import React, { Fragment } from "react";
import Link from "next/link";

import { DishesHeader } from "components/Profile/DishesHistory/DishesHeader";
import { DishesItems } from "components/Profile/DishesHistory/DishesItems";
import { Button } from "components/Button/Button";

const DishesHistory = () => {
    return (
        <Fragment>
            <DishesHeader />
            <h2 className="second-font text-center text-2xl text-green mb-5 lg:text-3xl 2xl:text-4xl">
                Dishes history
            </h2>

            <DishesItems />

            <Link href="/testPage" passHref>
                <a className="flex items-center justify-center md:my-10">
                    <Button>Home</Button>
                </a>
            </Link>
        </Fragment>
    );
};

export default DishesHistory;
