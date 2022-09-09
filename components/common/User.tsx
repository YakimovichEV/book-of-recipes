import React, { useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { BiDish } from "react-icons/bi";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import useTranslation from "next-translate/useTranslation";

import { appConfig } from "shared/config";
import { useMeQuery } from "client/generated/graphql";
import { useOnClickOutside } from "client/hooks/useOnClickOutside";

import FirstPreferences from "/public/images/preferences-1.jpg";

export const User: React.FC = () => {
    const { data } = useMeQuery();

    const { t } = useTranslation();

    const userRef = useRef<HTMLDivElement>(null);

    const [isOpen, setIsOpen] = useState<boolean>(false);

    useOnClickOutside(userRef, () => setIsOpen(false));

    const isOpenHandler = () => setIsOpen((prevState) => !prevState);

    const signout = () => {
        signOut({ callbackUrl: `${appConfig.CLIENT_URL}/` });
    };

    // To do: Change useMeQuery image

    return (
        <div ref={userRef}>
            <span
                onClick={isOpenHandler}
                className="cursor-pointer w-9 h-9 flex text-sm bg-gray-600 rounded-full"
            >
                <Image
                    className="rounded-full"
                    src={FirstPreferences}
                    width={36}
                    height={36}
                    alt="user photo"
                />
            </span>
            {isOpen && (
                <div className="w-44 absolute z-5 right-0 top-5 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-eerieBlack dark:divide-gray-600">
                    <div className="py-3 px-4">
                        <span className="block text-sm truncate text-gray-600 dark:text-white">
                            {data?.me?.firstName} {data?.me?.name}
                        </span>
                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">
                            {data?.me?.email}
                        </span>
                    </div>
                    <ul className="py-1">
                        <li>
                            <Link href="/profile" passHref>
                                <a className="cursor-pointer flex items-center py-2 px-4 text-sm text-gray700 hover:bg-gray-100 dark:hover:bg-outerSpace dark:text-gray-200 dark:hover:text-white">
                                    <FaRegUser size={14} />
                                    <span className="ml-2">
                                        {t("user:profile")}
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/recipes-history" passHref>
                                <a className="cursor-pointer flex items-center py-2 px-4 text-sm text-gray700 hover:bg-gray-100 dark:hover:bg-outerSpace dark:text-gray-200 dark:hover:text-white">
                                    <BiDish size={16} />
                                    <span className="ml-2">
                                        {t("user:recipesHistory")}
                                    </span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <span
                                onClick={signout}
                                className="cursor-pointer flex items-center py-2 px-4 text-sm text-gray700 hover:bg-gray-100 dark:hover:bg-outerSpace dark:text-gray-200 dark:hover:text-white"
                            >
                                <FaSignOutAlt size={14} />
                                <span className="ml-2">
                                    {t("user:signOut")}
                                </span>
                            </span>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};
