import React, { useState } from 'react';
import "../BlogDetails/BlogDetails.css";
import XIcon from '@mui/icons-material/X';
import Aside from "../../components/Aside/Aside";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import NewsImage from "../../assets/blog/blog-1.jpg.webp";
import PinterestIcon from '@mui/icons-material/Pinterest';
import handleSubmit from "../BlogDetails/AddCommentFunction";
import AuthorPhoto from "../../assets/blog/blog-author.png.webp";
import DescSection from '../../components/DescSection/DescSection';

export default function BlogDetails() {
  const [isReplyFormVisible, setIsReplyFormVisible] = useState(false);

  const handleReplyClick = () => {
    setIsReplyFormVisible(!isReplyFormVisible);
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }
  let comments = [
    {
      photo: require('../../assets/blog/comment-1.png.webp'),
      name: 'Sophia Williams',
      date: 'Oct 29, 2017',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec ele mentum id, suscipit id nulla. Nulla sit amet luctus doloructus. Fusce eleifend purus vel eros'
    }, {
      photo: require('../../assets/blog/comment-2.png.webp'),
      name: 'Gabriel Smith',
      date: 'Oct 29, 2017',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec ele mentum id, suscipit id nulla. Nulla sit amet luctus doloructus. Fusce eleifend purus vel eros'
    }
  ];
  let numberOfComments = comments.length;
  return (
    <>
      <Header />
      <main className='blg-details'>
        <DescSection mainTextChange={'Blog'} descTextChange={'Read the news'} />
        <section className='blog-det-main'>
          <div className='blog-det-all'>
            <div className='news-container'>
              <div className='news-image'>
                <img src={NewsImage} alt="" />
                <div className='publish-date'>
                  <h4>29</h4>
                  <h5>October, 27</h5>
                </div>
              </div>
              <div className='news-text'>
                <h2 className='news-title'>Let us introduce you the best apps</h2>
                <p className='news-name'><a href="#">By Lore Papp-Diena | Design</a></p>
                <p className='news-desc'>
                  Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio ves-
                  tibul. Etiam nec odio vestibulum est mattis effic iturut magna. Pellentesque sit am et tellus blandit. Etiam nec odio
                  vestibul.
                </p>
                <p className='news-desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id,
                  suscipit id nulla. Nulla sit amet luctus dolor. Etiam finibus consequat ante ac congue. Quisque porttitor porttitor tempus.
                  Donec maximus ipsum non ornare vestibulum. Sed libero nibh, feugiat at enim id, bibendum sollicitudin arcu.
                  Aliquam elit nibh, finibus eget mauris non, pretium vehicula ipsum. Class aptent taciti sociosqu ad litora torquent
                  per conubia nostra, per inceptos himenaeos. Aenean metus metus, porttitor ac bibendum sit amet, mattis non
                  erat. Duis libero eros, vehicula sit amet velit id, mattis venenatis massa.
                </p>
                <p className='news-desc'>
                  Cras ex mauris, ornare eget pretium sit amet, dignissim et turpis. Nunc nec maximus dui, vel suscipit dolor. Donec
                  elementum velit a orci facilisis rutrum. Nam convallis vel erat id dictum. Sed ut risus in orci convallis viverra a eget
                  nisi. Aenean pellentesque elit vitae eros dignissim ultrices. Quisque laoreet vel risus et luctus. Fusce eleifend
                  purus vel eros cursus imperdiet. Aliquam lacinia dolor sollicitudin pretium interdum. Nam velit dolor, eleifend eget
                  felis ac, finibus accumsan dui. Fusce quis magna urna.
                </p>
                <div className='news-share'>
                  <h4>Share</h4>
                  <ul className='social-medias'>
                    <li><a href="#"><PinterestIcon style={{ fontSize: 15 }} /></a></li>
                    <li><a href="#"><FacebookIcon style={{ fontSize: 15 }} /></a></li>
                    <li><a href="#"><XIcon style={{ fontSize: 15 }} /></a></li>
                    <li><a href="#"><LinkedInIcon style={{ fontSize: 15 }} /></a></li>
                  </ul>
                </div>
              </div>
              <div className='news-author'>
                <img src={AuthorPhoto} alt="" />
                <div>
                  <h3 className='author-name'>Michael Smith, <span className='author-job-title'>Author</span></h3>
                  <p className='author-desc'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur leo est, feugiat nec elementum id,
                    suscipit id nulla. Nulla sit amet luctus doloructus. Fusce eleifend purus vel eros
                  </p>
                </div>
              </div>
            </div>
            <div className='blog-comments'>
              <h3>Comments ({numberOfComments})</h3>
              <div className='comments'>
                {comments.map((item, index) => {
                  return (
                    <div key={index} className='comment-container'>
                      <div className='comment-main'>
                        <img className='comment-image' src={item.photo} alt="" />
                        <div className='comment-text'>
                          <div className='comment-profile'>
                            <h4 className='comment-name'>{item.name}</h4>
                            <p className='comment-date'>{item.date}</p>
                          </div>
                          <div className='comment-desc-container'>
                            <p className='comment-desc'>{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className='add-comment'>
                <h3>Leave a comment</h3>
                <form className='blg-det-form' onSubmit={handleSubmit}>
                  <div>
                    <label htmlFor="name">
                      <input className='name-input' type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Name' required />
                    </label>
                    <label htmlFor="email">
                      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder='Email' required />
                    </label>
                  </div>
                  <label htmlFor="subject">
                    <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder='Subject*' />
                  </label>
                  <label htmlFor="message">
                    <textarea name="message" value={formData.message} onChange={handleChange} cols="30" rows="10" placeholder='Message' required />
                  </label>
                  <button className='form-btn' type="submit">
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
          <Aside />
        </section>
      </main>
      <Footer />
    </>
  )
}
