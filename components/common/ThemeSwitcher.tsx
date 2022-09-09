import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

export const ThemeSwitcher: React.FC = () => {
    const [mounted, setMounted] = useState<boolean>(false);

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
                <div className="p-2 dark:bg-gray-600 rounded-full cursor-pointer">
                    <BsFillSunFill
                        onClick={() => setTheme("light")}
                        size={25}
                        color="#fee45a"
                    />
                </div>
            );
        } else {
            return (
                <div className="p-2 bg-black rounded-full cursor-pointer">
                    <BsFillMoonStarsFill
                        onClick={() => setTheme("dark")}
                        size={25}
                        color="#fff"
                    />
                </div>
            );
        }
    };

    return <> {renderThemeChanger()}</>;
};
