import React, { useEffect, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

import { appConfig } from "shared/config";
import { LoginFormSchema } from "./validation";
import { useMeQuery } from "client/generated/graphql";
import { Button, Checkbox, Input, Spinner } from "components/common";

import styles from "./LoginForm.module.css";

interface SignInError {
    error: string | undefined;
    ok?: boolean;
    status?: number;
    url?: string | null;
}

interface ILoginForm {
    email: string;
    password: string;
}

export const LoginForm: React.FC = () => {
    const router = useRouter();

    const { data, loading } = useMeQuery();

    const [showPassword, setShowPassword] = useState<boolean>(false);

    const methods = useForm<ILoginForm>({
        resolver: yupResolver(LoginFormSchema),
    });

    const { handleSubmit } = methods;

    const onChange = () => setShowPassword((prevState) => !prevState);

    // вывести signIn в кук(хук), сделать тост и вывести ошибку в тост

    const onSubmit = async (data: ILoginForm) => {
        const result: SignInError | undefined = await signIn("credentials", {
            callbackUrl: `${appConfig.CLIENT_URL}/profile`,
            ...data,
            redirect: false,
        });

        if (result?.error) {
            return toast("Incorrect login or password", {
                type: "error",
                position: "bottom-left",
                theme: "colored",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    useEffect(() => {
        if (data?.me) {
            router.replace("/profile");
        }
    }, [data?.me, router]);

    if (loading || data?.me) {
        return <Spinner />;
    }

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className={styles.login}>
                <h1 className={styles.title}>Login</h1>

                <Input<ILoginForm> name="email" label="Email" type="text" />
                <Input<ILoginForm>
                    name="password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                />

                <Checkbox
                    isChecked={showPassword}
                    onChange={onChange}
                    label="Show password"
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
