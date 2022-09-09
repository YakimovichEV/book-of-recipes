import React, { Fragment } from "react";

interface ConfirmationModalProps {
    message: string;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    message,
}) => <Fragment>{message}</Fragment>;
