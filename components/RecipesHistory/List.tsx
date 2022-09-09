import React, { useMemo } from "react";
import Link from "next/link";
import Image from "next/image";

import { Item } from "./Item";
import { Skeleton } from "./Skeleton";
import { useGetRecipeListQuery } from "client/generated/graphql";

import EmptyImg from "public/images/dishes-history.jpg";

export const List: React.FC = () => {
    const { data, loading, error } = useGetRecipeListQuery();

    const recipes = useMemo(
        () =>
            data?.getRecipeList.map((item) => <Item key={item.id} {...item} />),
        [data?.getRecipeList],
    );

    const skeletons = [...new Array(8)].map((_, index: number) => (
        <Skeleton key={index} />
    ));

    if (data?.getRecipeList.length === 0) {
        return (
            <div className="py-5 mx-auto w-72 text-center sm:w-96 md:w-1/2 lg:w-2/5">
                <h2 className="second-font text-2xl mb-2 lg:text-3xl lg:mb-5">
                    History is empty 😕
                </h2>
                <p className="text-lg text-gray mb-3 lg:text-xl lg:mb-5">
                    Most likely, you haven`t cooked anything yet.
                    <br />
                    To cook something, go to the
                    <Link href="recipes">
                        <a className="underline"> recipes </a>
                    </Link>
                    page.
                </p>
                <Image
                    src={EmptyImg}
                    width={300}
                    height={250}
                    className="block"
                    alt="Empty History Dishes"
                />
            </div>
        );
    }

    if (error) {
        return (
            <h1 className="text-2xl font-bold text-center mt-10">
                An error has occured
            </h1>
        );
    }

    return (
        <div className="flex flex-wrap sm:-mx-4 sm:mt-5 sm:mb-10">
            {loading ? skeletons : recipes}
        </div>
    );
};
