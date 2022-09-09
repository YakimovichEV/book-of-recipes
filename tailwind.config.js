module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    important: true,
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                primaryFont: ["Rochester", "sans-serif"],
                secondFont: ["Salsa", "sans-serif"],
                logoFont: ["Sancreek", "sans-serif"],
            },
            colors: {
                transparent: "transparent",
                eerieBlack: "#18181b",
                smokyBlack: "#0e0e10",
                raisinBlack: "#1F1F23",
                darkCharcoal: "#303032",
                charlestonGreen: "#26262c",
                sacramento: "#013328",
                menthol: "#cbeaa6",
                cetacean: "#0e103d",
                darkJungle: "#151f1e",
                khaki11: "#ede599",
                dijon: "#c7a003",
                congo: "#f4897d",
                outerSpace: "#494946",
            },
            backgroundImage: {
                "home-bg": "url('/images/home-bg.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
