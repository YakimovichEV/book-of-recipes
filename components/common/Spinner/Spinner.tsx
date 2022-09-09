import React from "react";
import classNames from "classnames";

import { SpinnerIcon } from "./SpinnerIcon";

interface InputProps {
    absolute?: boolean;
    className?: string;
}

export const Spinner: React.FC<InputProps> = ({ absolute, className }) => {
    if (absolute) {
        return (
            <div
                className={classNames(
                    "absolute w-full h-full flex justify-center items-center bg-gray-100 bg-opacity-50",
                    className,
                )}
            >
                <SpinnerIcon />
            </div>
        );
    }

    return <SpinnerIcon />;
};
