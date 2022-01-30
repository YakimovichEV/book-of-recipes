export const groupClasses = {
    image: "object-cover brightness-75 duration-500 group-hover:brightness-50 group-hover:scale-125",
    imageChanged: "object-cover duration-500 brightness-50 scale-125",
    title: "primary-font absolute top-50 text-5xl text-white duration-500 group-hover:-translate-y-36 2xl:text-7xl",
    titleChanged:
        "primary-font absolute top-50 text-5xl text-white duration-500 -translate-y-36 2xl:text-7xl",
    imgBlock:
        "absolute -bottom-72 h-60 flex flex-col justify-between duration-500 group-hover:bottom-4 2xl:group-hover:bottom-16",
    imgBlockChanged:
        "absolute h-60 flex flex-col justify-between duration-500 bottom-4 2xl:bottom-16",
} as const;
