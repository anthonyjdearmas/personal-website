import React, { FC, useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './custom_navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

interface CustomNavbarProps {}

const CustomNavbar: FC<CustomNavbarProps> = () => {
  const [activeLink, setActiveLink] = useState('home');

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  return (
    <Navbar expand="lg" bg="primary" variant="dark">
      <Navbar.Brand href="index.html">
        <h1 id="navbar_title"><strong>Anthony DeArmas</strong></h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
      <Navbar.Collapse id="navbarTogglerDemo02">
        <Nav className="ms-auto" id="nav_bundle">
          <Nav.Item className={activeLink === 'home' ? 'active' : ''}>
            <Nav.Link as={Link} to="/home" id="nav-link1" onClick={() => handleLinkClick('home')}>
              Home
            </Nav.Link>
          </Nav.Item>
          <Nav.Item className={activeLink === 'about' ? 'active' : ''}>
            <Nav.Link as={Link} to="/about" id="nav-link2" onClick={() => handleLinkClick('about')}>
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
