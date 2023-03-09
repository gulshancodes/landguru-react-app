import React, { useEffect, useState } from 'react';
import { BsArrowUpCircleFill } from 'react-icons/bs';

const BackTop = () => {

    const [isBackTopVisible, setIsBackTopVisible] = useState(false);

    useEffect(() => {

        const showBackTop = () => {
            window.scrollY >= 500 ? setIsBackTopVisible(true) : setIsBackTopVisible(false);
        };

        window.addEventListener('scroll', showBackTop);

        return () => {
            window.removeEventListener('scroll', showBackTop);
        };
    }, [isBackTopVisible]);


    const goTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };


    return (
        <div className={`back_top ${isBackTopVisible ? 'show' : ''}`}>
            <button onClick={goTop}>
                <BsArrowUpCircleFill />
            </button>
        </div>
    );
};

export default BackTop;