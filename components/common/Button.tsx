import React, { ComponentPropsWithoutRef } from "react";
import classNames from "classnames";

const btnClasses = {
    roundedButton:
        "bg-[#013328] transition ease-in-out delay-100 w-32 h-16 text-2xl text-white font-bold rounded-xl hover:bg-[#151f1e] duration-200 sm:w-40 md:w-52 lg:w-72",
    outlineButton:
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
    formButton:
        "w-full bg-dijon text-white rounded-xl h-12 mt-5 text-base cursor-pointer duration-300 hover:bg-darkJungle",
    toggleModeFormButton: "text-white underline text-base",
    disabledButton:
        "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed",
    adminButton:
        "inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1",
    adminCancelButton:
        "inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out",
    searchButton:
        "flex items-center px-6 py-1 text-gray-600 bg-gray-100 border border-gray-300 rounded-tr-sm rounded-br-sm hover:bg-gray-200",
    userTableButton: "bg-transparent w-0 h-0",
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
