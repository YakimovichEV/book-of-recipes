import React, { Fragment } from "react";
import useTranslation from "next-translate/useTranslation";

import { Recipe } from "./types";
import {
    GetRecipeListDocument,
    useDeleteRecipeMutation,
} from "client/generated/graphql";
import { Modal } from "components/Modal/Modal";
import { useModal } from "client/hooks/useModal";
import { ConfirmationModal } from "components/Modal/ConfirmationModal";

interface InputProps {
    recipe: Recipe;
    handleEditClick: () => void;
}

export const ReadOnlyRow: React.FC<InputProps> = ({
    recipe,
    handleEditClick,
}) => {
    const { isShown, toggle } = useModal();
    const onConfirm = () => toggle();
    const onCancel = () => toggle();

    const { t } = useTranslation("confirmation-modal");

    const [deleteRecipe] = useDeleteRecipeMutation();

    const handleDeleteClick = () => {
        deleteRecipe({
            variables: {
                recipeId: recipe.id,
            },
            refetchQueries: [GetRecipeListDocument],
        });
    };

    const content = (
        <ConfirmationModal message={t("confirmation-modal:content")} />
    );

    const headerText = <Fragment>{t("confirmation-modal:header")}</Fragment>;

    return (
        <Fragment>
            <Modal
                isShown={isShown}
                hide={toggle}
                headerText={headerText}
                modalContent={content}
                onConfirm={() => handleDeleteClick()}
                onCancel={onCancel}
            />
            <div className="table-row w-full">
                <div className="w-56 table__cell--admin">{recipe.name}</div>
                <div className="table__cell--admin">{recipe.description}</div>
                <div className="table__cell--admin">{recipe.description}</div>
                <div className="table__cell--admin">{recipe.ingredients}</div>
                <div className="table__cell--admin">
                    {recipe.cookingTime} min.
                </div>
                <div className="table__cell--admin">{recipe.instructions}</div>
                <div className="table__cell--admin">{recipe.prepTime} min.</div>
                <div className="table__cell--admin">{recipe.serves} person</div>
                <div className="table__cell--admin">{recipe.tips}</div>
                <div className="table__cell--admin">
                    <svg
                        onClick={() => handleEditClick()}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-blue500 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                        />
                    </svg>
                </div>

                <div className="table__cell--admin">
                    <svg
                        onClick={onConfirm}
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-red-400 cursor-pointer"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                    </svg>
                </div>
            </div>
        </Fragment>
    );
};
