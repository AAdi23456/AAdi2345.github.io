import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import photo from "../../Assets/Aakarsh2.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="purple"> ABOUT </span> ME
            </h1>
            <p className="home-about-body">
              <i>
                <b className="purple">Full Stack Developer </b>
              </i>
              , who is passionate about building digital products that improve
              everyday experience for people. Proficient in
              <i>
                <b className="purple"> Node.js </b>
              </i>
              . Worked through 1000+ hours of Bootcamp structure learning
              JavaScript, Node.Js, MongoDB, Express, HTML5, and CSS3.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={photo} className="img-fluid myphoto" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <p className="contact-font">
              Mobile : <span className="purple">+91 8210523156 </span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/AAdi23456"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/aaditya-jha-967b72215/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:adityakumarbh46@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiGmail />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
