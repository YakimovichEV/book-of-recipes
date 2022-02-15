import React from "react";

import { Recipe } from "./types";
import {
    GetRecipeListDocument,
    useDeleteRecipeMutation,
} from "client/generated/graphql";

interface InputProps {
    recipe: Recipe;
    handleEditClick: () => void;
}

export const ReadOnlyRow: React.FC<InputProps> = ({
    recipe,
    handleEditClick,
}) => {
    const [deleteRecipe] = useDeleteRecipeMutation();

    const handleDeleteClick = () => {
        deleteRecipe({
            variables: {
                recipeId: recipe.id,
            },
            refetchQueries: [GetRecipeListDocument],
        });
    };

    return (
        <div className="table-row w-full">
            <div className="table-cell px-6 py-[20.64px] w-56 whitespace-no-wrap border-b border-gray200">
                <div className="text-sm font-medium leading-5 text-gray900">
                    {recipe.name}
                </div>
            </div>

            <div className="table-cell px-6 py-[20.64px] w-96 whitespace-no-wrap border-b border-gray200">
                <div className="text-sm leading-5 text-gray500">
                    {recipe.description}
                </div>
            </div>

            <div className="table-cell px-6 py-[20.64px] w-96 whitespace-no-wrap border-b border-gray200">
                <div className="text-sm leading-5 text-gray500">
                    {recipe.description}
                </div>
            </div>
            <div className="table-cell px-6 py-[20.64px] w-96 whitespace-no-wrap border-b border-gray200">
                <div className="text-sm leading-5 text-gray500">
                    {recipe.ingredients}
                </div>
            </div>
            <div className="table-cell px-6 py-[20.64px] w-96 whitespace-no-wrap border-b border-gray200">
                <div className="text-sm leading-5 text-gray500">
                    {recipe.cookingTime} min.
                </div>
            </div>
            <div className="table-cell px-6 py-[20.64px] w-96 whitespace-no-wrap border-b border-gray200">
                <div className="text-sm leading-5 text-gray500">
                    {recipe.instructions}
                </div>
            </div>
            <div className="table-cell px-6 py-[20.64px] w-96 whitespace-no-wrap border-b border-gray200">
                <div className="text-sm leading-5 text-gray500">
                    {recipe.prepTime} min.
                </div>
            </div>
            <div className="table-cell px-6 py-[20.64px] w-96 whitespace-no-wrap border-b border-gray200">
                <div className="text-sm leading-5 text-gray500">
                    {recipe.serves} person
                </div>
            </div>
            <div className="table-cell px-6 py-[20.64px] w-96 whitespace-no-wrap border-b border-gray200">
                <div className="text-sm leading-5 text-gray500">
                    {recipe.tips}
                </div>
            </div>

            <div className="table-cell px-6 py-[20.64px] text-sm leading-5 text-gray500 whitespace-no-wrap border-b border-gray200">
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
            <div className="table-cell px-6 py-[20.64px] text-sm leading-5 text-gray500 whitespace-no-wrap border-b border-gray200">
                <svg
                    onClick={() => handleDeleteClick()}
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
    );
};
