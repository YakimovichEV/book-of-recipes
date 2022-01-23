import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import { Button } from "components/Button/Button";

const NotFoundPage = () => {
    return (
        <Fragment>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Find a lot of great dishes that allow you enjoy..."
                />
                <title>Page not found</title>
            </Head>
            <div className="text-center mt-16">
                <span className=" text-9xl font-bold text-green lg:extra-font-size">
                    404
                </span>
                <h1 className=" my-5 text-xl font-bold text-green lg:text-4xl lg:my-10">
                    Oops, We can seem to find <br />
                    the page what you are looking for.
                </h1>
                <p className="mb-10 font-normal text-green w-72 mx-auto sm:w-96 lg:text-xl lg:w-2/3">
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                </p>
                <Link href="/home" passHref>
                    <a className="flex justify-center">
                        <Button
                            style="roundedButton"
                            className="flex items-center justify-center w-56 sm:w-72 md:w-72"
                        >
                            <span className="ml-2 text-dijon">
                                To home page
                            </span>
                        </Button>
                    </a>
                </Link>
            </div>
        </Fragment>
    );
};

export default NotFoundPage;
