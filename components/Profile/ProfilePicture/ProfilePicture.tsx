import React from "react";
import Image from "next/image";

import { generateColorHsl } from "./helper";
import { useMeQuery } from "../../../client/generated/graphql";
import { AddProfilePicture } from "../../Forms/AddProfilePictureForm/AddProfilePicture";

import img1 from "public/images/preferences-1.jpg";

// Заменить поле name на img (23 line)

export const ProfilePicture: React.FC = () => {
    const { data } = useMeQuery();

    const name = `${data?.me?.name}`;
    const color = generateColorHsl(name);

    return (
        <>
            <h2 className="text-2xl mt-8 mb-5 text-black dark:text-white">
                Profile Picture
            </h2>
            <div className="flex items-center p-5 w-3/5 h-36 bg-white rounded-md drop-shadow-md dark:bg-eerieBlack dark:border dark:border-darkCharcoal">
                <div className="mr-5">
                    {data?.me?.name ? (
                        <Image
                            src={img1}
                            width={96}
                            height={96}
                            alt="User avatar"
                            className="rounded-full"
                        />
                    ) : (
                        <div
                            className="w-24 h-24 flex items-center justify-center text-3xl text-white rounded-full"
                            style={{ backgroundColor: color }}
                        >
                            {data?.me?.name[0].toUpperCase()}
                            {data?.me?.firstName[0].toUpperCase()}
                        </div>
                    )}
                </div>
                <div>
                    <AddProfilePicture />
                    <p className="text-black dark:text-gray-200">
                        Must be JPEG, PNG or GIF and cannot exceed 10MB.
                    </p>
                </div>
            </div>
        </>
    );
};
