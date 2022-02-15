import React, { Fragment } from "react";

import { AdminAside } from "components/Admin/AdminAside";
import { AdminHeader } from "components/Admin/AdminHeader";
import { RecipeTable } from "components/Admin/Recipes/RecipeTable";

const Recipes = () => {
    return (
        <Fragment>
            <AdminHeader />
            <div className="flex">
                <AdminAside />
                <div className="w-full flex flex-col">
                    <div className="m-10">
                        <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray200 shadow sm:rounded-lg">
                            <RecipeTable />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Recipes;
