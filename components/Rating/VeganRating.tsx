import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

import { LeafIcon } from "../Icons/LeafIcon/LeafIcon";
import { LeafIconFilled } from "../Icons/LeafIcon/LeafIconFilled";

export const VeganRating: React.FC = () => {
    const [rating, setRating] = useState(0);

    const handleRating = (rate: number) => {
        setRating(rate);
    };

    return (
        <Rating
            onClick={handleRating}
            ratingValue={rating}
            iconsCount={4}
            transition
            emptyIcon={<LeafIcon />}
            fullIcon={<LeafIconFilled />}
        />
    );
};
