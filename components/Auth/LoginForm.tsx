import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";
import Link from "next/link";

import { LoginFormSchema } from "helpers/loginFormValidation";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";

interface ILoginForm {
    email: string;
    password: string;
    submit: boolean;
}

export const LoginForm: React.FC = () => {
    const methods = useForm<ILoginForm>({
        resolver: yupResolver(LoginFormSchema),
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: ILoginForm) => {
        console.log("data: ", data);
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-4/5 bg-green py-10 rounded-xl border-4 flex flex-col items-center justify-center border-dark shadow-2xl second-font sm:w-3/5 lg:w-2/5 xl:w-2/5 2xl:w-1/3"
            >
                <h1 className="text-2xl text-white uppercase">Login</h1>

                <Input<ILoginForm> name="email" label="Email" type="text" />
                <Input<ILoginForm>
                    name="password"
                    label="Password"
                    type="password"
                />

                <div className="flex w-4/5">
                    <Button style="formButton" type="submit" className="w-1/2">
                        Login
                    </Button>

                    <Link href="/testPage" passHref>
                        <a className="w-1/2 ml-2">
                            <Button style="formButton">Back</Button>
                        </a>
                    </Link>
                </div>
                <Link href="/auth/registration" passHref>
                    <a>
                        <Button
                            className="mt-2 lg:mt-7"
                            style="toggleModeFormButton"
                        >
                            Create new account
                        </Button>
                    </a>
                </Link>
            </form>
        </FormProvider>
    );
};
