import React from "react";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

import { data } from "./data";

export const Footer: React.FC = () => {
    const { t } = useTranslation();

    const year = new Date().getFullYear();

    const icons = data.map((item) => {
        const { id, href, Icon } = item;

        return (
            <a
                key={id}
                href={href}
                target="_blank"
                className="mx-2 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white first-of-type:ml-0 sm:first-of-type:ml-4"
                rel="noreferrer"
            >
                <Icon size={18} />
            </a>
        );
    });

    return (
        <footer className="px-4 py-2 w-full bg-white shadow lg:flex lg:items-center lg:justify-between lg:p-6 lg:h-20 dark:bg-eerieBlack">
            <span className="text-sm text-gray-500 sm:text-center sm:text-base dark:text-gray-300">
                © {year} Dishidinio™. {t("footer:reservedRights")}.
            </span>
            <ul className="flex flex-wrap flex-col mt-3 text-sm text-gray-500 dark:text-gray-300 sm:mt-0 sm:text-base sm:flex-row sm:items-center">
                <li>
                    <Link href="/privacy-policy" passHref>
                        <a className="mr-4 hover:underline">
                            {t("footer:privacyPolicy")}
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/terms-conditions" passHref>
                        <a className="mr-4 hover:underline">
                            {t("footer:termsConditions")}
                        </a>
                    </Link>
                </li>
                <span className="hidden sm:block">|</span>
                <li className="mt-2 sm:mt-0">{icons}</li>
            </ul>
        </footer>
    );
};
