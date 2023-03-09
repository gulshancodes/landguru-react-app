import React from 'react';
import { footAbout, footAccount, footInfo, footPolicy } from '../data/footerData';

const Footer = () => {
    return (
        <footer id="footer" className="section">
            <div className="container">
                <div className="wrapper footer_wrapper">
                    <div className="foot_about">
                        <h5>About Us</h5>
                        <ul>
                            {
                                footAbout.map(item => {
                                    const { id, link, path } = item;
                                    return (
                                        <li key={id}>
                                            <a href={path}>{link}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="foot_info">
                        <h5>Our Information</h5>
                        <ul>
                            {
                                footInfo.map(item => {
                                    const { id, link, path } = item;
                                    return (
                                        <li key={id}>
                                            <a href={path}>{link}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="foot_account">
                        <h5>My Account</h5>
                        <ul>
                            {
                                footAccount.map(item => {
                                    const { id, link, path } = item;
                                    return (
                                        <li key={id}>
                                            <a href={path}>{link}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>

                    <div className="foot_policy">
                        <h5>Policy</h5>
                        <ul>
                            {
                                footPolicy.map(item => {
                                    const { id, link, path } = item;
                                    return (
                                        <li key={id}>
                                            <a href={path}>{link}</a>
                                        </li>
                                    );
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;