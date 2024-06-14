import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../assets/logonew.png';
import { Link } from 'react-scroll';
import menu_icon from '../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY>50?setSticky(true): setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu? setMobileMenu(false) : setMobileMenu(true);
  }; 

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="" className='logo' style={{ width: '50px' }} />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li><Link to='Hero' smooth={true} offset={0} duration={500}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-160} duration={500}>Service</Link></li>
        <li><Link to='testimonals' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
        <li><Link to='contact' smooth={true} offset={-260} duration={500} className='btn'>Contact Us</Link></li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
      
    </nav>
    
  );
};

export default Navbar;
