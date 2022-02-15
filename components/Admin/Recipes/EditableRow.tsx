import React from "react";
import { useForm, FormProvider } from "react-hook-form";

import { useCreateOrUpdateRecipeMutation } from "../../../client/generated/graphql";
import { Recipe } from "./types";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { Spinner } from "components/Spinner/Spinner";

interface InputProps {
    recipe: Recipe;
    setIsEditing: (state: false) => void;
}

type RecipeEditableRow = InputProps["recipe"];

export const EditableRow: React.FC<InputProps> = ({ recipe, setIsEditing }) => {
    const [updateRecipe, { loading }] = useCreateOrUpdateRecipeMutation();

    const methods = useForm<RecipeEditableRow>({ defaultValues: recipe });

    const { handleSubmit } = methods;

    const onSubmit = ({
        id,
        image,
        name,
        description,
        cookingTime,
        instructions,
        prepTime,
        ingredients,
        serves,
        tips,
    }: RecipeEditableRow) => {
        updateRecipe({
            variables: {
                recipeId: id,
                recipe: {
                    image,
                    name,
                    description,
                    cookingTime,
                    instructions,
                    prepTime,
                    ingredients,
                    serves,
                    tips,
                },
            },
            onCompleted: () => setIsEditing(false),
        });
    };

    return (
        <FormProvider {...methods}>
            {loading && <Spinner absolute className="h-auto py-6" />}
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="table-row w-full"
            >
                <div className="table-cell w-56 px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Input<RecipeEditableRow>
                        type="text"
                        name="name"
                        style="adminInputSecond"
                        placeholder="Enter a name..."
                    />
                </div>
                <div className="table-cell w-96 px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Input<RecipeEditableRow>
                        type="text"
                        name="description"
                        style="adminInputSecond"
                        placeholder="Enter an email..."
                    />
                </div>
                <div className="table-cell w-96 px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Input<RecipeEditableRow>
                        type="text"
                        name="description"
                        style="adminInputSecond"
                        placeholder="Enter a phone number..."
                    />
                </div>
                <div className="table-cell w-96 px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Input<RecipeEditableRow>
                        type="text"
                        name="ingredients"
                        style="adminInputSecond"
                        placeholder="Enter a phone number..."
                    />
                </div>
                <div className="table-cell w-96 px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Input<RecipeEditableRow>
                        type="number"
                        name="cookingTime"
                        style="adminInputSecond"
                        placeholder="Enter a phone number..."
                    />
                </div>
                <div className="table-cell w-96 px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Input<RecipeEditableRow>
                        type="text"
                        name="instructions"
                        style="adminInputSecond"
                        placeholder="Enter a phone number..."
                    />
                </div>
                <div className="table-cell w-96 px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Input<RecipeEditableRow>
                        type="number"
                        name="prepTime"
                        style="adminInputSecond"
                        placeholder="Enter a phone number..."
                    />
                </div>
                <div className="table-cell w-96 px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Input<RecipeEditableRow>
                        type="number"
                        name="serves"
                        style="adminInputSecond"
                        placeholder="Enter a phone number..."
                    />
                </div>
                <div className="table-cell w-96 px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Input<RecipeEditableRow>
                        type="text"
                        name="tips"
                        style="adminInputSecond"
                        placeholder="Enter a phone number..."
                    />
                </div>

                <div className="table-cell px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <Button type="submit" style="userTableButton">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-lime-500 cursor-pointer"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M17.8331 1.5H3C2.60218 1.5 2.22064 1.65804 1.93934 1.93934C1.65804 2.22064 1.5 2.60218 1.5 3V21C1.5 21.3978 1.65804 21.7794 1.93934 22.0607C2.22064 22.342 2.60218 22.5 3 22.5H21C21.3975 22.4989 21.7784 22.3405 22.0594 22.0594C22.3405 21.7784 22.4989 21.3975 22.5 21V6.16687L17.8331 1.5ZM5.25 8.25V5.25H14.25V8.25H5.25ZM15.7458 16.6763C15.7116 17.4021 15.4673 18.1025 15.0426 18.6921C14.6178 19.2817 14.0308 19.7352 13.3531 19.9974C12.6754 20.2597 11.936 20.3193 11.225 20.1692C10.514 20.019 9.86193 19.6655 9.34811 19.1516C8.83429 18.6377 8.48085 17.9856 8.33077 17.2746C8.18068 16.5635 8.24043 15.8242 8.50274 15.1465C8.76504 14.4688 9.21861 13.8819 9.80828 13.4572C10.3979 13.0325 11.0983 12.7883 11.8242 12.7542C12.3454 12.7313 12.8656 12.817 13.3518 13.006C13.838 13.195 14.2795 13.4831 14.6484 13.852C15.0172 14.2209 15.3052 14.6624 15.4942 15.1487C15.6831 15.6349 15.7688 16.1551 15.7458 16.6763Z"
                            />
                        </svg>
                    </Button>
                </div>
                <div className="table-cell px-6 py-3 whitespace-no-wrap border-b border-gray200">
                    <svg
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
            </form>
        </FormProvider>
    );
};
