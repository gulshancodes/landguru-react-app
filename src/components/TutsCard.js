import React from 'react';
import { IoEye } from 'react-icons/io5';
import PlayIcon from './PlayIcon';
import Star from './Star';

const TutsCard = (props) => {

    const { img, rateStar, ratings, reviews, text, views } = props;

    return (
        <div className="tuts_card">
            <figure>
                <img src={img} alt="tuts" />
                <PlayIcon />
            </figure>
            <div className="info">
                <div className="ratings">
                    <Star rateStar={rateStar} />
                    <span>{ratings}({reviews} reviews)</span>
                </div>
                <h4>{text}</h4>
                <p className="views">
                    <span>{<IoEye />}</span>
                    {views} students watched
                </p>
            </div>
        </div>
    );
};

export default TutsCard;