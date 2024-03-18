import React from 'react'
import "../Footer/Footer.css"
import footerBg from "../../assets/footer-bg.jpg.webp"
import footerLogo from "../../assets/footer-logo.png.webp"
import ins1 from "../../assets/ins-1.jpg.webp"
import ins2 from "../../assets/ins-2.jpg.webp"
import ins3 from "../../assets/ins-3.jpg.webp"
import ins4 from "../../assets/ins-4.jpg.webp"
import ins5 from "../../assets/ins-5.jpg.webp"
import ins6 from "../../assets/ins-6.jpg.webp"
import ins7 from "../../assets/ins-7.jpg.webp"
import ins8 from "../../assets/ins-8.jpg.webp"

export default function Footer() {
    return (
        <footer>
            <div className='footer-company-desc'>
                <img src={footerLogo} alt="Company-logo" className='footer-logo' />
                <p className='company-desc'>Cras ex mauris, ornare eget pretium sit amet, <br /> dignissim et turpis. Nunc nec maximus dui, vel <br /> suscipit dolor. Donec elementum velit a orci <br /> facilisis rutrum.</p>
            </div>
            <div>
                <h3 className='ins'>Instagram</h3>
                <ul className='ins-images'>
                    <li><a href="#"><img src={ins1} alt="" /></a></li>
                    <li><a href="#"><img src={ins2} alt="" /></a></li>
                    <li><a href="#"><img src={ins3} alt="" /></a></li>
                    <li><a href="#"><img src={ins4} alt="" /></a></li>
                    <li><a href="#"><img src={ins5} alt="" /></a></li>
                    <li><a href="#"><img src={ins6} alt="" /></a></li>
                    <li><a href="#"><img src={ins7} alt="" /></a></li>
                    <li><a href="#"><img src={ins8} alt="" /></a></li>
                </ul>
            </div>
            <div className='footer-subscription'>
                <h3 className='subs'>Subscribe to newsletter</h3>
                <input className='footer-email-input' type="text" placeholder='Your e-mail address here' />
                <button className='footer-subs-btn'>Subscribe</button>
            </div>
        </footer>
    )
}
