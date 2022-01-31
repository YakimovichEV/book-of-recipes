import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

import { PhoneSchema } from "helpers/phoneValidation";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

interface IProfileForm {
    firstName: string;
    surname: string;
    phone: number;
    country: string;
    city: string;
}

export const ProfileForm: React.FC = () => {
    const methods = useForm<IProfileForm>({
        resolver: yupResolver(PhoneSchema),
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: IProfileForm) => {
        console.log("data: ", data);
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex flex-col items-center justify-center bg-green w-72 mx-auto rounded-xl border-dark border-2 mb-10 sm:w-96 md:w-3/5 lg:w-4/5 xl:w-3/5"
            >
                <Input<IProfileForm>
                    name="firstName"
                    label="First name"
                    type="text"
                    className=""
                />
                <Input<IProfileForm>
                    name="surname"
                    label="Surname"
                    type="text"
                />
                <Input<IProfileForm>
                    name="phone"
                    label="Phone number"
                    type="tel"
                />
                <Input<IProfileForm>
                    name="country"
                    label="Country"
                    type="text"
                />
                <Input<IProfileForm>
                    name="city"
                    label="City"
                    type="text"
                    className="mb-9"
                />
                <Button
                    style="formButton"
                    type="submit"
                    className="second-font w-4/5 mt-0 mb-5"
                >
                    Save changes
                </Button>
            </form>
        </FormProvider>
    );
};
