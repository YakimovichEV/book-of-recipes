import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useFormContext, useWatch } from "react-hook-form";

import { FileInput } from "components/common";

export const ImageUpload: React.FC = () => {
    const [imageSrc, setImageSrc] = useState<string>("");

    const { control, setValue } = useFormContext();

    const image = useWatch<FileList>({ name: "image", control });

    const fileToURL = (file: File): Promise<string> => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (ev) => {
                resolve((ev.target?.result as string) || "");
            };

            reader.readAsDataURL(file);
        });
    };

    const fetchImg = useCallback(async () => {
        const data = image?.length ? await fileToURL(image[0]) : "";

        setImageSrc(data);
    }, [image]);

    useEffect(() => {
        fetchImg();
    }, [fetchImg]);

    const onClickRemoveImage = () => {
        setValue("image", null);
    };

    return (
        <>
            {!imageSrc && (
                <>
                    <p className="text-gray-500 dark:text-gray-400">
                        Upload image:
                    </p>
                    <FileInput
                        name="image"
                        type="file"
                        style="default"
                        className="ml-2"
                    />
                </>
            )}
            {imageSrc && (
                <div className="relative">
                    <Image
                        width={300}
                        height={300}
                        layout="fixed"
                        src={imageSrc}
                        alt="Uploaded"
                    />
                    <svg
                        onClick={onClickRemoveImage}
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-1 right-1 z-10 h-7 w-7 cursor-pointer text-red-600 hover:text-red-700 duration-200 active:translate-y-px"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            )}
        </>
    );
};
