import React from "react";
import { useForm, FormProvider } from "react-hook-form";

import { Button } from "../../common";
import { ImageUpload } from "../ImageUpload";
import {
    useUpdateUserDataMutation,
    User,
    GetUserListDocument,
} from "../../../client/generated/graphql";

interface InputProps {
    user: User;
}

type UserEditableRow = InputProps["user"];

export const AddProfilePicture: React.FC = () => {
    const [updateUser] = useUpdateUserDataMutation();

    const methods = useForm<UserEditableRow>();

    const { handleSubmit, reset } = methods;

    const onSubmit = ({
        id,
        email,
        name,
        phoneNumber,
        role,
    }: UserEditableRow) => {
        updateUser({
            variables: {
                user: {
                    userId: id,
                    email,
                    name,
                    phoneNumber,
                    role,
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
                className="flex items-center"
            >
                <ImageUpload />
                <Button type="submit" style="adminButton" className="ml-5">
                    Submit
                </Button>
            </form>
        </FormProvider>
    );
};
