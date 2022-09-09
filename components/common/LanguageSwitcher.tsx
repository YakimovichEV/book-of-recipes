/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

enum localToLanguageName {
    de = "German",
    ua = "Ukrainian",
    "en-US" = "English",
}

export const LanguageSwitcher: React.FC = () => {
    const router = useRouter();

    return (
        <div className="w-40 list-none bg-white dark:bg-eerieBlack shadow">
            <ul className="py-1">
                {router.locales?.map((locale) => (
                    <li key={locale}>
                        <Link
                            href={router.asPath}
                            as={router.asPath}
                            locale={locale}
                            passHref
                        >
                            <a className="cursor-pointer flex items-center py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-outerSpace dark:text-gray-200 dark:hover:text-white">
                                {/* @ts-ignore */}
                                {localToLanguageName[locale]}
                            </a>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
