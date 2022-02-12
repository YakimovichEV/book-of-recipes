import React, { useMemo, useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Spin as Hamburger } from "hamburger-react";

import { Logo } from "../Logo/Logo";
import { HeaderData } from "./HeaderData";
import { HeaderUserIcon } from "components/Icons/HeaderUserIcon/HeaderUserIcon";

const headerClasses = {
    default:
        "bg-green w-80 h-screen flex justify-center fixed top-0 right-[-100%] duration-1000",
    changed:
        "bg-green w-80 h-screen flex justify-center fixed top-0 right-0 duration-500",
} as const;

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [sidebar, setSidebar] = useState(false);
    const { data: session, status } = useSession();

    const showSidebar = () => {
        setSidebar((prevState) => !prevState);
    };

    const profileLink = useMemo<"/profile" | "/auth/login">(() => {
        if (session && status === "authenticated") {
            // is logged in
            return "/profile";
        }

        //not logged in or request is loading
        return "/auth/login";
    }, [session, status]);

    return (
        <div className="m-5 flex justify-between items-center relative z-50">
            <Link href="/home" passHref>
                <a className="hidden cursor-pointer sm:block">
                    <Logo />
                </a>
            </Link>
            <Link href={profileLink} passHref>
                <a className="absolute top-[4.8px] right-14 z-10">
                    <HeaderUserIcon />
                </a>
            </Link>
            <Link href="" passHref>
                <span
                    onClick={showSidebar}
                    className="absolute top-0 right-0 z-10 text-dijon"
                >
                    <Hamburger
                        toggled={isOpen}
                        toggle={setIsOpen}
                        rounded
                        distance="lg"
                        duration={0.6}
                    />
                </span>
            </Link>
            <nav
                className={
                    sidebar ? headerClasses.changed : headerClasses.default
                }
            >
                <ul className="w-full mt-5">
                    <li>
                        <Link href="" passHref>
                            <div onClick={showSidebar} className="m-6 pb-6" />
                        </Link>
                    </li>
                    {HeaderData.map((item) => {
                        return (
                            <li
                                key={item.id}
                                className="p-3 text-center text-dijon hover:bg-gray hover:text-black duration-300 ease-linear border-b-2 border-gray cursor-pointer"
                            >
                                <Link href={item.path} passHref>
                                    <a>
                                        <span className="text-3xl">
                                            {item.title}
                                        </span>
                                    </a>
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </div>
    );
};
