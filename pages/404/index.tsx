import React, { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import { Button } from "components/Button/Button";
import { LeftArrow } from "components/LeftArrow/LeftArrow";

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
            <div className="xl:container mx-auto">
                <span className="extra-font-size font-bold text-green">
                    404
                </span>
                <h1 className="text-4xl font-bold text-green">
                    Oops, We can seem to find <br />
                    the page what you are looking for.
                </h1>
                <p className="mt-7 mb-10 text-base font-normal text-green">
                    The page you are looking for might have been removed, had
                    its name changed, or is temporarily unavailable.
                </p>
                <Link href="/home" passHref>
                    <a>
                        <Button
                            style={"roundedButton"}
                            className="flex items-center justify-center "
                        >
                            <LeftArrow />
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
