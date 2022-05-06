/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import setLanguage from "next-translate/setLanguage";

import { Logo } from "../Logo/Logo";
import { useDarkMode } from "client/hooks/useDarkMode";
import { SunIcon } from "components/Icons/SunIcon/SunIcon";
import { MoonIcon } from "components/Icons/MoonIcon/MoonIcon";
import useTranslation from "next-translate/useTranslation";

enum localToLanguageName {
    de = "German",
    ua = "Ukrainian",
    "en-US" = "English",
}

export const Header: React.FC = () => {
    const router = useRouter();
    const { lang } = useTranslation();

    const [colorTheme, setTheme] = useDarkMode();

    return (
        <div className="header--admin">
            <Link href="/home" passHref>
                <a>
                    <Logo />
                </a>
            </Link>

            <div className="flex items-center">
                <select
                    className="mr-5"
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
                <span onClick={() => setTheme()}>
                    {colorTheme === "light" ? (
                        <div className="header__icon--admin">
                            <MoonIcon />
                        </div>
                    ) : (
                        <div className="header__icon--admin">
                            <SunIcon />
                        </div>
                    )}
                </span>
            </div>
        </div>
    );
};
