import React, { Fragment } from "react";

import { Header } from "components/Header/Header";

const Test = () => {
    return (
        <Fragment>
            <Header />
            <br />
            <br />
            <br />
            <br />
            <h1 className="text-center text-4xl font-bold text-red-800">
                Some content here
            </h1>
        </Fragment>
    );
};

export default Test;
