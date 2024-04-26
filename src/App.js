import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Home from "./pages/Home/Home.js";
import Blog from "../src/pages/Blog/Blog.js";
import About from "../src/pages/About/About.js";
import { Route, Routes } from 'react-router-dom';
import Contact from "../src/pages/Contact/Contact.js";
import Services from "../src/pages/Services/Services.js";
import Portfolio from '../src/pages/Portfolio/Portfolio.js';
import BlogDetails from "./pages/BlogDetails/BlogDetails.js";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      delay: 200,
      duration: 800,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/blog-details' element={<BlogDetails />}></Route>
        <Route path='/services' element={<Services />} />
        <Route path='/portfolio' element={<Portfolio />} />
      </Routes>
    </>
  );
}

export default App;
