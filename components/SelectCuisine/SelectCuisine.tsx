import React from "react";

import { FirstCuisine } from "components/Cuisine/FirstCuisine";
import { SecondCuisine } from "components/Cuisine/SecondCuisine";
import { ThirdCuisine } from "components/Cuisine/ThirdCuisine";

export const SelectCuisine: React.FC = () => {
    return (
        <div className="flex flex-wrap items-center justify-center my-5 box-border">
            <FirstCuisine />
            <SecondCuisine />
            <ThirdCuisine />
        </div>
    );
};
