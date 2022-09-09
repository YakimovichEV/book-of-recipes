import React from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

import {
    useDeleteUserMutation,
    useMeQuery,
} from "../../client/generated/graphql";
import { useModal } from "client/hooks/useModal";
import { ConfirmationModal, Modal } from "components/common";

export const DeleteAccount: React.FC = () => {
    const router = useRouter();

    const { data } = useMeQuery();
    const [deleteUser] = useDeleteUserMutation();

    const { isShown, toggle } = useModal();

    const onConfirm = () => toggle();
    const onCancel = () => toggle();

    const userId = data?.me?.id as string;

    const deleteUserHandler = () => {
        // deleteUser({
        //     variables: {
        //         userId: userId,
        //     },
        //     onCompleted: () => router.push("/recipes"),
        // });

        console.log("deleted");
        router.push("/recipes");

        toast("You successfully deleted your account", {
            type: "success",
            position: "bottom-left",
            theme: "colored",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const content = (
        <ConfirmationModal message="Once you delete an account, there is no going back. Please be certain." />
    );

    const headerText = "Are you sure you want to delete your account?";

    return (
        <>
            <Modal
                isShown={isShown}
                hide={toggle}
                headerText={headerText}
                modalContent={content}
                onConfirm={() => deleteUserHandler()}
                onCancel={onCancel}
            />
            <h2 className="text-2xl mt-8 mb-1 text-black dark:text-white">
                Deleting Your Personal Account
            </h2>
            <h3 className="text-lg text-gray-400 mb-5">
                Compeletely delete your account
            </h3>
            <div className="flex items-center justify-between p-5 w-3/5 h-36 bg-white rounded-md drop-shadow-md dark:bg-eerieBlack dark:border dark:border-darkCharcoal">
                <div className="w-1/4 mr-20 text-black dark:text-gray-200">
                    Delete Your Personal
                    <br />
                    Account
                </div>
                <div className="w-3/4 text-black dark:text-gray-200">
                    If you want to delete your personal account, you can do so
                    by clicking on{" "}
                    <span
                        onClick={onConfirm}
                        className="text-blue-500 underline cursor-pointer"
                    >
                        this link
                    </span>
                    .
                </div>
            </div>
        </>
    );
};
