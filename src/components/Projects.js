import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/hospital.jpeg";
import projImg2 from "../assets/img/food.avif";
import projImg3 from "../assets/img/number.png";
import projImg4 from "../assets/img/shipping.jpeg";
import projImg5 from "../assets/img/grocery.png";
import projImg6 from "../assets/img/staywell.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [

    {
      title: "Hospital Management System",
      description: "Maven Project using MySQL",
      imgUrl: projImg1,
    },
    {
      title: "Staywell Application",
      description: "Full stack Project using React and ElephantSQL",
      imgUrl: projImg6,
    },
    {
      title: "Shipping Management System",
      description: "Full stack project using MERN Stack",
      imgUrl: projImg4,
    },
    {
      title: "Number Guesser Game",
      description: "Using Javascript, HTML & CSS",
      imgUrl: projImg3,
    },

    {
      title: "Food Blog",
      description: "Full stack Project using MERN stack",
      imgUrl: projImg2,
    },
    {
      title: "Grocery List",
      description: "Frontend Project using Javascript, HTML & CSS",
      imgUrl: projImg5,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Please find the below projects completed, To overview the source code, Please visit my github repository</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">My Projects</Nav.Link>
                    </Nav.Item>

                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
