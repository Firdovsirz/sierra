import "../Blog/Blog.css";
import React, { useState } from 'react';
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import DescSection from "../../components/DescSection/DescSection";


export default function Blog() {
    const [card, setCard] = useState([
        {
            photo: require('../../assets/blog/blog-1.jpg.webp'),
            day: '29',
            monthYear: 'OCtober, 2017',
            title: 'Let us introduce you the best apps',
            designer: "By Lore Papp-Dinea Design",
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.'
        }, {
            photo: require('../../assets/blog/blog-2.jpg.webp'),
            day: '29',
            monthYear: 'OCtober, 2017',
            title: 'Let us introduce you the best apps',
            designer: "By Lore Papp-Dinea Design",
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.'
        }, {
            photo: require('../../assets/blog/blog-3.jpg.webp'),
            day: '29',
            monthYear: 'OCtober, 2017',
            title: 'Let us introduce you the best apps',
            designer: "By Lore Papp-Dinea Design",
            desc: 'Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.'
        }
    ]);
    return (
        <>
            <Header />
            <DescSection mainTextChange={'Blog'} descTextChange={'Read the news'} />
            <main className='blog-main'>
                <section className='blog-cards'>
                    {card.map((item) => {
                        return (
                            <div className='blog-card'>
                                <img src={item.photo} alt="card-bg" />
                                <div className='blog-date'>
                                    <div>29</div>
                                    <div>October, 2017</div>
                                </div>
                                <div className='blog-text'>
                                    <h3 className='card-title'>{item.title}</h3>
                                    <p className='card-design'>{item.designer}</p>
                                    <p className='card-desc'>{item.desc}</p>
                                    <button className='read-more-btn'>Read More</button>
                                </div>
                            </div>
                        )
                    })}
                </section>
                <Aside />
            </main>
            <Footer />
        </>
    )
}
