import "../Aside/Aside.css";
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import addImage from "../../assets/blog/add.jpg.webp";
import quoteIcon from "../../assets/blog/quote-icon.png.webp";


export default function Aside() {
    const [instaPhoto, setInstaPhoto] = useState([
        {
            photo: require('../../assets/ins-1.jpg.webp')
        }, {
            photo: require('../../assets/ins-2.jpg.webp')
        }, {
            photo: require('../../assets/ins-3.jpg.webp')
        }, {
            photo: require('../../assets/ins-4.jpg.webp')
        }, {
            photo: require('../../assets/ins-5.jpg.webp')
        }, {
            photo: require('../../assets/ins-6.jpg.webp')
        }
    ]);
    return (
        <>
            <aside className='blog-additional-infos'>
                <form action="" className='form'>
                    <label htmlFor="search">
                        <input type="text" placeholder='Search' />
                        <SearchIcon style={{ color: "gray", fontSize: 20 }} />
                    </label>
                </form>
                <div className='categories'>
                    <h4>Categories</h4>
                    <ul>
                        <li><a href="#">Vestibulum maximus</a></li>
                        <li><a href="#">Nisi eu lobortis pharetra</a></li>
                        <li><a href="#">Orci quam accumsan</a></li>
                        <li><a href="#">Auguen pharetra massa</a></li>
                        <li><a href="#">Tellus ut nulla</a></li>
                        <li><a href="#">Etiam egestas viverra</a></li>
                    </ul>
                </div>
                <div className='blog-instagram'>
                    <h4>Instagram</h4>
                    <div className='instagram-photos'>
                        {instaPhoto.map((item) => {
                            return (
                                <img src={item.photo} alt="instagram" />
                            )
                        })}
                    </div>
                </div>
                <div className='tags'>
                    <h4>Tags</h4>
                    <ul>
                        <li><a href="#">branding</a></li>
                        <li><a href="#">identity</a></li>
                        <li><a href="#">design</a></li>
                        <li><a href="#">inspiration</a></li>
                        <li><a href="#">web design</a></li>
                        <li><a href="#">video</a></li>
                        <li><a href="#">photography</a></li>
                    </ul>
                </div>
                <div className='quote'>
                    <h4>Quote</h4>
                    <img src={quoteIcon} alt="quoteIcon" />
                    <p>
                        Vivamus in urna eu enim porttitor <br />
                        consequat. Proin vitae pulvinar libero. <br />
                        Proin ut hendrerit metus. Aliquam erat <br />
                        volut pat. Donec fermen tum convallis.
                    </p>
                </div>
                <div className='add'>
                    <h4>Add</h4>
                    <img src={addImage} alt="" />
                </div>
            </aside>
        </>
    )
}
