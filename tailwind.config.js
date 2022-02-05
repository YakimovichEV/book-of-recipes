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
                gray100: "#f3f4f6",
                gray200: "#e5e7eb",
                gray300: "#d1d5db",
                gray500: "#6b7280",
                gray600: "#4b5563",
                green: "#013328",
                green100: "#dcfce7",
                green800: "#166534",
                lightGreen: "#cbeaa6",
                blue: "#0e103d",
                blue700: "#1d4ed8",
                dark: "#151f1e",
                yellow: "#ede599",
                dijon: "#c7a003",
                lightRed: "#f4897d",
            },
            backgroundImage: {
                "home-bg": "url('/images/home-bg.jpg')",
            },
        },
    },
    plugins: [require("@tailwindcss/forms")],
};
