import React from "react";
import { useTheme } from "next-themes";
import ContentLoader from "react-content-loader";

export const Skeleton: React.FC = () => {
    const { theme, resolvedTheme } = useTheme();

    return (
        <ContentLoader
            speed={2}
            width={480}
            height={520}
            viewBox="0 0 480 525"
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
        >
            <rect x="0" y="0" rx="3" ry="3" width="480" height="300" />
            <rect x="0" y="410" rx="0" ry="0" width="480" height="100" />
            <rect x="0" y="340" rx="0" ry="0" width="250" height="20" />
            <rect x="0" y="375" rx="0" ry="0" width="250" height="20" />
        </ContentLoader>
    );
};
