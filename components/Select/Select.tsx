import React from "react";
import Select from "react-select";

interface SelectProps {
    options: unknown[];
    placeholder: string;
}

export const CustomSelect: React.FC<SelectProps> = ({ options, ...props }) => {
    return (
        <div>
            <Select {...props} options={options} placeholder />
        </div>
    );
};
