import React, { Fragment } from "react";

import { AdminHeader } from "components/Admin/AdminHeader";
import { AdminAside } from "components/Admin/AdminAside";
import { AddRecipe } from "components/Admin/Recipes/AddRecipe";

const AddRecipePage = () => {
    return (
        <Fragment>
            <AdminHeader />
            <div className="flex">
                <AdminAside />
                <div className="w-full flex flex-col">
                    <AddRecipe />
                </div>
            </div>
        </Fragment>
    );
};

export default AddRecipePage;
