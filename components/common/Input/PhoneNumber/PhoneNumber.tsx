import React from "react";
import PhoneInput from "react-phone-input-2";
import { Controller, useForm } from "react-hook-form";

import "react-phone-input-2/lib/style.css";

interface PhoneNumberProps {
    name: string;
    placeholder?: string;
}

export const PhoneNumber: React.FC<PhoneNumberProps> = ({
    name,
    placeholder,
    ...props
}) => {
    const methods = useForm();

    const { control } = methods;

    return (
        <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            rules={{
                required: true,
            }}
            render={() => (
                <PhoneInput
                    country="us"
                    enableSearch
                    inputClass="phone-input second-font"
                    dropdownClass="hello"
                    buttonClass="hello"
                    inputProps={{
                        name,
                        required: true,
                    }}
                    placeholder={placeholder}
                    {...props}
                />
            )}
        />
    );
};
