import React, { FC } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

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
                My name is Anthony DeArmas and I'm a full stack software engineer based in New York City.
                Here you can find some of my projects and learn more about me. Click the icons below to
                visit my GitHub and LinkedIn profiles, or click the resume icon to view my resume.
              </p>
              <div className="container text-center" style={{ height: '100px' }}>
                <div className="row">
                  <div>
                    <Link to="https://www.linkedin.com/in/anthonyjdearmas/" target="_blank">
                      <img id="icon-git" className="img-fluid mt-3 icon" src="img/icons/github.png" alt="GitHub Icon" />
                    </Link>

                    <Link to="https://www.linkedin.com/in/anthonyjdearmas/" target="_blank">
                      <img id="icon-lnki" className="img-fluid mt-3 icon" src="img/icons/linkedin.png" alt="LinkedIn Icon" />
                    </Link>

                    <Link to="/resume">
                      <img id="icon-res" className="img-fluid mt-3 icon" src="img/icons/resume.png" alt="Resume Icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <img src="/img/intro.jpg" alt="Intro" id="intro_img" />
          </div>
        </div>
      </div>
    </div>


    <div className="container mb-5" id="intro_section_mobile">
      <div className="row mt-5">
        <div className="col-12">
          <div>
            <div id="textbox_mobile" className="p-3 rounded">
              <img src="/img/intro.jpg" alt="Intro" id="intro_img_mobile" className="img-circle rounded-circle" />

              <h2 id="intro_title_mobile">Welcome,</h2>
              <p id="intro_text_mobile">
                My name is Anthony DeArmas  and I'm a full stack software engineer based in New York City.
                I'm passionate about creating web applications that is both intuitive and efficient.
                Here you can find some of my projects and learn more about me. Click the icons below to
                visit my GitHub and LinkedIn profiles, or click the resume icon to view my resume.
              </p>
              <div className="container text-center" style={{ height: '100px' }}>
                <div className="row">
                  <div>
                    <Link to="https://www.linkedin.com/in/anthonyjdearmas/" target="_blank">
                      <img id="icon-git" className="img-fluid mt-3 icon_mobile" src="img/icons/github.png" alt="GitHub Icon" />
                    </Link>

                    <Link to="https://www.linkedin.com/in/anthonyjdearmas/" target="_blank">
                      <img id="icon-lnki" className="img-fluid mt-3 icon_mobile" src="img/icons/linkedin.png" alt="LinkedIn Icon" />
                    </Link>

                    <Link to="/resume">
                      <img id="icon-res" className="img-fluid mt-3 icon_mobile" src="img/icons/resume.png" alt="Resume Icon" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="container mb-5" id="about_me">
      <div className="row">
        <div className="col-sm-12 col-lg-5" id="about_me_text" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="/img/abpic.jpg" alt="About" id="about_img" className="img-fluid rounded" />
        </div>
        <div className="col-sm-12 col-lg-7" id="about_me_text">
          <h2 className="text-center mt-3">About Me</h2>
          <hr />
          <p>
            I'm a recent graduate from Cornell University with a deep passion for software development.
            Throughout my academic journey, Cornell provided not just a degree but a robust foundation for
            excellence in the tech world.
          </p>
          <h3 className="mt-5"><i>Teaching and Learning at iD Tech</i></h3>
          <p>
            During college, I found fulfillment in teaching programming at iD Tech, where I connected with students
            aged 10-17. This experience enhanced my communication skills and laid the groundwork for translating
            complex concepts into accessible lessons.
          </p>
          <h3><i>Internship to Full-Time Role at FTI Consulting</i></h3>
          <p>
            Post-graduation, my journey led me to FTI Consulting, where an enriching full-stack software developer internship
            paved the way for a full-time role. Collaborating on impactful projects and problem-solving in a dynamic environment
            became the hallmark of my professional journey.
          </p>
          <h3><i>Passion for Projects</i></h3>
          <p>
            Beyond my 9-to-5 role, I channel my enthusiasm into personal projects. A recent endeavor is an online food
            safety training website. Users can study, track progress, and attain certification, showcasing my belief
            in technology's practical applications. You can visit it here: <a href="https://safeservemetro.com/" target="_blank">SafeServe Metro</a>
          </p>
          <h3><i>Commitment to Growth</i></h3>
          <p>
            Continuous learning isn't just a professional obligation; it's a personal commitment. Staying current with emerging technologies
            fuels my eagerness for new challenges and ensures my contributions remain relevant in the ever-evolving software development landscape.
          </p>
        </div>
      </div>
    </div>


  </div>
);

export default Home;
