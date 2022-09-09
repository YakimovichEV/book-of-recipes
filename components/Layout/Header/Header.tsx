import React, { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { useSession } from "next-auth/react";
import { AiOutlineMenu } from "react-icons/ai";

import { data } from "./data";
import { useOnClickOutside } from "client/hooks/useOnClickOutside";
import { LanguageSwitcher, Logo, ThemeSwitcher, User } from "components/common";

const style =
    "p-3 relative text-center first:mt-20 text-dijon text-2xl hover:bg-gray-200 duration-300 ease-linear border-b-2 border-gray-200 cursor-pointer dark:hover:text-white dark:hover:bg-charlestonGreen";

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [subMenu, setSubMenu] = useState<boolean>(false);

    const sidebarRef = useRef<HTMLElement>(null);

    useOnClickOutside(sidebarRef, () => {
        setIsOpen(false);
        setSubMenu(false);
    });

    const { data: session, status } = useSession();

    const showSidebar = () => setIsOpen((prevState) => !prevState);

    const showSubMenu = () => setSubMenu((prevState) => !prevState);

    const profileLink = useMemo<"/profile" | "/auth/login">(() => {
        if (session && status === "authenticated") {
            return "/profile";
        }

        return "/auth/login";
    }, [session, status]);

    return (
        <header
            ref={sidebarRef}
            className="py-5 px-4 flex justify-between items-center sticky top-0 z-50 bg-white shadow-md dark:bg-eerieBlack"
        >
            <Link href="/home" passHref>
                <a className="cursor-pointer sm:block">
                    <Logo />
                </a>
            </Link>
            <div className="flex items-center">
                {session && status === "authenticated" ? (
                    <span className="absolute right-16 z-1">
                        <User />
                    </span>
                ) : (
                    <Link href={profileLink} passHref>
                        <a className="absolute right-16 z-1">
                            <FaRegUser size={30} color="#c7a003" />
                        </a>
                    </Link>
                )}
                <span
                    onClick={showSidebar}
                    className="ml-3 absolute right-4 z-10 cursor-pointer hover:rotate-180 duration-500"
                >
                    <AiOutlineMenu size={40} color="#c7a003" />
                </span>
            </div>
            <nav
                className={`bg-white w-80 h-screen flex justify-center fixed top-0 ${
                    isOpen
                        ? "right-0 duration-500"
                        : "right-[-100%] duration-1000"
                } dark:bg-raisinBlack`}
            >
                <ul className="w-full">
                    {data.map((item) => (
                        <li key={item.id} className={style}>
                            <Link href={item.path} passHref>
                                <a>{item.title}</a>
                            </Link>
                        </li>
                    ))}
                    <li className={style} onClick={showSubMenu}>
                        <BsArrowLeft /> Language
                        {subMenu && (
                            <div className="absolute z-5 left-0 sm:-left-40 sm:top-3 my-4">
                                <LanguageSwitcher />
                            </div>
                        )}
                    </li>
                </ul>
                <div className="absolute bottom-5 right-5">
                    <ThemeSwitcher />
                </div>
            </nav>
        </header>
    );
};
