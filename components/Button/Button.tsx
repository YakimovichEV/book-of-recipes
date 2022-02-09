import React, { ComponentPropsWithoutRef } from "react";
import classNames from "classnames";

const btnClasses = {
    roundedButton:
        "bg-[#013328] transition ease-in-out delay-100 w-32 h-16 text-2xl text-white font-bold rounded-xl hover:bg-[#151f1e] duration-200 sm:w-40 md:w-52 lg:w-72",
    outlineButton:
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
    formButton:
        "w-full bg-dijon text-white rounded-xl h-12 mt-5 text-base cursor-pointer duration-300 hover:bg-dark",
    toggleModeFormButton: "text-white underline text-base",
    disabledButton:
        "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed",
    adminButton:
        "flex items-center px-2 py-1 text-sm text-blue700 uppercase border border-blue-700 rounded-sm hover:bg-gray100",
    searchButton:
        "flex items-center px-6 py-1 text-gray600 bg-gray100 border border-gray300 rounded-tr-sm rounded-br-sm hover:bg-gray200",
    adminButton:
        "text-white bg-blue700 hover:bg-blue800 focus:ring-4 focus:ring-blue300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue600 dark:hover:bg-blue700 dark:focus:ring-blue800",
} as const;

interface IButtonProps
    extends Omit<ComponentPropsWithoutRef<"button">, "style"> {
    style?: keyof typeof btnClasses;
}

export const Button: React.FC<IButtonProps> = ({
    children,
    style = "roundedButton",
    className,
    ...props
}) => {
    const stylesBtn = btnClasses[style];

    return (
        <button {...props} className={classNames(stylesBtn, className)}>
            {children}
        </button>
    );
};
