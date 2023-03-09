import React from 'react';
import { FaPlay } from 'react-icons/fa';

const PlayIcon = ({ playVid }) => {
    return (
        <button className="play_icon" onClick={playVid}>
            <FaPlay />
        </button>
    );
};

export default PlayIcon;