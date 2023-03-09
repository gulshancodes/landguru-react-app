import React from 'react';

const Section = (props) => {

    const { children, id } = props;

    return (
        <section id={id} className="section">
            <div className="container">
                {children}
            </div>
        </section>
    );
};

export default Section;