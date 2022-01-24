import React from "react";
import classNames from "classnames";

const btnClasses = {
    roundedButton:
        "bg-[#013328] transition ease-in-out delay-100 w-32 h-16 text-2xl text-white font-bold rounded-xl hover:bg-[#151f1e] duration-200 sm:w-40 md:w-52 lg:w-72",
    outlineButton:
        "bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded",
    formButton:
        "w-full bg-dijon text-white rounded-xl h-12 mt-5 text-base cursor-pointer duration-300 hover:bg-dark",
    disabledButton:
        "bg-blue-500 text-white font-bold py-2 px-4 rounded opacity-50 cursor-not-allowed",
} as const;

export interface MyButtonProps {
    style?: keyof typeof btnClasses;
    className?: string;
}

export const Button: React.FC<MyButtonProps> = ({
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
