import React from 'react';
import "../Contact/Contact.css"
import Form from "../../components/Form/Form";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import GetInTouch from '../../components/GetInTouch/GetInTouch';
import DescSection from "../../components/DescSection/DescSection";


export default function Contact() {
    return (
        <>
            <Header />
            <DescSection mainTextChange={'Contact'} descTextChange={'Get in touch'} />
            <main>
                <section className='get-in-touch-area'>
                    <Form />
                    <GetInTouch />
                </section>
                <section className='contact-map'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9581853.80133783!2d-14.999798786966426!3d54.10353482830763!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2zQmlybGXFn2lrIEtyYWxsxLFr!5e0!3m2!1str!2saz!4v1711198891090!5m2!1str!2saz"
                        style={{ border: 0, width: "100%", height: 600 }}
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                        title="uk"></iframe>
                </section>
            </main>
            <Footer />
        </>
    )
}
