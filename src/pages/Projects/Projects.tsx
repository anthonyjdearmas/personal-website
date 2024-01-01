import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import Accordion from 'react-bootstrap/Accordion';
import './Projects.css';

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('projectData/project1.xml');
        const result = await parseStringPromise(response.data);
        setData(result.project1);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }



  //   <project1>
  //     <iconImg>project1.png</iconImg>
  //     <title>Project 1</title>
  //     <dateCompleted>2018-01-01</dateCompleted>
  //     <githubURL>https://github.com/anthonyjdearmas/GmodStore-Job-Notifer</githubURL>



  //     <backgroundTitle>Background</backgroundTitle>
  //     <backgroundDesc>
  //     Garry's Mod is a popular sandbox computer game that was created in 2004. In the game, people are able to create servers with various 
  //     mods using the Lua programming language. Many users want to make new mods for their friends and themselves to enjoy, but are not sure 
  //     how to code. This is why the Garry's Mod script market place, https://www.gmodstore.com , was founded. Through the market place, people 
  //     who want a mod to be made can post a job listing for a freelance developer, such as myself, to apply. However, developers need to be quick 
  //     to see the new jobs and apply because you compete with other developers. I would find myself missing out on a lot of jobs I would like 
  //     to do because I was not refreshing the page every 5 minutes to see new listings. So I decided to create a Java web-scraping program that
  //      will automatically notify me of new jobs!
  //     </backgroundDesc>

  //     <learnedPts>
  //         <pts>Learned 1</pts>
  //         <pts>Learned 2</pts>
  //         <pts>Learned 3</pts>
  //     </learnedPts>

  //     <section>
  //         <title>Project Media</title>
  //         <img>project1.png</img>
  //         <imgDesc>Project 1</imgDesc>

  //         <img>project1.png</img>
  //         <imgDesc>Project 1</imgDesc>

  //         <img>project1.png</img>
  //         <imgDesc>Project 1</imgDesc>
  //     </section>

  //     <section>
  //         <title>Jobs I completed</title>

  //         <img>project1.png</img>
  //         <imgDesc>Project 1</imgDesc>

  //         <img>project1.png</img>
  //         <imgDesc>Project 1</imgDesc>
  //     </section>

  // </project1>


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <Accordion defaultActiveKey="0" id="projects_accordion">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-1 px-1 imgCol"> {/* Adjust this line */}
                      <img className="iconImg" src={data.iconImg} alt={data.title} />
                    </div>
                    <div className="col-3 mt-2 px-1"> {/* Adjust this line */}
                      <h2>{data.title}</h2>
                    </div>
                  </div>

                  <div className="row mt-4">
                    <div className="col-12">
                      <h6><strong>Date Completed:</strong> {data.dateCompleted}</h6>
                      <h6><strong>Project Languages:</strong> {data.projectLanguages}</h6>
                      <a href={data.githubURL} target="_blank" rel="noopener noreferrer" className="github_url"><strong>Github</strong></a><h6></h6>
                    </div>
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <h4>{data.backgroundTitle}</h4>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Projects;
