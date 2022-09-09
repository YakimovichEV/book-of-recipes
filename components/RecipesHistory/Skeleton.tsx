import React from "react";
import { useTheme } from "next-themes";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = () => {
    const { theme, resolvedTheme } = useTheme();

    return (
        <ContentLoader
            speed={2}
            width={360}
            height={560}
            viewBox="0 0 360 560"
            backgroundColor={
                theme === "dark" || resolvedTheme === "dark"
                    ? "#1f1f23"
                    : "#f3f3f3"
            }
            foregroundColor={
                theme === "dark" || resolvedTheme === "dark"
                    ? "#18181b"
                    : "#ecebeb"
            }
            className="m-4"
        >
            <rect x="0" y="0" rx="0" ry="0" width="360" height="370" />
            <rect x="0" y="380" rx="12" ry="12" width="120" height="30" />
            <rect x="0" y="419" rx="0" ry="0" width="210" height="25" />
            <rect x="0" y="456" rx="0" ry="0" width="210" height="25" />
            <rect x="54" y="494" rx="0" ry="0" width="150" height="25" />
            <circle cx="20" cy="508" r="20" />
            <rect x="0" y="535" rx="0" ry="0" width="360" height="25" />
        </ContentLoader>
    );
};
