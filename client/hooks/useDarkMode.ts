import { useEffect, useState } from "react";

export const useDarkMode = () => {
    const [theme, setTheme] = useState("dark");

    const colorTheme = theme === "light" ? "dark" : "light";

    useEffect(() => {
        // const root = window.document.body;

        // console.log(theme, colorTheme);

        // root.classList.remove(colorTheme);
        // root.classList.add(theme);

        // localStorage.setItem("theme", theme);

        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) &&
                window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        // Whenever the user explicitly chooses light mode
        localStorage.theme = theme;
        // Whenever the user explicitly chooses dark mode
        // localStorage.theme = "dark";
    }, [theme, colorTheme]);

    return [
        colorTheme,
        () => setTheme((theme) => (theme === "light" ? "dark" : "light")),
    ] as const;
};
