import React, { FC } from 'react';
import './Home.css';

interface HomeProps { }

const Home: FC<HomeProps> = () => (
  <div className="container">
    <div className="row mt-5">
      <div className="col-6">
        <div id="textbox" className="p-5 rounded">
          <h2 id="intro_title">Welcome,</h2>
          <p id="intro_text">
            My name is Anthony DeArmas. I made this website,
            so you can learn more about me and my projects. I am
            interested in creating web applications, databases
            and artifical intellgience. Below you can find links
            to my Github, LinkedIn, and resume.
          </p>
          <div className="container text-center" style={{ height: '100px' }}>
            <div className="row">
              <div>
                <a href="https://github.com/anthonyjdearmas" target="_blank">
                  <img id="icon-git" className="img-fluid mt-3 icon" src="img/icons/github.png" alt="GitHub Icon" />
                </a>
                <a href="https://www.linkedin.com/in/ajd249/" target="_blank">
                  <img id="icon-lnki" className="img-fluid mt-3 icon" src="img/icons/linkedin.png" alt="LinkedIn Icon" />
                </a>
                <a href="pdf/cs_newresume.pdf" target="_blank">
                  <img id="icon-res" className="img-fluid mt-3 icon" src="img/icons/resume.png" alt="Resume Icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <img src="/img/intro.jpg" alt="Intro" id="intro_img" />
      </div>
    </div>
  </div>
);

export default Home;
