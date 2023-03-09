import React, { useEffect, useRef, useState } from 'react';
import Section from '../components/Section';
import SectionHead from '../components/SectionHead';
import courseData from '../data/courseData';
import featuresData from '../data/featuresData';
import tutsData from '../data/tutsData';
import freeTutData from '../data/freeTutData';
import priceData from '../data/priceData';
import worksData from '../data/worksData';
import { IoEye, IoSearch } from 'react-icons/io5';
import { BsCheckCircleFill, BsArrowDown } from 'react-icons/bs';
import PlayIcon from '../components/PlayIcon';
import Slider from '../components/Slider';
import Accordions from '../components/Accordions';
import Star from '../components/Star';


const Home = () => {

    const [isVidPlay, setIsVidPlay] = useState(false);

    const videoRef = useRef();

    const playVideo = () => {
        setIsVidPlay(prev => !prev);
    };

    useEffect(() => {
        isVidPlay ? videoRef.current.play() : videoRef.current.pause();
    }, [isVidPlay]);

    const scrollDown = () => {
        window.scrollBy({
            top: 650,
            behavior: 'smooth'
        });
    };



    return (
        <main>
            <Section id="hero">
                <div className="wrapper hero_wrapper">
                    <div className="left_content">
                        <div className="ratings">
                            <Star rateStar={5} />
                            <span>Trusted by over 4,332 students</span>
                        </div>
                        <h1>Learn Design with Nia Matos</h1>
                        <p>Get your blood tests delivered at let home collect sample from the victory of the managments that supplies best
                            design system guidelines ever.</p>
                        <form>
                            <div className="input_box">
                                <input type="text" placeholder='Search Course Name' />
                                <span><IoSearch /></span>
                            </div>
                        </form>
                        <figure>
                            <img src="/images/logo.svg" alt="img" />
                        </figure>
                    </div>

                    <div className="right_content">
                        <div className="video_wrapper">
                            <PlayIcon playVid={playVideo} />
                            <video ref={videoRef}>
                                <source src="/images/hero-vid.mp4" type="video/mp4" />
                            </video>
                        </div>

                    </div>
                </div>
            </Section >

            <Section id="tutorials">
                <SectionHead
                    topHead="Quality features"
                    bottomHead="Tutorials that people love most"
                />
                <Slider
                    slideData={tutsData}
                    slideView={3}
                    space={20}
                />
            </Section>

            <Section id="features">
                <div className="wrapper features_wrapper">
                    <div className="left_content">
                        {
                            featuresData.map(item => {
                                const { id, numbs, text } = item;
                                return (
                                    <div className="card" key={id}>
                                        <div>
                                            <h2>{numbs}</h2>
                                            <p>{text}</p>
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className="right_content">
                        <h6>Core features</h6>
                        <h2>Smart Jackpots that you may love this anytime & anywhere</h2>
                        <p>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                        <button className="btn">Explore details</button>
                    </div>

                    <div className="scroll_down">
                        <button onClick={scrollDown}>
                            <BsArrowDown />
                        </button>
                    </div>
                </div>
            </Section>

            <Section id="course">
                <SectionHead
                    topHead="Quality features"
                    bottomHead="Popular Designing Course"
                />
                <div className="wrapper course_wrapper">
                    {
                        courseData.map(item => {
                            const { id, rateStar, ratings, reviews, views, headText, subText } = item;
                            return (
                                <div className="card" key={id}>
                                    <div className="left_content">
                                        <PlayIcon />
                                    </div>

                                    <div className="mid_content">
                                        <div className="ratings">
                                            <Star rateStar={rateStar} />
                                            <span>{ratings}({reviews} reviews)</span>
                                            <p className="views">
                                                <span>{<IoEye />}</span>
                                                {views} students watched
                                            </p>
                                        </div>
                                        <h4>{headText}</h4>
                                        <p>{subText}</p>
                                    </div>

                                    <div className="right_content">
                                        <button className="btn">
                                            7 Video Classes | 4hrs
                                        </button>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </Section>

            <Section id="works">
                <SectionHead
                    topHead="Whats the function"
                    bottomHead="Let’s see how it works"
                />
                <div className="wrapper works_wrapper">
                    {
                        worksData.map(item => {
                            const { id, headText, subText } = item;
                            return (
                                <div className="card" key={id}>
                                    <h4>{id}</h4>
                                    <h5>{headText}</h5>
                                    <p>{subText}</p>
                                </div>
                            );
                        })
                    }
                </div>
            </Section>

            <Section id="price">
                <SectionHead
                    topHead="Pricing Plan"
                    bottomHead="Choose your pricing policy"
                />
                <div className="wrapper price_wrapper">
                    <div className="card">
                        <div className="head">
                            <div>
                                <h5>Free Plan</h5>
                                <p>For Small teams or office</p>
                            </div>
                        </div>
                        <ul>
                            {
                                priceData.map(item => {
                                    const { id, features } = item;
                                    return <li key={id}>
                                        <span><BsCheckCircleFill /></span>
                                        <span>{features}</span>
                                    </li>;
                                })
                            }
                        </ul>
                        <button className="btn">Start free trial</button>
                    </div>

                    <div className="card">
                        <div className="tag">Recommended</div>
                        <div className="head">
                            <div>
                                <h5>Premium</h5>
                                <p>For startup enterprise</p>
                            </div>

                            <div className="price">
                                <p>Starting from</p>
                                <h4>49.99/mo</h4>
                            </div>
                        </div>
                        <ul>
                            {
                                priceData.map(item => {
                                    const { id, features } = item;
                                    return <li key={id}>
                                        <span><BsCheckCircleFill /></span>
                                        <span>{features}</span>
                                    </li>;
                                })
                            }
                        </ul>
                        <button className="btn">Subscribe Now</button>
                    </div>
                </div>
            </Section>

            <Section id="free_tut">
                <div className="wrapper free_tut_wrapper">
                    <div className="left_content">
                        <Slider
                            slideData={freeTutData}
                            slideView={1}
                            space={0}
                        />
                    </div>

                    <div className="right_content">
                        <h6>Free tutorial</h6>
                        <h2>More than  thousand
                            of free tutorial upload
                            every weeks</h2>
                        <p>Get your tests delivered at let home collect sample from the victory of the managments that supplies best design system guidelines ever. Get your tests delivered at let home collect sample.</p>
                        <button className="btn">Explore details</button>
                    </div>
                </div>
            </Section>

            <Section id="faq">
                <SectionHead
                    topHead="Frequent Question"
                    bottomHead="Do you have any question"
                />
                <Accordions />
            </Section>

            <Section id="ready">
                <div>
                    <h1>Ready to learn design <br /> with Nia Matos</h1>
                    <button className="btn">Start Learning Today</button>
                </div>
            </Section>
        </main >
    );
};

export default Home;