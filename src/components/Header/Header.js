import "../Header/Header.css";
import toggleMenu from "./toggleMenu";
import { Link } from "react-router-dom";
import closeDropdown from "./closeDropdown";
import toggleDropdown from "./toggleDropdown";
import { useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import logo from "../../assets/home/logo.png.webp";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 200) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <>
      <header className='main-header'>
        <div className='hamburger-menu-container'>
          <div>
            <ul className="burger-pages">
              <li><Link to={'/'}>HOME</Link></li>
              <li><Link to={'/about'}>ABOUT US</Link></li>
              <li><Link to={'/services'}>SERVICES</Link></li>
              <li><Link to={'/blog-details'}>BLOG DETAILS</Link></li>
              <li><Link to={'/blog'}>BLOG</Link></li>
              <li><Link to={'/contact'}>CONTACT</Link></li>
            </ul>
          </div>
        </div>
        <nav className={isSticky ? 'navbar sticky' : 'navbar'}>
          <Link to={'/'}><img src={logo} alt="" /></Link>
          <div className='hamburger-icon' onClick={toggleMenu}>
            <div className={'ham-menu first-line'} ></div>
            <div id='secondLine'></div>
            <div className={'ham-menu third-line'}></div>
          </div>
          <div className='page-links'>
            <ul>
              <li><Link to={'/'} className={isActive('/')}>HOME</Link></li>
              <li><Link to={'/about'} className={isActive('/about')}>ABOUT US</Link></li>
              <li><Link to={'/services'} className={isActive('/services')}>SERVICES</Link></li>
              <li><Link to={'/portfolio'} className={isActive('/portfolio')}>PORTFOLIO</Link></li>
              <li className="dropdown">
                <Link to={'/blog'} onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>BLOG</Link>
                <ArrowDropDownIcon className="dropdown-icon" style={{ color: 'white' }} />
                <ul className="dropdown-desc" onMouseEnter={toggleDropdown} onMouseLeave={closeDropdown}>
                  <li><Link to={'/blog'}>BLOG</Link></li>
                  <li><Link to={'/blog-details'}>BLOG DETAILS</Link></li>
                </ul>
              </li>
              <li><Link to={'/contact'} className={isActive('/contact')}>CONTACT</Link></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
