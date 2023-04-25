import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";

function About() {
  return (
    <Container id="about" fluid className="about-section">
      <Particle />
      <Container>
        <Row
          style={{ justifyContent: "center", margin: "-50px" }}
          id="skills"
        ></Row>
        <h1 className="project-heading skills-section">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
