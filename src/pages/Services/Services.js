import "../Services/Services.css";
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import Accordion from '@mui/material/Accordion';
import Typography from '@mui/material/Typography';
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import titleIcon from "../../assets/services/title-icon.png.webp";
import DescSection from "../../components/DescSection/DescSection";

export default function Services() {
    const [accordionDetails, setAccordionDetails] = useState([
        {
            title: "Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis",
            desc: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. "
        }, {
            title: "Sed dapibus nunc vulputate mi fringilla, eu consequat",
            desc: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit."
        }, {
            title: "Curabitur eu libero sed erat viverra gravida at id ex",
            desc: "Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit."
        }
    ])
    const [cards, setCards] = useState([
        {
            photo: require('../../assets/services/f-icon-1.png.webp'),
            title: "Brand Identity",
            desc: "Brand Identity Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.",
        }, {
            photo: require('../../assets/services/f-icon-2.png.webp'),
            title: "Online Marketing",
            desc: "Brand Identity Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.",
        }, {
            photo: require('../../assets/services/f-icon-3.png.webp'),
            title: "Social Media",
            desc: "Brand Identity Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.",
        }, {
            photo: require('../../assets/services/f-icon-4.png.webp'),
            title: "Video Support",
            desc: "Brand Identity Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.",
        }, {
            photo: require('../../assets/services/f-icon-5.png.webp'),
            title: "Fast Support",
            desc: "Brand Identity Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.",
        }, {
            photo: require('../../assets/services/f-icon-6.png.webp'),
            title: "Download test",
            desc: "Brand Identity Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio vestibul.",
        }
    ])
    return (
        <>
            <Header />
            <DescSection mainTextChange={'Services'} descTextChange={'See what we do best'} />
            <main className='service-main-all'>
                <section className='service-cards'>
                    <div>
                        {cards.map((item) => {
                            return (
                                <div className='card'>
                                    <img src={item.photo} alt="" />
                                    <h3 className='card-title'>{item.title}</h3>
                                    <p className='card-desc'>{item.desc}</p>
                                    <button className='card-btn'>Read More</button>
                                </div>
                            )
                        })}
                    </div>
                </section>
                <div className='horizontal-line' />
                <section className='service-main'>
                    <img src={titleIcon} alt="titleIcon" />
                    <p className='service-discover'>discover the features</p>
                    <h3>
                        Simple solutions for <br />
                        complicated times
                    </h3>
                    <p className='service-main-text'>
                        Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et <br />
                        tellus blandit. Etiam nec odio vestibul.Cras ex mauris, ornare eget pretium sit <br />
                        amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec <br />
                        elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut <br />
                        risus in orci convallis viverra a eget nisi. Aenean pellentesque elit vitae eros <br />
                        dignissim ultrices.
                    </p>
                    <div>
                        {accordionDetails.map((item, index) => {
                            return (
                                <Accordion
                                    defaultExpanded={index === 0}
                                    sx={{
                                        border: 'none',
                                        marginBottom: "20px",
                                        // width: "550px",
                                        color: "#fff",
                                        fontWeight: 500
                                    }}
                                >
                                    <AccordionSummary
                                        expandIcon={<AddIcon style={{ color: "#fff" }} />}
                                        aria-controls="panel1-content"
                                        id="panel1-header"
                                        className='accordion-title'
                                    >
                                        <Typography>{item.title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography className='accordion-desc'>{item.desc}</Typography>
                                    </AccordionDetails>
                                </Accordion>
                            )
                        })}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}
