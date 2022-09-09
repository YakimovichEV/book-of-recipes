import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { ImCross } from "react-icons/im";
import useTranslation from "next-translate/useTranslation";

import { Button } from "components/common";

interface ModalProps {
    isShown: boolean;
    hide: () => void;
    onConfirm: () => void;
    onCancel: () => void;
    modalContent: JSX.Element;
    headerText: React.ReactNode | string;
}

export const Modal: React.FC<ModalProps> = ({
    isShown,
    hide,
    modalContent,
    headerText,
    onConfirm,
    onCancel,
}) => {
    const { t } = useTranslation("modal");

    const onKeyDown = (event: KeyboardEvent) => {
        if (event.key === "Escape" && isShown) {
            hide();
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", onKeyDown, false);
        return () => {
            document.removeEventListener("keydown", onKeyDown, false);
        };
        // eslint-disable-next-line
    }, [isShown]);

    const modal = (
        <>
            <div
                className="fixed w-full h-full top-0 left-0 z-[51] bg-black/50"
                onClick={hide}
            />
            <div className="fixed w-2/5 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] outline-none overflow-x-hidden overflow-y-auto">
                <div className="border-none shadow-lg relative flex flex-col w-full pointer-events-aut bg-clip-padding rounded-md outline-none text-current bg-white dark:bg-[#1F1F23]">
                    <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray-600 dark:text-white">
                            {headerText}
                        </h5>
                        <ImCross
                            onClick={hide}
                            size={18}
                            className="cursor-pointer text-black opacity-100 hover:opacity-50 duration-200 dark:text-white"
                        />
                    </div>
                    <div className="relative p-4 text-black dark:text-white">
                        <div>{modalContent}</div>
                    </div>
                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                        <Button
                            onClick={onCancel}
                            style="adminCancelButton"
                            type="button"
                        >
                            {t("modal:close")}
                        </Button>
                        <Button
                            onClick={onConfirm}
                            style="adminButton"
                            type="button"
                        >
                            {t("modal:delete")}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
