import React, { useState } from "react";

import { Recipe } from "./types";
import { EditableRow, ReadOnlyRow } from "./index";

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
