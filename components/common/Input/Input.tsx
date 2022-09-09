import React from "react";
import classNames from "classnames";
import { Path, useFormContext } from "react-hook-form";

const inputClasses = {
    formInput:
        "block w-4/5 h-12 bg-gray-300 rounded-md p-3 mt-2 text-sm font-light border-none outline-none focus:ring-2 focus:ring-dijon",
    formSubmitInput:
        "w-1/2 bg-dijon text-white text-center rounded-xl h-12 mt-5 text-base cursor-pointer border-none outline-none duration-300 hover:bg-dark",
    adminInput:
        "w-full px-3 shadow-inner border border-gray-300 bg-white bg-clip-padding border border-solid border-gray-300 m-0 focus:text-gray-600 focus:border-blue-600 focus:outline-none focus:text-black dark:bg-outerSpace dark:border-gray-900 dark:placeholder-gray-300 dark:focus:text-gray-300",
    adminInputSecond:
        "block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer",
    label: "block text-base font-medium text-white",
} as const;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type IInputProps<T extends { [key: string]: any }> = Omit<
    React.HTMLProps<HTMLInputElement>,
    "style"
> & {
    style?: keyof typeof inputClasses;
    className?: string;
    label?: string;
    type?: "text" | "password" | "tel" | "number" | "email" | "file";
    name: Path<T>;
    options?: Parameters<ReturnType<typeof useFormContext>["register"]>[1];
};

export const Input = <
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    T extends { [key: string]: any } = { [key: string]: any },
>({
    label,
    name,
    style = "formInput",
    type = "text",
    className,
    options,
    ...props
}: IInputProps<T>) => {
    const {
        register,
        formState: { errors },
    } = useFormContext<T>();

    const stylesInput = inputClasses[style];

    return (
        <>
            <label htmlFor={name} className={inputClasses.label}>
                {label}
            </label>
            <input
                {...register(name, options)}
                type={type}
                className={classNames(stylesInput, className)}
                {...props}
            />
            {errors[name] && errors[name].message && (
                <div className="mt-2 text-red-500">{errors[name].message}</div>
            )}
        </>
    );
};
