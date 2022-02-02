import React from "react";
import Image from "next/image";

import { ClockIcon } from "components/Icons/ClockIcon/ClockIcon";
import { PlanetIcon } from "components/Icons/PlanetIcon/PlanetIcon";

import DishImg from "/public/images/dish.jpg";
import Link from "next/link";

export const DishesItem: React.FC = () => {
    const dishPath = "/home"; // add dynamic routes

    return (
        <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-4">
            <Link href={dishPath} passHref>
                <a className="group block bg-white shadow-md hover:shadow-xl duration-300 rounded-lg overflow-hidden">
                    <div className="relative overflow-hidden">
                        <Image
                            className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 duration-300"
                            src={DishImg}
                            alt="Cosmopolitan Cocktails"
                        />
                    </div>
                    <div className="p-4">
                        <span className="inline-block px-2 py-1 leading-none bg-orange-200 rounded-full ">
                            <div className="flex items-center">
                                <PlanetIcon />
                                <span className="ml-2 text-orange-800 font-semibold uppercase tracking-wide text-xs">
                                    Western
                                </span>
                            </div>
                        </span>
                        <h2 className="my-2 font-bold">
                            Cosmopolitan Cocktails
                        </h2>
                        <p className="text-sm">
                            A wonderful classic, elegant cocktail made famous by
                            the ladies of Sex and the City! The key is to get
                            the balance of each component just right so it`s not
                            too sweet, not too tart. I particularly love Cosmos
                            because they`re so quick and easy to make. Also
                            works well to make a big jug and keep it cold in the
                            fridge.
                        </p>
                    </div>
                    <div className="p-4 border-y text-xs text-gray-700">
                        <span className="flex items-center mb-1">
                            <ClockIcon />
                            <span className="ml-2 text-sm">5 min.</span>
                        </span>
                    </div>
                    <div className="p-4 flex items-center text-sm text-gray-600">
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                        >
                            <path
                                d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                                fill="#FFC700"
                            ></path>
                        </svg>
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                        >
                            <path
                                d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                                fill="#FFC700"
                            ></path>
                        </svg>
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                        >
                            <path
                                d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                                fill="#FFC700"
                            ></path>
                        </svg>
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                        >
                            <path
                                d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"
                                fill="#FFC700"
                            ></path>
                        </svg>
                        <svg
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4"
                        >
                            <path d="M8.128 19.825a1.586 1.586 0 0 1-1.643-.117 1.543 1.543 0 0 1-.53-.662 1.515 1.515 0 0 1-.096-.837l.736-4.247-3.13-3a1.514 1.514 0 0 1-.39-1.569c.09-.271.254-.513.475-.698.22-.185.49-.306.776-.35L8.66 7.73l1.925-3.862c.128-.26.328-.48.577-.633a1.584 1.584 0 0 1 1.662 0c.25.153.45.373.577.633l1.925 3.847 4.334.615c.29.042.562.162.785.348.224.186.39.43.48.704a1.514 1.514 0 0 1-.404 1.58l-3.13 3 .736 4.247c.047.282.014.572-.096.837-.111.265-.294.494-.53.662a1.582 1.582 0 0 1-1.643.117l-3.865-2-3.865 2z"></path>
                        </svg>
                        <span className="ml-2">Overall Rating</span>
                    </div>
                </a>
            </Link>
        </div>
    );
};
