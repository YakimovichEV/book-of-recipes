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

export const AddRecipe: React.FC = () => {
    const [addRecipe] = useCreateOrUpdateRecipeMutation();

    const methods = useForm<RecipeInput>();

    const { reset, handleSubmit, setValue } = methods;

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

    // const categoryOptions = ({ category }: RecipeInput) => {
    //     const test = category.split(" ").map((cat) => {
    //         console.log(cat);
    //     });

    //     return test;
    // };

    const options = [
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
                    <label htmlFor="name" className="table__label--admin">
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
                    <label
                        htmlFor="description"
                        className="table__label--admin"
                    >
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
                        <label htmlFor="tips" className="table__label--admin">
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
                        <label
                            htmlFor="ingredients"
                            className="table__label--admin"
                        >
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
                        <label
                            htmlFor="cookingTime"
                            className="table__label--admin"
                        >
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
                        <label
                            htmlFor="instructions"
                            className="table__label--admin"
                        >
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
                        <label
                            htmlFor="prepTime"
                            className="table__label--admin"
                        >
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
                        <label htmlFor="serves" className="table__label--admin">
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
                        <label htmlFor="image" className="table__label--admin">
                            Upload Image
                        </label>
                    </div>
                    <div className="mb-6 w-1/2 ml-10">
                        <Select
                            isMulti
                            options={options}
                            onChange={({ category }: RecipeInput) => {
                                setValue("category", category);
                            }}
                            placeholder="Choose category:"
                            components={animatedComponents}
                        />
                    </div>
                </div>
                <Button type="submit" style="adminButton" className="mr-2">
                    Submit
                </Button>
                <Link href="/admin/recipes" passHref>
                    <a>
                        <Button style="adminCancelButton">Back</Button>
                    </a>
                </Link>
            </form>
        </FormProvider>
    );
};
