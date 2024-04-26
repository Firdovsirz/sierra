import "swiper/css";
import React from 'react';
import "../Home/Home.css";
import "swiper/css/pagination";
import 'swiper/css/navigation';
import SwiperCore from 'swiper/core';
import Form from "../../components/Form/Form";
import { Swiper, SwiperSlide } from "swiper/react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Phone from "../../assets/home/iphone4.png.webp";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import WorldMap from "../../assets/home/world-map.png.webp";
import GetInTouch from "../../components/GetInTouch/GetInTouch";
import titleIcon from "../../assets/contact/title-icon.png (1).webp";
SwiperCore.use([Autoplay]);


export default function Home() {
    let cards = [
        {
            photo: require('../../assets/home/f-icon-1.png.webp'),
            title: 'Brand Identity',
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.'
        }, {
            photo: require('../../assets/home/f-icon-2.png.webp'),
            title: 'Online Marketing',
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.'
        }, {
            photo: require('../../assets/home/f-icon-3.png.webp'),
            title: 'Social Media',
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.'
        }
    ]
    let swiperElements = [
        {
            title: ' "They are the best" ',
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.',
            name: 'Chriss Turner',
            jobTitle: 'CEO Enterprise',
            photo: require('../../assets/home/people-5.jpg.webp')
        }, {
            title: ' "They are the best" ',
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.',
            name: 'Chriss Turner',
            jobTitle: 'CEO Enterprise',
            photo: require('../../assets/home/people-5.jpg.webp')
        }, {
            title: ' "They are the best" ',
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.',
            name: 'Chriss Turner',
            jobTitle: 'CEO Enterprise',
            photo: require('../../assets/home/people-5.jpg.webp')
        }, {
            title: ' "They are the best" ',
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus.',
            name: 'Chriss Turner',
            jobTitle: 'CEO Enterprise',
            photo: require('../../assets/home/people-5.jpg.webp')
        }
    ]
    let people = [
        require('../../assets/home/people-1.jpg.webp'),
        require('../../assets/home/people-2.jpg.webp'),
        require('../../assets/home/people-3.jpg.webp'),
        require('../../assets/home/people-4.jpg.webp'),
    ]
    let headerSwiper = [
        {
            title: 'Choose a powerful design for your Start-up',
            desc: 'Get your freebie template now!',
            photo: require('../../assets/home/slider-m-1.png.webp')
        }, {
            title: 'Choose a powerful design for your Start-up',
            desc: 'Get your freebie template now!',
            photo: require('../../assets/home/slider-m-1.png.webp')
        }, {
            title: 'Choose a powerful design for your Start-up',
            desc: 'Get your freebie template now!',
            photo: require('../../assets/home/slider-m-1.png.webp')
        }
    ]
    return (
        <>
            <Header />
            <main>
                <section className='swiper-area'>
                    <div>
                        <Swiper
                            autoplay={{ delay: 3000 }}
                            speed={2000}
                            pagination={{
                                clickable: true,
                                bulletCustomClass: 'custom-pagination'
                            }}
                            modules={[Pagination, Navigation]}
                            className="mySwiper"
                            navigation={
                                true
                            }
                            loop={true}
                            direction="vertical"
                            style={{
                                height: 800,
                                '--swiper-navigation-size': '15px',
                            }}
                        >
                            {headerSwiper.map((item) => {
                                return (
                                    <SwiperSlide className='swiper-element'
                                        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', marginBottom: 100 }}
                                        breakpoints={{
                                            200: {
                                                slidesOffsetBefore: 0,
                                                slidesOffsetAfter: 0
                                            },
                                        }}
                                    >
                                        <div className="item-main">
                                            <h1>{item.title}</h1>
                                            <h2>{item.desc}</h2>
                                            <button>Discover</button>
                                        </div>
                                        <img src={item.photo} alt="" />
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </section>
                <section className='feature-area'>
                    <img src={titleIcon} alt="" />
                    <p>discover the features</p>
                    <h1>We are young but bold</h1>
                    <div className='feature-container'>
                        {cards.map((item) => {
                            return (
                                <div className='feature-card'>
                                    <img src={item.photo} alt="feature-icon" />
                                    <h2>{item.title}</h2>
                                    <p>{item.desc}</p>
                                    <button className='more-btn'>Read More</button>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <section className='main-3d'>
                    <div className='swiper-container'>
                        <Swiper
                            autoplay={{ delay: 3000 }}
                            speed={2000}
                            slidesPerView={1}
                            spaceBetween={100}
                            loop={true}
                            modules={[Pagination]}
                            className="mySwiper"
                            style={{ width: '350px', margin: 0 }}
                        >
                            {swiperElements.map((item) => {
                                return (
                                    <SwiperSlide>
                                        <h3 className='swiper-title'>{item.title}</h3>
                                        <p className='swiper-desc'>{item.desc}</p>
                                        <div className='swiper-user'>
                                            <img className='swiper-user-img' src={item.photo} alt="" />
                                            <div className='swiper-user-text'>
                                                <p className='user-name'>{item.name}</p>
                                                <p className='user-job-title'>{item.jobTitle}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                    <div>
                        <div className='text-3d'>
                            <img src={titleIcon} alt="" />
                            <p className='discover-3d'>discover the feature</p>
                            <h2 className='title-3d'>We don’t hide, we stand tall in front of chalenge</h2>
                            <p className='desc-3d'>
                                Etiam nec odio vestibulum est mattis effic iturut magna.
                                Pellentesque sit am et tellus blandit. Etiam nec odio
                                vestibul.Cras ex mauris, ornare eget pretium sit amet,
                                dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor.
                                Donec elementum velit a orci facilisis rutrum. Nam convallis vel
                                erat id dictum. Sed ut risus in orci convallis viverra a eget nisi.
                                Aenean pellentesque elit vitae eros dignissim ultrices.
                            </p>
                        </div>
                        <div className='phone-3d'>
                            <img src={Phone} alt="" />
                        </div>
                    </div>
                </section>
                <section className='team-area'>
                    <div className='team-text'>
                        <img src={titleIcon} alt="" />
                        <p className='team-discover'>discover the features</p>
                        <h2 className='team-title'>We build a strong team of great people</h2>
                        <p className='team-desc'>
                            Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis.
                            Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a
                            orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus
                            in orci convallis viverra.
                        </p>
                        <div className='team-lists'>
                            <ul className='team-list'>
                                <li><a href="#">Nunc nec maximus dui</a></li>
                                <li><a href="#">Aenean pellentesque elit vitae</a></li>
                                <li><a href="#">Aenean pellentesque elit vitae</a></li>

                            </ul>
                            <ul className='team-list-secondary'>
                                <li><a href="#">Ex mauris, ornare eget pretium</a></li>
                                <li><a href="#">Cras ex mauris, ornare eget preti</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className='team-people'>
                        {people.map((item) => {
                            return (
                                <img src={item} alt="people" />
                            )
                        })}
                    </div>
                </section>
                <section className='get-in-touch-area-home'>
                    <Form />
                    <GetInTouch />
                </section>
                <section className='world-map'>
                    <img src={WorldMap} alt="world-map" />
                    <div className='map-container'>
                        <h3>Gibraltar Office</h3>
                        <div className='map-container-text'>
                            <p>
                                Casemates Square, no253
                                <br />
                                United kingdom
                            </p>
                            <h4>
                                <a href="telto:+453678 9283 559">+453678 9283 559</a>
                                <a href="mailto:contact@template.com">contact@template.com</a>
                            </h4>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
