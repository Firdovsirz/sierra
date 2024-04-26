import "../Footer/Footer.css";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';
import ins1 from "../../assets/ins-1.jpg.webp";
import ins2 from "../../assets/ins-2.jpg.webp";
import ins3 from "../../assets/ins-3.jpg.webp";
import ins4 from "../../assets/ins-4.jpg.webp";
import ins5 from "../../assets/ins-5.jpg.webp";
import ins6 from "../../assets/ins-6.jpg.webp";
import ins7 from "../../assets/ins-7.jpg.webp";
import ins8 from "../../assets/ins-8.jpg.webp";
import footerLogo from "../../assets/footer-logo.png.webp";

export default function Footer() {
    const [email, setEmail] = useState('');

    const serviceID = 'service_mqazw6r';
    const templateID = 'template_jq3vsoq';
    const userID = 'vAz4kbcoT93FNCSK3';

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(serviceID, templateID, event.target, userID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    text: "Subscribed successfully!",
                });
            }, (error) => {
                console.log(error.text);
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    }
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
                <form action="" onSubmit={handleSubmit}>
                    <input className='footer-email-input' type="text" placeholder='Your e-mail address here' name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <button type="submit" className='footer-subs-btn'>Subscribe</button>
                </form>
            </div>
        </footer>
    )
}
