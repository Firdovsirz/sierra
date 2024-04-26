import 'swiper/css';
import "../About/About.css";
import 'swiper/swiper-bundle.css';
import Box from "@mui/material/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LinearProgress from "@mui/material/LinearProgress";
import React, { useEffect, useState, useRef } from 'react';
import titleIcon from "../../assets/about/title-icon.png.webp";
import videoIcon from "../../assets/about/video-icon.png.webp";
import popupPhoto from "../../assets/about/popup-photo.jpg.webp";
import DescSection from '../../components/DescSection/DescSection';


export default function About() {
    let swiperElements = [{
        title: '“We just love them”',
        desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.',
        photo: require('../../assets/about/testi-1.jpg.webp'),
        name: 'Julie Smart',
        jobDesc: 'CEO Enterprise'
    }, {
        title: '“Simply professionals”',
        desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.',
        photo: require('../../assets/about/testi-3.jpg.webp'),
        name: 'Maria Smith',
        jobDesc: 'CEO Enterprise'
    }, {
        title: '“We just love them”',
        desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.',
        photo: require('../../assets/about/testi-1.jpg.webp'),
        name: 'Julie Smart',
        jobDesc: 'CEO Enterprise'
    }, {
        title: '“They are the best”',
        desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.',
        photo: require('../../assets/about/testi-2.jpg.webp'),
        name: 'Chriss Turner',
        jobDesc: 'CEO Enterprise'
    }];
    let progressPoint = [
        {
            title: 'Development',
            point: 70
        }, {
            title: 'Dessign',
            point: 90
        }, {
            title: 'Seo',
            point: 85
        }, {
            title: 'Development',
            point: 90
        }, {
            title: 'Management',
            point: 75
        }
    ];
    const [progress, setProgress] = useState(0);
    const prices = [70, 95, 80, 78, 75];
    useEffect(() => {
        const handleScroll = () => {
            prices.forEach(price => {
                if (window.scrollY > 1200) {
                    const timer = setInterval(() => {
                        setProgress((oldProgress) => {
                            const diff = 100;
                            return Math.min(oldProgress + diff, price);
                        });
                    }, 1000);
                    return () => clearInterval(timer);
                }
            });
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const [showElement, setShowElement] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 1200) {
                const timer = setTimeout(() => {
                    setShowElement(true);
                }, 2000);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const [videoOpen, setVideoOpen] = useState(false);
    const modalRef = useRef(null);

    useEffect(() => {
        if (videoOpen) {
            setVideoOpen(true);
        } else {
            setVideoOpen(false);
        }
    }, [videoOpen]);

    const openVideoModal = () => {
        setVideoOpen(true);
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setVideoOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <Header />
            <DescSection mainTextChange={'About Us'} descTextChange={'Get to know us'} />
            <main>
                <section className='challenge-area'>
                    <div className='features'>
                        <img src={titleIcon} alt="title-icon" />
                        <h5>discover the features</h5>
                        <h2>We don't hide, we stand <br /> tall in front of challenge</h2>
                        <p>Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am <br />
                            et tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium <br />
                            sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec <br />
                            elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed <br />
                            ut risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae <br />
                            eros dignissim ultrices.</p>
                        <div className='about-video-player'>
                            <div href="#">
                                <img src={videoIcon} alt="videoPlayer" onClick={openVideoModal} />
                                <p className='about-video-text'>See how we work</p>
                                {videoOpen && <div className='video-container' ref={modalRef}>
                                    <iframe className='iframe-video' src="https://www.youtube.com/embed/62QYQE6k7tg" title="Fiverr video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                </div>}
                            </div>
                        </div>
                    </div>
                    <div className='challenge-area-popup'>
                        <img src={popupPhoto} alt="popup" />
                    </div>
                </section>
                <section className='testimonials-area'>
                    <div className='testimonials-container'>
                        <div className='testimonials-swiper'>
                            <Swiper
                                autoplay={{ delay: 3000 }}
                                speed={2000}
                                loop={true}
                                slidesPerView={3}
                                spaceBetween={70}
                                style={{ width: "100%" }}
                                breakpoints={{
                                    200: {
                                        slidesPerView: 1,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                        spaceBetween: 20
                                    },
                                    1024: {
                                        slidesPerView: 3
                                    },
                                    1200: {
                                        slidesPerView: 3
                                    }
                                }}

                                className="mySwiper">
                                {swiperElements.map((item) => {
                                    return (
                                        <SwiperSlide className='swiper-card'>
                                            <h3 className='swiper-title-about'>{item.title}</h3>
                                            <p className='swiper-desc-about'>{item.desc}</p>
                                            <div className='swiper-profile-about'>
                                                <img src={item.photo} alt="profile" />
                                                <div className='profile-text'>
                                                    <p className='swiper-pro-name'>{item.name}</p>
                                                    <p className='swiper-pro-job'>{item.jobDesc}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>
                        </div>
                    </div>
                </section>
                <section className='company-progress-area'>
                    <img src={titleIcon} alt="title-icon" />
                    <div className='progress-area-container'>
                        <div className='progress-text'>
                            <h5>discover the features</h5>
                            <h2>We are a <span>Gibraltar</span> based <br /> Company</h2>
                            <p className='progress-text-main'>
                                Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am <br />
                                et tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium <br />
                                sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec <br />
                                elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed <br />
                                ut risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae <br />
                                eros dignissim ultrices.
                            </p>
                        </div>
                        <div className='progress-desc'>
                            <p>
                                Etiam nec odio vestibulum est mattis effic iturut magna. Pellente <br />
                                sque sit am et tellus blandit. Etiam nec odio vestibul.
                            </p>
                            <div className='progress-bars'>
                                <div className='prog-bar-development'>
                                    {progressPoint.map((item, index) => {
                                        return (
                                            <div>
                                                <div className='linear-prog-label'>
                                                    <p className='linear-prog-title'>{item.title}</p>
                                                    {showElement && <span className='linear-prog-percentage fade-in'>{`${item.point}%`}</span>}
                                                </div>
                                                <Box sx={{ width: "100%", marginBottom: "10px" }} >
                                                    <LinearProgress
                                                        sx={{
                                                            ".css-g9hvip-MuiLinearProgress-root": {
                                                                height: 10
                                                            },
                                                            ".MuiLinearProgress-bar": {
                                                                background: "linear-gradient(90deg, #6ebdfe 40%, #9b8aff 100%)",
                                                                height: 10,
                                                                padding: 20 // Change the background color here
                                                            }
                                                        }}
                                                        variant="determinate"
                                                        value={prices[index]} //there should be progress no item !!!!
                                                    />
                                                </Box>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='talk-area'>
                    <h3>Are you ready to talk?</h3>
                    <a href="mailto:contact@sierracompany.com">contact@sierracompany.com</a>
                </section>
            </main>
            <Footer />
        </>
    )
}
