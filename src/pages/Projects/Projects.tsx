import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { parseStringPromise } from 'xml2js';
import Accordion from 'react-bootstrap/Accordion';
import './Projects.css';
import ScrollToTop from '../../components/scroll-to-top/scroll-to-top';


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
      for (let i = 1; i < 7; i++) {
        projects.push(getXMLData(`project${i}`));
      }
      const results = await Promise.all(projects);
      setProjectData(results);
    };

    fetchProjects();
  }, []);

  const handleAccordionItemClick = (event: any) => {
    if (window.innerWidth < 800) return;

    const clickedItem = event.target.closest('.accordion-item');
    if (clickedItem) {
      setTimeout(() => {
        window.scrollTo({
          top: clickedItem.getBoundingClientRect().top + window.scrollY,
          behavior: 'smooth'
        });
      }, 250);
    }
  };

  return (
    <div className="container mt-5">
      <div className="alert alert-secondary text-center" role="alert">
        Click on the tabs to see more information about each project.
      </div>

      <div className="row">
        <div className="col-12">
          <Accordion id="projects_accordion">
            {projectData.filter((project: any) => project !== undefined).reverse().map((project: any, index: number) => {
              return (
                <Accordion.Item eventKey={`${index}`} key={`${index}`}>
                  <Accordion.Header onClick={handleAccordionItemClick}>
                    <div className="container-fluid">
                      <div className="row">
                        <div className="col-1 imgCol">
                          <img className="iconImg" src={project.iconImg} alt={project.title} />
                        </div>
                        <div className="col-11 mt-2 projectTitle">
                          <h2>{project.title}</h2>
                        </div>
                      </div>

                      <div className="row mt-4">
                        <div className="col-12">
                          <h6><strong>Date Completed:</strong> {project.dateCompleted}</h6>
                          <h6><strong>Project Languages/Libraries:</strong> {project.projectLanguages}</h6>
                          {project.githubURL && (
                            <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="github_url">
                              <strong>Github</strong>
                            </a>
                          )}

                          {project.academicPaper && (
                            <a href={project.academicPaper} target="_blank" rel="noopener noreferrer" className="academic_url">
                              <strong>Full Academic Paper</strong>
                            </a>
                          )}

                          {project.productionURL && (
                            <a href={project.productionURL} target="_blank" rel="noopener noreferrer" className="prod_url">
                              <strong>Production URL</strong>
                            </a>
                          )}
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

                    <div className='text-center'>
                      <img className="backgroundImg img-fluid" src={project.backgroundImg} alt={project.backgroundImg} />
                    </div>
                    <h5 className="pt-3 text-center">{project.backgroundImgDesc}</h5>

                    {project.section.map((section_part: any, index: number) => {
                      return (
                        <div key={'section_' + index}>
                          <h2 className='mt-5'>{section_part.title}</h2>

                          {section_part.mp4 && section_part.mp4.map((section_mp4: any, subIndex: number) => {
                            return (
                              <div className="text-center mt-5" key={'subsection_' + subIndex}>
                                <video autoPlay loop controls={true} id="video_wrapper">
                                  <source src={require('./projectVideos/webscraping.mp4')} type="video/ogg" />
                                  Your browser does not support the video tag.
                                </video>
                                <h6 className="pt-3">{section_mp4.desc}</h6>
                              </div>
                            );
                          })}

                          {section_part.img.map((section_img: any, subIndex: number) => {
                            return (
                              <div className="text-center mt-5" key={'section_img_' + subIndex}>
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
      <ScrollToTop />
    </div>
  );
};

export default Projects;
