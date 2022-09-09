import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, FormProvider } from "react-hook-form";

import {
    namedOperations,
    useCreateUserMutation,
    UserInput,
} from "client/generated/graphql";
import { Button, Input } from "components/common";
import { providers } from "./registration.provider";
import { RegistrationFormSchema } from "./validation";

import styles from "./RegistrationForm.module.css";

interface IRegistrationForm {
    email: string;
    name: string;
    phoneNumber: string;
    password: string;
}

// Обновить валидацию
export const RegistrationForm: React.FC = () => {
    const router = useRouter();
    const { data: session, status } = useSession();
    const [createUser] = useCreateUserMutation();

    const methods = useForm<IRegistrationForm>({
        resolver: yupResolver(RegistrationFormSchema),
    });

    const { handleSubmit } = methods;

    const onSubmit = (data: UserInput) => {
        createUser({
            variables: {
                user: data,
            },
            onCompleted: () => {
                router.push("/profile");
            },

            refetchQueries: [namedOperations.Query.Me],
        });

        router;
    };

    const handleAuthSignIn = (provider: any) => () => signIn(provider);

    if (status === "loading") {
        return <h1>Checking authentication...</h1>;
    }

    if (session) {
        setTimeout(() => {
            router.push("/profile");
        }, 5000);

        return <h1>You are already signed in</h1>;
    }

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={styles.registration}
            >
                <h1 className={styles.title}>Sign up</h1>

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
                {/* Dobavit validation */}
                <Input<IRegistrationForm>
                    name="phoneNumber"
                    label="Phone Number"
                    type="tel"
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
                {providers.map((provider) => (
                    <Button key={provider.id} onClick={handleAuthSignIn(name)}>
                        {/*<span>{provider.icon}</span>*/} {provider.name}
                    </Button>
                ))}
            </form>
        </FormProvider>
    );
};
