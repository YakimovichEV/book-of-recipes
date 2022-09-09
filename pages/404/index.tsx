import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

import { Button } from "components/common";

const NotFoundPage: NextPage = () => {
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
                <span className=" text-9xl font-bold text-sacramento dark:text-white">
                    404
                </span>
                <h1 className=" my-5 text-xl font-bold text-sacramento lg:text-4xl lg:my-10 dark:text-white">
                    Oops, We can seem to find <br />
                    the page what you are looking for.
                </h1>
                <p className="mb-10 font-normal text-sacramento w-72 mx-auto sm:w-96 lg:text-xl lg:w-2/3 dark:text-gray-300">
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
