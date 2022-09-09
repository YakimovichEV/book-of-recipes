import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { FaPepperHot } from "react-icons/fa";

export const SpiceRating: React.FC = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);
    };

    return (
        <Rating
            onClick={handleRating}
            ratingValue={rating}
            transition
            emptyIcon={<FaPepperHot size={35} color="black" />}
            fullIcon={<FaPepperHot size={35} color="f41f1f" />}
        />
    );
};
