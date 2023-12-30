import React, { FC } from 'react';
import './Home.css';

interface HomeProps { }

const Home: FC<HomeProps> = () => (
  <div>
    <div className="container" id="intro_section">
      <div className="row mt-5">
        <div className="col-6">
          <div>
            <div id="textbox" className="p-3 rounded">
              <h2 id="intro_title">Welcome,</h2>
              <p id="intro_text">
                My name is Anthony DeArmas  and I'm a full stack software engineer based in New York City.
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
    </div>


    <div className="container mb-5" id="about_me">
      <div className="row">
        <div className="col-sm-12 col-lg-5">
          <img src="/img/abpic.jpg" alt="About" id="about_img" className="img-fluid rounded" />
        </div>
        <div className="col-sm-12 col-lg-7" id="about_me_text">
          <h1 className="text-center mt-3">About me</h1>
          <hr />
          <h4>
            I'm a software engineer based in New York City. I enjoy creating web applications that are both intuitive and efficient.
            I have experience with JavaScript, TypeScript, React, Node.js, Express.js, PostgreSQL.
            I'm always looking to learn new technologies and improve my skills as a developer.
          </h4>
        </div>
      </div>
    </div>

  </div>
);

export default Home;
