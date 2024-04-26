import React from 'react'
import "../../components/GetInTouch/GetInTouch.css";
import titleIcon from "../../assets/contact/title-icon.png (1).webp";


export default function GetInTouch() {
    return (
        <>
            <div className='get-in-touch-desc'>
                <img src={titleIcon} alt="" />
                <h6>say hello</h6>
                <h2>Get in touch, send us <br /> and e-mail or call us</h2>
                <p>
                    Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. <br />
                    Nunc nec maximus dui, vel suscipit dolor. Donec elementum velit a <br />
                    orci facilisis rutrum.
                </p>
                <a href="tel:+452373 95593 232" className='call-text'>Call us now</a>
                <a href="tel:+452373 95593 232" className='tel-number'>+452373 95593 232</a>
            </div>
        </>
    )
}
