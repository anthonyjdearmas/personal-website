import React, { FC } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './custom_navbar.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row } from 'react-bootstrap';

interface CustomNavbarProps {}

const CustomNavbar: FC<CustomNavbarProps> = () => (
<Navbar expand="lg" bg="primary" variant="dark" style={{ backgroundColor: 'rgba(0, 0, 0, 0.075)' }}>
  <Navbar.Brand href="index.html">
    <h1 id="navbar_title"><strong>Anthony DeArmas</strong></h1>
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarTogglerDemo02" />
  <Navbar.Collapse id="navbarTogglerDemo02">
    <Nav className="ms-auto" id="nav_bundle">
      <Nav.Item className="active">
        <Nav.Link className="scroll home" href="#homepage" id="nav-link1">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="scroll about" href="#aboutme" id="nav-link2">
          About Me
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={() => window.location.href='/projects'} id="nav-link3">
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

export default CustomNavbar;