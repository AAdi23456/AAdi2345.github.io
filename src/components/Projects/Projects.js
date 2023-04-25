import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
//import editor from "../../Assets/Projects/gearbest.png";
import chatify from "../../Assets/Projects/asos.png";
//import suicide from "../../Assets/Projects/caratlane.png";
//import bitsOfCode from "../../Assets/Projects/weather.png";
import nykaa from "../../Assets/Projects/nykaa-clone.png";
import myhours from "../../Assets/Projects/myhours.png";

function Projects() {
  return (
    <Container  fluid className="project-section">
      <div id="project" className="projects-sections"></div>
      <Particle />
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={nykaa}
              isBlog={false}
              title="Clone of Chick-A-fill.com"
              description="Deliciously designed user interface for an immersive and interactive food website, offering a visually appealing and seamless browsing experience for food enthusiasts."
              stacks="Tech Stack : Javascript,HTML,CSS"
              ghLink="https://github.com/Mahendra-mohane/dark-van-7997"
              demoLink="https://dark-van-7997-foodie-finder-abdul.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myhours}
              isBlog={false}
              title="Notes Application(Backend)"
              description="Developed a fully functional notes taking application utilizing JavaScript, Node.js, Express, and MongoDB, allowing users to create, edit, and organize their notes efficiently."
              stacks="Tech Stack :  Javascript, Node.js, Express, MongoDB"
              ghLink="https://github.com/AAdi23456/Notes-taking-backend"
              //demoLink="https://wonderful-dasik-3cd912.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Backend for e-commerce"
              description="Node.js application leveraging an e-commerce API to manage products, orders, and customers, with robust authentication and security measures. Deployed to a production environment with monitoring and logging for optimal performance."
              stacks="Tech Stack : Node.js,Javascript,Express,MongoDB"
              ghLink="https://github.com/AAdi23456/unit-4-backend"
              //demoLink="https://papaya-tarsier-65f2d1.netlify.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Weather App"
              description="A weather forecasting web application built using weather API. It shows city and current location based weather data with next 5 hours and 5 days forecast."
              stacks="Tech Stack : React, Javascript, Tailwind-CSS, Rest-API"
              ghLink="https://github.com/aakarsh604/React_WeatherApp"
              demoLink="https://incandescent-toffee-012bd4.netlify.app/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Gearbest.com Clone"
              description="A cloned web application of gearbest.com is an E-commerce platform selling an extensive range of goods from clothing, accessories, appliances, home-decor, and electronic gadgets."
              stacks="Tech Stack : HTML5, CSS3, Javascript"
              ghLink="https://github.com/aakarsh604/Gearbest-Clone"
              demoLink="https://silly-queijadas-e172c2.netlify.app/"              
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Caratlane.com Clone"
              description="Web application clone of an E-commerce website caratlane.com selling diamonds and jewellery for both men and women."
              stacks="Tech Stack : HTML5, CSS3, Javascript"
              ghLink="https://github.com/Shubham-46/CARAT-LANE-CLONE"
              demoLink="https://sensational-kheer-5c4a81.netlify.app/"              
            />
          </Col> */}

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
