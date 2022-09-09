import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import Creatable from "react-select/creatable";
import Select, { GroupBase, OptionsOrGroups } from "react-select";

interface SelectInputProps {
    name: string;
    options: OptionsOrGroups<unknown, GroupBase<unknown>> | undefined;
    creatable: boolean;
}

export const SelectInput: React.FC<SelectInputProps> = ({
    name,
    options,
    creatable,
    ...props
}) => {
    const { control } = useFormContext();

    const Component = creatable ? Creatable : Select;

    return (
        <Controller
            name={name}
            control={control}
            render={({ field: { value, ...field } }) => {
                let formattedValue;

                if (Array.isArray(value)) {
                    formattedValue = options?.filter((opt) =>
                        value.includes(opt.value),
                    );
                } else {
                    formattedValue = options?.find(
                        (opt) => opt.value === value,
                    );
                }

                return (
                    <Component
                        {...field}
                        className="form-select"
                        onChange={(value) => {
                            if (Array.isArray(value)) {
                                return field.onChange(
                                    value.map((item) => item.value),
                                );
                            }

                            field.onChange(value.value);
                        }}
                        value={formattedValue}
                        options={options}
                        {...props}
                    />
                );
            }}
        />
    );
};
