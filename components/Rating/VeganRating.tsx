import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaLeaf } from "react-icons/fa";

export const VeganRating: React.FC = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);
    };

    return (
        <Rating
            onClick={handleRating}
            ratingValue={rating}
            transition
            emptyIcon={<FaLeaf size={35} color="black" />}
            fullIcon={<FaLeaf size={35} color="#cbeaa6" />}
        />
    );
};
