module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                primaryFont: ["Rochester", "sans-serif"],
                secondFont: ["Salsa", "sans-serif"],
                logoFont: ["Sancreek", "sans-serif"],
            },
            colors: {
                transparent: "transparent",
                white: "#ffffff",
                black: "#000000",
                lightBlack: "#26262c",
                gray: "#cccccc",
                green: "#013328",
                lightGreen: "#cbeaa6",
                blue: "#0e103d",
                dark: "#151f1e",
                yellow: "#ede599",
                dijon: "#c7a003",
            },
            backgroundImage: {
                "home-bg": "url('/images/home-bg.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
