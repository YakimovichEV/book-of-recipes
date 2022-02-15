import React, { useState } from "react";

import { EditableRow } from "./EditableRow";
import { ReadOnlyRow } from "./ReadOnlyRow";
import { Recipe } from "./types";

interface InputProps {
    recipe: Recipe;
}

export const Row: React.FC<InputProps> = ({ recipe }) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    if (isEditing) {
        return <EditableRow recipe={recipe} setIsEditing={setIsEditing} />;
    }

    return <ReadOnlyRow recipe={recipe} handleEditClick={handleEditClick} />;
};
