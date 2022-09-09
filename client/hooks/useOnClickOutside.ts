import { RefObject, useEffect } from "react";

type OnClick = MouseEvent & {
    path: Node[];
};

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
    ref: RefObject<T>,
    callback: () => void,
) => {
    useEffect(() => {
        const clickOutsideHandler = (event: MouseEvent) => {
            const _event = event as OnClick;

            if (ref.current && !_event.path.includes(ref.current)) {
                callback();
            }
        };

        document.body.addEventListener("click", clickOutsideHandler);

        return () =>
            document.body.removeEventListener("click", clickOutsideHandler);
    }, [callback, ref]);
};
