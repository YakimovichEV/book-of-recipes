import React from "react";
import { useIsRendered } from "../../hooks/isRendered";

export const ApolloClientOnlyHOC: React.FC = ({ children, ...delegated }) => {
    const isRendered = useIsRendered();

    if (!isRendered) {
        return null;
    }

    return <div {...delegated}>{children}</div>;
};
