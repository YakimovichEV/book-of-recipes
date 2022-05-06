import React from "react";

interface MoonIconProps {
    onClick?: () => void;
    className?: string;
}

export const MoonIcon: React.FC<MoonIconProps> = ({ onClick, className }) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            className={className}
            width="28"
            height="28"
            viewBox="0 0 20 20"
            fill="#e7e7e7"
        >
            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
    );
};
