import React from "react";
import Image from "next/image";

import { DishesItem } from "./DishesItem";

import EmptyImg from "public/images/dishes-history.jpg";

export const DishesItems: React.FC = () => {
    return (
        <div className="container mx-auto">
            <div className="flex flex-wrap sm:-mx-4">
                <DishesItem />
                <DishesItem />
                <DishesItem />
                <DishesItem />
                <DishesItem />
                <DishesItem />
                <DishesItem />
                <DishesItem />
                <DishesItem />
                <DishesItem />

                {/* <div className="py-5 mx-auto w-72 text-center sm:w-96 md:w-1/2 lg:w-2/5">
                    <h2 className="second-font text-2xl mb-2 lg:text-3xl lg:mb-5">
                        Dishes History is empty 😕
                    </h2>
                    <p className="text-lg text-gray mb-3 lg:text-xl lg:mb-5">
                        Most likely, you haven`t cooked anything yet.
                        <br />
                        To place an order, go to the testPage page.
                    </p>
                    <Image
                        src={EmptyImg}
                        width={300}
                        height={250}
                        className="block"
                        alt="Empty History Dishes"
                    />
                </div> */}
            </div>
        </div>
    );
};
