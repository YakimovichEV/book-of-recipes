import React from "react";
import { NextPage } from "next";

import { Header, Footer } from "components/Layout";
import { List } from "components/RecipesHistory/List";

const DishesHistory: NextPage = () => {
    return (
        <>
            <div className="main">
                <Header />
                <h2 className="second-font text-center text-2xl text-black mt-5 lg:text-3xl 2xl:text-4xl dark:text-white">
                    Recipes history
                </h2>
                <div className="container mx-auto">
                    <List />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DishesHistory;
