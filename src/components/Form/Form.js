import "../Form/Form.css";
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

export default function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const serviceID = 'service_63j80kb';
    const templateID = 'template_h4qou3e';
    const userID = 'vAz4kbcoT93FNCSK3';

    const handleSubmit = (event) => {
        event.preventDefault();
        emailjs.sendForm(serviceID, templateID, event.target, userID)
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: "success",
                    text: "Email sent successfully!",
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
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">
                        <input type="text" name="name" placeholder='Name' value={name} onChange={(event) => setName(event.target.value)} />
                    </label>
                    <label htmlFor="email">
                        <input type="email" name="email" placeholder='Email' value={email} onChange={(event) => setEmail(event.target.value)} />
                    </label>
                </div>
                <label htmlFor="subject">
                    <input type="text" name="subject" placeholder='Subject*' value={subject} onChange={(event) => setSubject(event.target.value)} />
                </label>
                <label htmlFor="message">
                    <textarea name="message" cols="30" rows="10" placeholder='Message' value={message} onChange={(event) => setMessage(event.target.value)}></textarea>
                </label>
                <button className='form-btn' type="submit">
                    Send
                </button>
            </form>
        </>
    )
}