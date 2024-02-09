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
                    <Link to="https://github.com/anthonyjdearmas" target="_blank">
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
                Here you can find some of my projects and learn more about me. Click the icons below to
                visit my GitHub and LinkedIn profiles, or click the resume icon to view my resume.
              </p>
              <div className="container text-center" style={{ height: '100px' }}>
                <div className="row">
                  <div>
                    <Link to="https://github.com/anthonyjdearmas" target="_blank">
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
            I'm a full stack software engineer who graduated from Cornell University with a degree in Computer Science.
            I currently work at FTI Consulting where I help to create specialized software solutions for multiple clients
            concurrently. Below I discuss my journey to becoming a software engineer and some of the projects I've worked on.
          </p>
          <h3 className="mt-5"><i>Teaching and Learning at iD Tech</i></h3>
          <p>
            During college, I found fulfillment in teaching part time at iD Tech, where I connected with students
            aged 10-17. This experience enhanced my communication skills and laid the groundwork for translating
            complex concepts into accessible lessons.
          </p>
          <h3><i>Collaborating with Other Students</i></h3>
          <p>
            Over the summer of my sophomore year, I became part of a project named AI-Learners. This project was a collaboration
            with other Cornell students where I led a small team to develop a web application to help children with special needs learn.
            The project later became funded by Cornell e-Labs and continues to grow today. It can be visited at:
            <a href="https://ai-learners.com/" target="_blank"> AI-Learners</a>.
          </p>
          <h3><i>Making the Most of University</i></h3>
          <p>
            Before I left university, I wanted to make sure I took advantage of the academic opportunities available to me.
            I became a teaching assistant for a HCI course where I had my own office hours section where I taught
            a class of 45 students. I also co-authored a paper and helped ran studies with the research. The paper was
            published to the ACM Digital Library and even won an award.
          </p>
          <h3><i>Internship to Full-Time Role at FTI Consulting</i></h3>
          <p>
            I also interned at FTI Consulting, where I learned to become a professional software engineer.
            There I learned in leaps and bounds about the software development process and how to work with modern technologies.
            I was later offered a full-time role as a software engineer after graduation and am currently working there.
            Now I am part of multiple projects at the same time, communicate with clients and am growing into a better developer
            everyday.
          </p>
          <h3><i>Passion for Projects</i></h3>
          <p>
            Beyond my 9-to-5 role, I channel my enthusiasm into personal projects. A recent endeavor is an online food
            safety training website. Users can study, track progress, and attain certification, showcasing my belief
            in technology's practical applications. You can visit it here: <a href="https://safeservemetro.com/" target="_blank">SafeServe Metro</a>.
            This has been my biggest project by far. It has been a great learning experience and I am proud of the result. The course has
            increased the pass rate of the exam significantly and brought many more customers to the business that uses it.
            Seeing the impact of my work has been very rewarding and motivates me to continue to create.
          </p>
        </div>
      </div>
    </div>


  </div>
);

export default Home;
