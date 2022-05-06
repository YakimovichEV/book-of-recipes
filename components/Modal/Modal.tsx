import React, { Fragment, useEffect } from "react";
import ReactDOM from "react-dom";
import useTranslation from "next-translate/useTranslation";

import { Button } from "components/Button/Button";

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
        <Fragment>
            <div
                className="fixed w-full h-full top-0 left-0 z-10 bg-black/50"
                onClick={hide}
            />
            <div className="fixed w-2/5 top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 outline-none overflow-x-hidden overflow-y-auto">
                <div className="border-none shadow-lg relative flex flex-col w-full pointer-events-aut bg-clip-padding rounded-md outline-none text-current bg-white dark:bg-[#1F1F23]">
                    <div className="flex flex-shrink-0 items-center justify-between p-4 border-b border-gray200 rounded-t-md">
                        <h5 className="text-xl font-medium leading-normal text-gray600 dark:text-white">
                            {headerText}
                        </h5>
                        <svg
                            onClick={hide}
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 cursor-pointer text-black opacity-100 hover:opacity-50 duration-200 dark:text-white"
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
                    <div className="relative p-4 text-black dark:text-white">
                        <div>{modalContent}</div>
                    </div>
                    <div className="flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray200 rounded-b-md">
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
                            {t("modal:save")}
                        </Button>
                    </div>
                </div>
            </div>
        </Fragment>
    );

    return isShown ? ReactDOM.createPortal(modal, document.body) : null;
};
