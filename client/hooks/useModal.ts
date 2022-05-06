import { useState } from "react";

export const useModal = () => {
    const [isShown, setIsShown] = useState<boolean>(false);

    const toggle = () => setIsShown((prevState) => !prevState);

    return {
        isShown,
        toggle,
    };
};
