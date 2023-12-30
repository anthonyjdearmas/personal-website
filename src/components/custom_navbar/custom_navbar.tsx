import React, { FC, useState, useRef, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './custom_navbar.css';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

interface CustomNavbarProps { }

const CustomNavbar: FC<CustomNavbarProps> = () => {
  const [activeLink, setActiveLink] = useState('home');


  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isHome = window.location.pathname === '/';
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
      const isTop = window.scrollY === 0;
      if (isHome && isBottom) {
        setActiveLink('about');
      } else if (isHome && isTop) {
        setActiveLink('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    const isHome = window.location.pathname === '/';
    let mobileMode = window.innerWidth <= 900;

    if (link === 'about') {
      if (isHome) {
        if (mobileMode) {
          const aboutMeTextElement = document.getElementById('about_me');
          if (aboutMeTextElement) {
            console.log('scrolling');
            aboutMeTextElement.scrollIntoView({ behavior: 'smooth' });
          }
        } else {
          window.scrollTo({
            top: document.documentElement.scrollHeight,
            behavior: 'smooth',
          });
        }
      } else {
        navigate('/#about_me');
        setTimeout(() => {
          if (mobileMode) {
            const aboutMeTextElement = document.getElementById('about_me');
            if (aboutMeTextElement) {
              console.log('scrolling');

              aboutMeTextElement.scrollIntoView({ behavior: 'smooth' });
            }
          } else {
            window.scrollTo({
              top: document.documentElement.scrollHeight,
              behavior: 'smooth',
            });
          }
        }, 1);
      }
    } else if (link === 'home') {
      if (!isHome) {
        navigate('/');
      }
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      navigate('/projects');
    }
  };

  return (
    <Navbar expand="lg" variant="dark" id="navbar_bg" style={{ position: 'sticky', top: 0, zIndex: 100 }}>
      <Navbar.Brand href="/">
        <h1 id="navbar_title"><strong>Anthony DeArmas</strong></h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
      <Navbar.Collapse id="navbarTogglerDemo02">
        <Nav className="ms-auto" id="nav_bundle">
          <Nav.Item className={activeLink === 'home' ? 'active' : ''}>
            <Nav.Link id="nav-link1" onClick={() => handleLinkClick('home')}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={activeLink === 'about' ? 'active' : ''}>
            <Nav.Link id="nav-link2" onClick={() => handleLinkClick('about')}>
              About Me
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={activeLink === 'projects' ? 'active' : ''}>
            <Nav.Link as={Link} to="/projects" id="nav-link3" onClick={() => handleLinkClick('projects')}>
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="" target="_blank" id="nav-link4">
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
