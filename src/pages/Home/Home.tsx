import React, { FC } from 'react';
import './Home.css';

interface HomeProps { }

const Home: FC<HomeProps> = () => (
  <div className="container">
    <div className="row mt-5">
      <div className="col-6">
        <div id="textbox" className="p-3 rounded">
          <h2 id="intro_title">Welcome,</h2>
          <p id="intro_text">
            My name is Anthony DeArmas and I'm a full stack software engineer based in New York City.
            I'm passionate about creating web applications that is both intuitive and efficient.
            Here you can find some of my projects and learn more about me. Click the icons below to
            visit my GitHub and LinkedIn profiles, or click the resume icon to view my resume.
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
