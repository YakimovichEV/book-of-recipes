import React from "react";
import Link from "next/link";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { useForm, FormProvider } from "react-hook-form";

import {
    RecipeInput,
    GetRecipeListDocument,
    useCreateOrUpdateRecipeMutation,
} from "client/generated/graphql";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";

const labelStyle =
    "absolute text-sm text-gray500 dark:text-gray400 -translate-y-[30.9px] duration-300 mt-0 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue600 peer-focus:dark:text-blue500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-[30.9px]";

export const AddRecipe: React.FC = () => {
    const [addRecipe] = useCreateOrUpdateRecipeMutation();

    const methods = useForm<RecipeInput>();

    const { reset, handleSubmit, setValue, getValues } = methods;

    const onSubmit = (data: RecipeInput) => {
        addRecipe({
            variables: {
                recipe: data,
            },
            onCompleted: () => reset(),
            refetchQueries: [GetRecipeListDocument],
        });
    };

    const animatedComponents = makeAnimated();

    const categoryOptions = [
        { value: "chocolate", label: "Chocolate" },
        { value: "strawberry", label: "Strawberry" },
        { value: "vanilla", label: "Vanilla" },
    ];

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="m-10 w-4/5">
                <div className="relative z-0 mb-6 w-full">
                    <Input<RecipeInput>
                        type="text"
                        name="name"
                        style="adminInputSecond"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="name" className={labelStyle}>
                        Name
                    </label>
                </div>
                <div className="relative z-0 mb-6 w-full">
                    <Input<RecipeInput>
                        type="text"
                        name="description"
                        style="adminInputSecond"
                        placeholder=" "
                        required
                    />
                    <label htmlFor="description" className={labelStyle}>
                        Description
                    </label>
                </div>
                <div className="flex items-center">
                    <div className="relative z-0 mb-6 w-1/2">
                        <Input<RecipeInput>
                            type="text"
                            name="tips"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="tips" className={labelStyle}>
                            Tips
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-1/2 ml-10">
                        <Input<RecipeInput>
                            type="text"
                            name="ingredients"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="ingredients" className={labelStyle}>
                            Ingredients
                        </label>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative z-0 mb-6 w-1/2">
                        <Input<RecipeInput>
                            type="number"
                            options={{ valueAsNumber: true }}
                            name="cookingTime"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="cookingTime" className={labelStyle}>
                            Cooking Time
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-1/2 ml-10">
                        <Input<RecipeInput>
                            type="text"
                            name="instructions"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="instructions" className={labelStyle}>
                            Instructions
                        </label>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative z-0 mb-6 w-1/2">
                        <Input<RecipeInput>
                            type="number"
                            options={{ valueAsNumber: true }}
                            name="prepTime"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="prepTime" className={labelStyle}>
                            Prep. Time
                        </label>
                    </div>
                    <div className="relative z-0 mb-6 w-1/2 ml-10">
                        <Input<RecipeInput>
                            type="number"
                            options={{ valueAsNumber: true }}
                            name="serves"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="serves" className={labelStyle}>
                            Serves
                        </label>
                    </div>
                </div>
                <div className="flex items-center">
                    <div className="relative z-0 mb-6 w-1/2">
                        <Input<RecipeInput>
                            type="text"
                            name="image"
                            style="adminInputSecond"
                            placeholder=" "
                            required
                        />
                        <label htmlFor="image" className={labelStyle}>
                            Upload Image
                        </label>
                    </div>
                    <div className="mb-6 w-1/2 ml-10">
                        <Select
                            isMulti
                            options={categoryOptions}
                            placeholder="Choose category:"
                            components={animatedComponents}
                        />
                    </div>
                </div>
                <Button type="submit" style="addUserButton" className="mr-5">
                    Submit
                </Button>
                <Link href="/admin/recipes" passHref>
                    <a>
                        <Button style="userTableButton">Back</Button>
                    </a>
                </Link>
            </form>
        </FormProvider>
    );
};
