import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "components/Button/Button";

const Home = () => {
    const { pathname, push } = useRouter();

    useEffect(() => {
        if (pathname === "/") {
            push("/home");
        }
    }, [pathname, push]);

    return (
        <div className="w-full h-screen bg-home-bg bg-cover bg-no-repeat flex flex-col items-center justify-center">
            <h1 className="primary-font text-5xl font-normal text-center text-white text-shadow sm:text-6xl md:text-7xl lg:text-8xl">
                What should I cook?
            </h1>

            <h3 className="my-16 second-font text-xl font-normal text-center text-white text-shadow sm:text-2xl sm:my-24 md:my-28 lg:text-3xl lg:my-36">
                This world is stressful enough on it’s own, so pass this burden
                to product_name.
            </h3>

            <Link href="/cuisine" passHref>
                <a className="flex justify-center second-font">
                    <Button style="roundedButton" className="text-shadow">
                        Start
                    </Button>
                </a>
            </Link>
        </div>
    );
};

export default Home;
