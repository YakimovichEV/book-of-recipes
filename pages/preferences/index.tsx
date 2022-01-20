import React, { Fragment } from "react";

import { Cuisine } from "../../components/Cuisine/Cuisine";

const Preferences = () => {
    return (
        <Fragment>
            <h2 className="primary-font text-5xl text-green text-center mt-5 sm:text-6xl md:text-7xl">
                Cuisine
            </h2>
            <Cuisine />
            <h2 className="primary-font text-5xl text-green text-center mt-5 sm:text-6xl md:text-7xl">
                Preferences
            </h2>
        </Fragment>
    );
};

export default Preferences;
