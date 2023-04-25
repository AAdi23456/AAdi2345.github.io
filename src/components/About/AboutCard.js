import React from "react";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import { BsLinkedin } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { FaPhoneSquareAlt, FaGithubSquare } from "react-icons/fa";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <Row className="contact_icons" style={{ justifyContent: "center" }} xs={1} md={2}>
          <Col>
            <BsLinkedin />
            <br />
            <a
              href="https://www.linkedin.com/in/aaditya-jha-967b72215/"
              target="_blank"
              rel="noreferrer"
              className="contact_info"
            >
              Aditya kumar Jha
            </a>
          </Col>
          <Col>
            <FaGithubSquare />
            <br />
            <a
              href="https://github.com/AAdi23456"
              target="_blank"
              rel="noreferrer"
              className="contact_info"
            >
              Aaditya kumar Jha
            </a>
          </Col>
        </Row>
        <Row className="contact_icons" style={{ justifyContent: "center", padding : "50px"}} xs={1} md={2}>
          <Col>
            <GrMail />
            <br />
            <a
              href="mailto:adityakumarbh46@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="contact_info"
            >
            adityakumarbh46@gmail.com
            </a>
          </Col>
          <Col>
            <FaPhoneSquareAlt />
            <br />
            <a
              href="tel:+918210523156"
              rel="noreferrer"
              className="contact_info"
            >
              +91 8210523156
            </a>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
