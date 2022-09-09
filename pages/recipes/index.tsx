import React from "react";
import { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

import { List } from "components/Recipes/List";
import { Header, Footer } from "components/Layout";

// To Do: адаптив, поле поиска, фильтры
// FOOTER

const Recipes: NextPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <div className="main">
                <Header />
                <div className="mt-10 w-2/5 mx-auto text-center font-secondFont">
                    <h1 className="text-3xl">{t("recipes:title")}</h1>
                    <p className="text-lg my-5">{t("recipes:description")}</p>
                    <div className="w-40 h-2 rounded-xl mx-auto bg-orange-400" />
                </div>
                <div className="container mx-auto">
                    <List />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Recipes;
