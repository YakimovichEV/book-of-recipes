import React, { useState } from "react";

import { EditableRow } from "./EditableRow";
import { ReadOnlyRow } from "./ReadOnlyRow";
import { User } from "./types";

interface InputProps {
    user: User;
}

export const Row: React.FC<InputProps> = ({ user }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    if (isEditing) {
        return <EditableRow user={user} setIsEditing={setIsEditing} />;
    }

    return <ReadOnlyRow user={user} handleEditClick={handleEditClick} />;
};
