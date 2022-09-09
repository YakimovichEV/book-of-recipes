import React from "react";
import useTranslation from "next-translate/useTranslation";

export const History: React.FC = () => {
    const { t } = useTranslation("history-of-incidents");

    return (
        <div className="m-10 w-3/5">
            <h1 className="history__title--admin">
                {t("history-of-incidents:past-incidents")}
            </h1>

            <div className="my-8">
                <h2 className="history__subtitle--admin">
                    {t("history-of-incidents:may")} 2022
                </h2>
                <hr className="border border-gray-300 my-3" />
                <p className="history__incidents--admin">
                    {t("history-of-incidents:no-incidents")}
                </p>
            </div>

            <div className="my-8">
                <h2 className="history__subtitle--admin">
                    {t("history-of-incidents:april")} 2022
                </h2>
                <hr className="border border-gray-300 my-3" />
                <p className="history__incidents--admin">
                    {t("history-of-incidents:no-incidents")}
                </p>
            </div>

            <div className="my-8">
                <h2 className="history__subtitle--admin">
                    {t("history-of-incidents:march")} 2022
                </h2>
                <hr className="border border-gray-300 my-3" />
                <p className="history__incidents--admin">
                    {t("history-of-incidents:no-incidents")}
                </p>
            </div>

            <div className="my-8">
                <h2 className="history__subtitle--admin">
                    {t("history-of-incidents:february")} 2022
                </h2>
                <hr className="border border-gray-300 my-3" />
                <p className="history__incidents--admin">
                    {t("history-of-incidents:no-incidents")}
                </p>
            </div>

            <div className="my-8">
                <h2 className="history__subtitle--admin">
                    {t("history-of-incidents:january")} 2022
                </h2>
                <hr className="border border-gray-300 my-3" />
                <p className="history__incidents--admin">
                    {t("history-of-incidents:no-incidents")}
                </p>
            </div>
        </div>
    );
};
