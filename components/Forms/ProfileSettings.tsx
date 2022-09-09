import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import {
    Button,
    Input,
    PhoneNumber,
    ShowHidePassword,
} from "components/common";
import {
    GetUserListDocument,
    useMeQuery,
    useUpdateUserDataMutation,
} from "client/generated/graphql";

import { User } from "components/Admin/Users/types";

interface InputProps {
    user: User;
}

type UpdateUser = InputProps["user"];

// добавить смену пароля

export const ProfileSettings: React.FC = () => {
    const { data } = useMeQuery();
    const [updateUser] = useUpdateUserDataMutation();

    const methods = useForm<UpdateUser>();

    const { handleSubmit, reset } = methods;

    const onSubmit = ({ id, name, email, phoneNumber }: UpdateUser) => {
        updateUser({
            variables: {
                user: {
                    userId: id,
                    email,
                    name,
                    phoneNumber,
                },
            },
            onCompleted: () => reset(),
            refetchQueries: [GetUserListDocument],
        });
    };

    return (
        <FormProvider {...methods}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white w-3/5 rounded-md drop-shadow-md dark:bg-eerieBlack dark:border dark:border-darkCharcoal"
            >
                <div className="w-full p-5 flex justify-between border-b border-gray-300 dark:border-b-2 dark:border-darkCharcoal">
                    <span className="text-lg text-black dark:text-white">
                        Username
                    </span>
                    <div className="w-4/5">
                        <Input
                            name="username"
                            style="adminInput"
                            type="text"
                            placeholder={data?.me?.name}
                            className="mb-3"
                        />
                        <label className="text-gray-400">
                            You may update your username
                        </label>
                    </div>
                </div>
                <div className="w-full p-5 flex justify-between">
                    <span className="text-lg text-black dark:text-white">
                        Old Password
                    </span>
                    <div className="w-4/5 relative">
                        <ShowHidePassword
                            name="oldPassword"
                            placeholder="Enter your old password..."
                        />
                        <label className="text-gray-400">
                            You may update your password
                        </label>
                    </div>
                </div>
                <div className="w-full px-5 pt-0 pb-5 flex justify-between border-b border-gray-300 dark:border-b-2 dark:border-darkCharcoal">
                    <span className="text-lg text-black dark:text-white">
                        New Password
                    </span>
                    <div className="w-4/5 relative">
                        <ShowHidePassword
                            name="newPassword"
                            placeholder="Enter your new password..."
                        />
                    </div>
                </div>
                <div className="w-full p-5 flex justify-between border-b border-gray-300 dark:border-b-2 dark:border-darkCharcoal">
                    <span className="text-lg text-black dark:text-white">
                        Email
                    </span>
                    <div className="w-4/5 ">
                        <Input
                            name="email"
                            style="adminInput"
                            type="email"
                            placeholder={data?.me?.email}
                            required
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            className="mb-3"
                        />
                        <label className="text-gray-400">
                            You may update your email
                        </label>
                    </div>
                </div>
                <div className="w-full p-5 flex justify-between border-b border-gray-300 dark:border-b-2 dark:border-darkCharcoal">
                    <span className="text-lg text-black dark:text-white">
                        Phone Number
                    </span>
                    <div className="w-4/5 flex flex-col">
                        <PhoneNumber
                            name="phoneNumber"
                            placeholder={data?.me?.phoneNumber as string}
                        />
                        <label className="text-gray-400 mt-3">
                            You may update your phone number
                        </label>
                    </div>
                </div>
                <div className="bg-gray-100 flex justify-end p-5 rounded-b-md dark:bg-charlestonGreen">
                    <Button type="submit" style="adminButton">
                        Save Changes
                    </Button>
                </div>
            </form>
        </FormProvider>
    );
};
