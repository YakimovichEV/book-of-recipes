import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

import { PepperIcon } from "components/Icons/PepperIcon/PepperIcon";
import { PepperIconFilled } from "components/Icons/PepperIcon/PepperIconFilled";

export const SpiceRating: React.FC = () => {
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
            emptyIcon={<PepperIcon />}
            fullIcon={<PepperIconFilled />}
        />
    );
};
