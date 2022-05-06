import React from "react";
import Link from "next/link";
import ReactSelect from "react-select";
import { useRouter } from "next/router";
import { useForm, FormProvider, Controller } from "react-hook-form";

import {
    GetUserListDocument,
    useCreateUserMutation,
    UserInput,
    Role,
} from "client/generated/graphql";
import { Input } from "components/Input/Input";
import { Button } from "components/Button/Button";

interface OptionType {
    value: string;
    label: string;
}

export const AddUser: React.FC = () => {
    const [addUser] = useCreateUserMutation();

    const router = useRouter();

    const methods = useForm<UserInput>();

    const { handleSubmit, reset, setValue, control } = methods;

    const onSubmit = (data: UserInput) => {
        addUser({
            variables: {
                user: data,
            },
            onCompleted: () => reset(),
            refetchQueries: [GetUserListDocument],
        });
    };

    const categoryOptions = Object.values(Role).map((role) => ({
        value: role,
        label: role,
    }));

    const getValue = (value: string) =>
        value ? categoryOptions.find((option) => option.value === value) : "";

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
                    <label htmlFor="email" className="table__label--admin">
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
                    <label htmlFor="password" className="table__label--admin">
                        Password
                    </label>
                </div>
                <div className="relative z-0 mb-6 w-full">
                    <Input<UserInput>
                        type="text"
                        name="name"
                        style="adminInputSecond"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="name" className="table__label--admin">
                        Fullname
                    </label>
                </div>
                <div className="flex items-center">
                    <div className="relative z-0 mb-6 w-1/2">
                        <Input<UserInput>
                            type="tel"
                            name="phoneNumber"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label
                            htmlFor="phoneNumber"
                            className="table__label--admin"
                        >
                            Phone number
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-1/2 ml-10">
                        <Controller
                            control={control}
                            rules={{
                                required: "Role is required!",
                            }}
                            render={({ field: { value } }) => (
                                <ReactSelect<OptionType>
                                    instanceId="roleSelector"
                                    options={categoryOptions}
                                    value={getValue(value)}
                                    onChange={(value) => {
                                        setValue("role", value?.value as Role);
                                    }}
                                    placeholder="Select role:"
                                />
                            )}
                        ></Controller>
                    </div>
                </div>
                <Button type="submit" style="adminButton" className="mr-2">
                    <span onClick={() => router.push("/admin/users")}>
                        Submit
                    </span>
                </Button>
                <Link href="/admin/users" passHref>
                    <a>
                        <Button type="button" style="adminCancelButton">
                            Back
                        </Button>
                    </a>
                </Link>
            </form>
        </FormProvider>
    );
};
