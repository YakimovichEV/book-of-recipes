import React from "react";
import Select from "react-select";
import { Controller, useFormContext } from "react-hook-form";

interface SelectInputProps extends React.ComponentProps<typeof Select> {
    name: string;
}

export const SelectInput: React.FC<SelectInputProps> = ({ name, ...props }) => {
    const { control } = useFormContext();

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => <Select {...field} {...props} />}
        />
    );
};
