import React, { Fragment } from "react";
import classNames from "classnames";
import { Path, useFormContext } from "react-hook-form";

const inputClasses = {
    formInput:
        "block w-4/5 h-12 bg-gray rounded-md p-3 mt-2 text-sm font-light border-none outline-none focus:ring-2 focus:ring-dijon",
    formSubmitInput:
        "w-1/2 bg-dijon text-white text-center rounded-xl h-12 mt-5 text-base cursor-pointer border-none outline-none duration-300 hover:bg-dark",
    label: "block mt-5 text-base font-medium text-white",
} as const;

interface IInputProps<T extends { [key: string]: any }> {
    style?: keyof typeof inputClasses;
    className?: string;
    label?: string;
    type?: "text" | "password" | "tel" | "number";
    name: Path<T>;
}

export const Input = <
    T extends { [key: string]: any } = { [key: string]: any },
>({
    label,
    name,
    style = "formInput",
    type = "text",
    className,
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
            />
            {errors[name] && errors[name].message && (
                <div className="mt-2 text-red-500">{errors[name].message}</div>
            )}
        </Fragment>
    );
};
