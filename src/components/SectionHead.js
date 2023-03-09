import React from 'react';

const SectionHead = (props) => {

    const { topHead, bottomHead } = props;

    return (
        <div className="section_head">
            <h5>{topHead}</h5>
            <h3>{bottomHead}</h3>
        </div>
    );
};

export default SectionHead;