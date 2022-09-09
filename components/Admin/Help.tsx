import React from "react";
import useTranslation from "next-translate/useTranslation";

export const Help: React.FC = () => {
    const { t } = useTranslation("help");

    return (
        <div className="m-10 w-4/5">
            <h1 className="text-4xl text-center text-lime-500">
                <span>{t("help:title")}</span>
            </h1>
        </div>
    );
};
