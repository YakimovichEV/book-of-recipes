import React, { Fragment } from "react";

import { Header } from "components/Admin/Header";
import { Aside } from "components/Admin/Aside";
import { RecipeTable } from "components/Admin/Recipes/RecipeTable";

const Recipes = () => {
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
