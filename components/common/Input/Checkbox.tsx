import React from "react";
import classnames from "classnames";

const checkboxClasses = {
    default:
        "w-7 h-7 mr-2 text-dijon cursor-pointer focus:ring-0 focus:ring-offset-0",
} as const;

interface CheckboxProps {
    isChecked: boolean;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    label?: string;
    style?: keyof typeof checkboxClasses;
    className?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
    isChecked,
    onChange,
    label,
    style = "default",
    className,
    ...props
}) => {
    const stylesCheckbox = checkboxClasses[style];

    return (
        <div className="flex flex-row-reverse items-center mt-5">
            <label htmlFor={label} className="text-white">
                {label}
            </label>
            <input
                type="checkbox"
                id={label}
                checked={isChecked}
                onChange={onChange}
                className={classnames(stylesCheckbox, className)}
                {...props}
            />
        </div>
    );
};
