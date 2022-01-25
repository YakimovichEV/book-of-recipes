import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import Link from "next/link";

import { RegistrationFormSchema } from "../../helpers/registrationFormValidation";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";

interface IRegistrationForm {
    email: string;
    name: string;
    password: string;
}

export const RegistrationForm: React.FC = () => {
    const methods = useForm<IRegistrationForm>({
        resolver: yupResolver(RegistrationFormSchema),
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: IRegistrationForm) => {
        console.log("data: ", data);
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-4/5 bg-green py-10 rounded-xl border-4 flex flex-col items-center justify-center border-dark shadow-2xl second-font sm:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-1/3"
            >
                <h1 className="text-2xl text-white uppercase">Sign up</h1>

                <Input<IRegistrationForm>
                    name="email"
                    label="Email"
                    type="text"
                />
                <Input<IRegistrationForm>
                    name="name"
                    label="Name"
                    type="text"
                />
                <Input<IRegistrationForm>
                    name="password"
                    label="Password"
                    type="password"
                />

                <div className="flex w-4/5">
                    <Button style="formButton" className="w-1/2">
                        Create Account
                    </Button>

                    <Link href="/testPage" passHref>
                        <a className="w-1/2 ml-2">
                            <Button style="formButton">Back</Button>
                        </a>
                    </Link>
                </div>
                <Link href="/auth/login" passHref>
                    <a>
                        <Button
                            className="mt-2 lg:mt-7"
                            style="toggleModeFormButton"
                        >
                            Login with existing account
                        </Button>
                    </a>
                </Link>
            </form>
        </FormProvider>
    );
};
