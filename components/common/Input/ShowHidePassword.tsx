import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";

import { Input } from "../Input/Input";

interface ShowHidePasswordProps {
    name: string;
    placeholder?: string;
}

export const ShowHidePassword: React.FC<ShowHidePasswordProps> = ({
    name,
    placeholder,
}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const methods = useForm();

    const { control } = methods;

    const toggle = () => {
        setIsVisible((prevState) => !prevState);
    };

    const iconToggle = isVisible ? (
        <FaEyeSlash size={20} fill="#bcbcbc" className="cursor-pointer" />
    ) : (
        <FaEye size={20} fill="#bcbcbc" className="cursor-pointer" />
    );

    return (
        <Controller
            name="showPassword"
            control={control}
            defaultValue=""
            rules={{
                required: true,
            }}
            render={() => (
                <>
                    <Input
                        name={name}
                        style="adminInput"
                        type={isVisible ? "text" : "password"}
                        className="mb-3"
                        placeholder={placeholder}
                    />
                    <span onClick={toggle} className="absolute top-1 right-5">
                        {iconToggle}
                    </span>
                </>
            )}
        />
    );
};
