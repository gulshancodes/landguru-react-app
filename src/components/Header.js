import React, { useEffect, useState } from 'react';
import headerData from '../data/headerData';

const Header = () => {

    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {

        const handleIsSticky = () => {
            window.scrollY > 80 ? setIsSticky(true) : setIsSticky(false);
        };

        window.addEventListener('scroll', handleIsSticky);

        return () => {
            window.removeEventListener('scroll', handleIsSticky);
        };
    }, [isSticky]);


    return (
        <header id="header" className={isSticky ? 'sticky' : ''}>
            <div className="container">
                <div className="navbar">
                    <div className="nav_logo">
                        <img src="/images/head-logo.svg" alt="logo-img" />
                        <h4><a href="/">Landguru</a></h4>
                    </div>
                    <nav className="nav_links">
                        {
                            headerData.map(item => {
                                const { id, link, path } = item;
                                return <a href={path} key={id}>{link}</a>;
                            })
                        }
                    </nav>
                    <button className="btn">Try for Free</button>
                </div>
            </div>
        </header>
    );
};

export default Header;