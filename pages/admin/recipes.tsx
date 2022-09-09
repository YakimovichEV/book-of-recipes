import React, { Fragment } from "react";
import { NextPage } from "next";

import { Aside, Header } from "components/Admin";
import { RecipeTable } from "components/Admin/Recipes/RecipeTable";

const Recipes: NextPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex">
                <Aside />
                <div className="w-full flex flex-col">
                    <div className="mx-10">
                        <div className="table__wrapper--admin">
                            <RecipeTable />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Recipes;
