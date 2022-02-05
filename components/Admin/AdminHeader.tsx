import React from "react";
import Link from "next/link";

import { Logo } from "../Logo/Logo";
import { Button } from "../Button/Button";

export const AdminHeader: React.FC = () => {
    return (
        <section className="flex">
            <div className="flex items-center w-1/4 pl-4">
                <Link href="/home" passHref>
                    <a>
                        <Logo />
                    </a>
                </Link>
            </div>
            <div className="p-3 flex items-center w-1/2">
                <div className="flex w-full h-full">
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full px-3 mr-[0.6px] shadow-inner rounded-bl-sm rounded-tl-sm border border-gray300 focus:border-blue700 focus:outline-none"
                    />
                    <Button style="searchButton">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-end w-1/4 space-x-5 py-2 px-4">
                <Button style="adminButton">
                    <svg
                        className="mr-2 w-7 h-7"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    Toshka Jekie
                </Button>
            </div>
        </section>
    );
};
