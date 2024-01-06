import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import Accordion from 'react-bootstrap/Accordion';
import './Projects.css';

interface ProjectsProps { }

const Projects: React.FC<ProjectsProps> = () => {
  const [projectData, setProjectData] = useState<any[]>([]);

  const getXMLData = async (projectName: string) => {
    try {
      const response = await axios.get(`projectData/${projectName}.xml`);
      const result = await parseStringPromise(response.data);
      return result[projectName];
    } catch (error) {
      console.error('Error fetching data', error);
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      let projects: any = [];
      for (let i = 1; i < 10; i++) {
        projects.push(getXMLData(`project${i}`));
      }
      const results = await Promise.all(projects);
      setProjectData(results);
    };

    fetchProjects();
  }, []);

  return (
    <div className="container mt-5">
      <div className="alert alert-secondary text-center" role="alert">
        Click on the tabs to see more information about each project.
      </div>

      <div className="row">
        <div className="col-12">
          <Accordion defaultActiveKey="0" id="projects_accordion">
            {projectData.filter((project: any) => project !== undefined).map((project: any, index: number) => {
              return (
                <Accordion.Item eventKey={`${index}`} key={`${index}`}>
                  <Accordion.Header>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-1 px-1 imgCol">
                          <img className="iconImg" src={project.iconImg} alt={project.title} />
                        </div>
                        <div className="col-11 mt-2 px-1">
                          <h2>{project.title}</h2>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-12">
                          <h6><strong>Date Completed:</strong> {project.dateCompleted}</h6>
                          <h6><strong>Project Languages:</strong> {project.projectLanguages}</h6>
                          <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="github_url"><strong>Github</strong></a><h6></h6>
                        </div>
                      </div>
                    </div>
                  </Accordion.Header>
                  <Accordion.Body>
                    <h2>{project.backgroundTitle}</h2>
                    <p className="pb-5">{project.backgroundDesc}</p>

                    <h2>{project.learnedTitle}</h2>
                    <ul className="pb-5">
                      {project.learnedPts[0].pts.map((pt: string, index: number) => {
                        return (
                          <li key={`${index}`}>{pt}</li>
                        );
                      })}
                    </ul>

                    <img className="backgroundImg img-fluid" src={project.backgroundImg} alt={project.backgroundImg} />
                    <h5 className="pt-3 text-center">{project.backgroundImgDesc}</h5>

                    {project.section.map((section_part: any, index: number) => {
                      console.log(section_part);
                      return (
                        <div>
                          <h2 className='mt-5'>{section_part.title}</h2>
                          {section_part.img.map((section_img: any, subIndex: number) => {
                            return (
                              <div className="text-center mt-5">
                                <img className="img-fluid" src={section_img.path} alt={section_img.path} />
                                <h6 className="pt-3">{section_img.desc}</h6>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </Accordion.Body>
                </Accordion.Item>
              );
            })}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Projects;
