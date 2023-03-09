import React from 'react';
import { FaStar } from 'react-icons/fa';

const Star = ({ rateStar }) => {
    return (
        <span className="star">
            {
                [...Array(rateStar)].map((_, i) => <FaStar key={i} />)
            }
        </span>
    );
};

export default Star;