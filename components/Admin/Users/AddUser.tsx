import React from "react";
import { useForm, FormProvider } from "react-hook-form";

import {
    GetUserListDocument,
    useCreateUserMutation,
    UserInput,
} from "client/generated/graphql";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";

const labelStyle =
    "absolute text-sm text-gray500 dark:text-gray400 -translate-y-[30.9px] duration-300 mt-0 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue600 peer-focus:dark:text-blue500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[30.9px]";

export const AddUser: React.FC = () => {
    const [addUser] = useCreateUserMutation();

    const methods = useForm<UserInput>();

    const { handleSubmit, reset } = methods;

    const onSubmit = (data: UserInput) => {
        addUser({
            variables: {
                user: data,
            },
            onCompleted: () => reset(),
            refetchQueries: [GetUserListDocument],
        });
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="m-10 w-4/5">
                <div className="relative z-0 mb-6 w-full">
                    <Input<UserInput>
                        type="email"
                        name="email"
                        style="adminInputSecond"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="email" className={labelStyle}>
                        Email address
                    </label>
                </div>
                <div className="relative z-0 mb-6 w-full">
                    <Input<UserInput>
                        type="password"
                        name="password"
                        style="adminInputSecond"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="password" className={labelStyle}>
                        Password
                    </label>
                </div>
                <div className="flex items-center">
                    <div className="relative z-0 mb-6 w-1/2">
                        <Input<UserInput>
                            type="text"
                            name="name"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="name" className={labelStyle}>
                            Fullname
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-1/2 ml-10">
                        <Input<UserInput>
                            type="tel"
                            name="phoneNumber"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="phoneNumber" className={labelStyle}>
                            Phone number
                        </label>
                    </div>
                </div>
                <Button type="submit" style="addUserButton">
                    Submit
                </Button>
            </form>
        </FormProvider>
    );
};
