/* eslint-disable @typescript-eslint/ban-ts-comment */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";
import { FaMoon, FaSun } from "react-icons/fa";
import setLanguage from "next-translate/setLanguage";
import useTranslation from "next-translate/useTranslation";

import { Logo } from "components/common";

enum localToLanguageName {
    de = "German",
    ua = "Ukrainian",
    "en-US" = "English",
}

export const Header: React.FC = () => {
    const [mounted, setMounted] = useState<boolean>(false);

    const router = useRouter();
    const { lang } = useTranslation();

    const { systemTheme, theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    const renderThemeChanger = () => {
        if (!mounted) {
            return null;
        }

        const currentTheme = theme === "system" ? systemTheme : theme;

        if (currentTheme === "dark") {
            return (
                <div
                    className="header__icon--admin"
                    onClick={() => setTheme("light")}
                >
                    <FaSun size={25} color="#fee45a" />
                </div>
            );
        } else {
            return (
                <div
                    className="header__icon--admin"
                    onClick={() => setTheme("dark")}
                >
                    <FaMoon size={25} color="#e7e7e7" />
                </div>
            );
        }
    };

    return (
        <div className="header--admin">
            <Link href="/home" passHref>
                <a>
                    <Logo />
                </a>
            </Link>

            <div className="flex items-center">
                <select
                    className="mr-5 text-black bg-white dark:bg-raisinBlack dark:text-white"
                    value={lang}
                    onChange={(e) => setLanguage(e.target.value)}
                >
                    {router.locales?.map((locale) => (
                        <option key={locale} value={locale}>
                            {/* @ts-ignore */}
                            {localToLanguageName[locale]}
                        </option>
                    ))}
                </select>
                {renderThemeChanger()}
            </div>
        </div>
    );
};
