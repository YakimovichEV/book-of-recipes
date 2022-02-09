import React, { Fragment } from "react";
import classNames from "classnames";
import { Path, useFormContext } from "react-hook-form";

const inputClasses = {
    formInput:
        "block w-4/5 h-12 bg-gray rounded-md p-3 mt-2 text-sm font-light border-none outline-none focus:ring-2 focus:ring-dijon",
    formSubmitInput:
        "w-1/2 bg-dijon text-white text-center rounded-xl h-12 mt-5 text-base cursor-pointer border-none outline-none duration-300 hover:bg-dark",
    adminInput:
        "w-full px-3 shadow-inner rounded-bl-sm rounded-tl-sm border border-gray300 focus:border-blue-700 focus:outline-none",
    adminInputSecond:
        "block py-2.5 px-0 w-full text-sm text-gray900 bg-transparent border-0 border-b-2 border-gray300 appearance-none dark:text-white dark:border-gray600 dark:focus:border-blue500 focus:outline-none focus:ring-0 focus:border-blue600 peer",
    label: "block mt-5 text-base font-medium text-white",
} as const;

type IInputProps<T extends { [key: string]: any }> = Omit<
    React.HTMLProps<HTMLInputElement>,
    "style"
> & {
    style?: keyof typeof inputClasses;
    className?: string;
    label?: string;
    type?: "text" | "password" | "tel" | "number" | "email";
    name: Path<T>;
};

export const Input = <
    T extends { [key: string]: any } = { [key: string]: any },
>({
    label,
    name,
    style = "formInput",
    type = "text",
    className,
    ...props
}: IInputProps<T>) => {
    const {
        register,
        formState: { errors },
    } = useFormContext<T>();

    const stylesInput = inputClasses[style];

    return (
        <Fragment>
            <label htmlFor={name} className={inputClasses.label}>
                {label}
            </label>
            <input
                {...register(name)}
                type={type}
                className={classNames(stylesInput, className)}
                {...props}
            />
            {errors[name] && errors[name].message && (
                <div className="mt-2 text-red-500">{errors[name].message}</div>
            )}
        </Fragment>
    );
};
