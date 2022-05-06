import React, { Fragment } from "react";

import { Header } from "components/Admin/Header";
import { Aside } from "components/Admin/Aside";
import { AddRecipe } from "components/Admin/Recipes/AddRecipe";

const AddRecipePage = () => {
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
