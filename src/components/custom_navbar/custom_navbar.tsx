import React, { FC, useState, useRef } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './custom_navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

interface CustomNavbarProps { }

const CustomNavbar: FC<CustomNavbarProps> = () => {
  const [activeLink, setActiveLink] = useState('home');
  const aboutRef = useRef<HTMLDivElement>(null);
  let onAboutMe = false;

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
    if (link === 'about' && aboutRef.current) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
      onAboutMe = true;
    } else {
      onAboutMe = false;
    }

    if (link === 'home' && !onAboutMe) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
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
      <div ref={aboutRef} />
    </Navbar>
  );
};

export default CustomNavbar;
