import { useEffect, useState } from "react";

export const useIsRendered = (): boolean => {
    const [isRendered, setIsRendered] = useState(false);

    useEffect(() => {
        setIsRendered(true);
    }, []);

    return isRendered;
};
