import React, { Fragment } from "react";
import { NextPage } from "next";

import { Aside, Header } from "components/Admin";
import { AddRecipe } from "components/Admin/Recipes/AddRecipe";

const AddRecipePage: NextPage = () => {
    return (
        <Fragment>
            <Header />
            <div className="flex">
                <Aside />
                <div className="w-full flex flex-col">
                    <AddRecipe />
                </div>
            </div>
        </Fragment>
    );
};

export default AddRecipePage;
