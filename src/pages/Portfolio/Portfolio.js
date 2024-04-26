import "../Portfolio/Portfolio.css";
import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from "../../components/Header/Header";
import MsP1 from '../../assets/portfolio/ms-p-1.jpg.webp';
import MsP2 from '../../assets/portfolio/ms-p-2.jpg.webp';
import MsP3 from '../../assets/portfolio/ms-p-3.jpg.webp';
import MsP4 from '../../assets/portfolio/ms-p-4.jpg.webp';
import MsP5 from '../../assets/portfolio/ms-p-5.jpg.webp';
import MsP6 from '../../assets/portfolio/ms-p-6.jpg.webp';
import MsP7 from '../../assets/portfolio/ms-p-7.jpg.webp';
import MsP8 from '../../assets/portfolio/ms-p-8.jpg.webp';
import MsP9 from '../../assets/portfolio/ms-p-9.jpg.webp';
import MsP10 from '../../assets/portfolio/ms-p-10.jpg.webp';
import DescSection from '../../components/DescSection/DescSection';

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState('all');

    const handleClickCategory = (category) => {
        setActiveCategory(category);
    };

    let classNames = [
        'first-image',
        'second-image',
        'third-image',
        'fourth-image',
        'fifth-image',
        'sixth-image',
        'seventh-image',
        'eighth-image',
        'ninth-image',
        'tenth-image'
    ]
    let images = [
        MsP1,
        MsP2,
        MsP3,
        MsP4,
        MsP5,
        MsP6,
        MsP7,
        MsP8,
        MsP9,
        MsP10
    ]

    return (
        <>
            <Header />
            <DescSection mainTextChange={'Blog'} descTextChange={'Read the news'} />
            <main className='portfolio-main'>
                <section className='portfolio-sec'>
                    <ul className='change-block'>
                        <li onClick={() => handleClickCategory('all')} className={activeCategory === 'all' ? 'active' : ''}>All</li>
                        <li onClick={() => handleClickCategory('brand')} className={activeCategory === 'brand' ? 'active' : ''}>Brand identity</li>
                        <li onClick={() => handleClickCategory('design')} className={activeCategory === 'design' ? 'active' : ''}>Design</li>
                        <li onClick={() => handleClickCategory('architecture')} className={activeCategory === 'architecture' ? 'active' : ''}>Architecture</li>
                        <li onClick={() => handleClickCategory('photography')} className={activeCategory === 'photography' ? 'active' : ''}>Photography</li>
                    </ul>
                    <div>
                        <div className={`${activeCategory}-blocks`}>
                            {images.map((item, index) => {
                                if (
                                    (activeCategory === 'all') ||
                                    (activeCategory === 'brand' && index < 5) ||
                                    (activeCategory === 'design' && index >= 5 && index <= 9) ||
                                    (activeCategory === 'architecture' && index >= 6) ||
                                    (activeCategory === 'photography' && (index === 0 || index === 1 || index === 3 || index === 4))
                                ) {
                                    return (
                                        <img key={index} className={classNames[index]} src={item} alt="" />
                                    )
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
