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
        </div>
      </div>
      <img src="/img/intro.jpg" alt="Image" id="intro_img" />
    </div>
  </div>
);

export default Home;
