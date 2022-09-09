import React from "react";
import classNames from "classnames";
import { useFormContext } from "react-hook-form";

const variants = {
    default:
        "w-12 h-12 cursor-pointer flex items-center justify-center p-2 bg-blue-600 text-white shadow rounded-full active:translate-y-px",
} as const;

interface FileInputProps {
    style?: keyof typeof variants;
    className?: string;
    name: string;
    type: string;
    options?: Parameters<ReturnType<typeof useFormContext>["register"]>[1];
}

export const FileInput: React.FC<FileInputProps> = ({
    style = "default",
    className,
    name,
    type = "file",
    options,
    ...props
}) => {
    const { register } = useFormContext();

    const styles = variants[style];

    return (
        <>
            <label
                htmlFor="file-upload"
                className={classNames(styles, className)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                </svg>
            </label>
            <input
                type={type}
                id="file-upload"
                className="hidden"
                {...register(name, options)}
                {...props}
            />
        </>
    );
};
