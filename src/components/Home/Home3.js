import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import consulting from "../../Assets/consulting.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home3() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
      <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",textAlign: "left" }}>
              As a <span className="purple" style={{ fontSize: "1em",textAlign: "left" }}> Management Consultant,1 </span> 
            </h1>
            <p className="home-about-body">
            Successfully led and delivered a project for a Leading Client in the US. Carried out designs to improve the AR Recievables by more than 30%. Integrated a payment platform for the Company to stream line the online payments process
<br/><br/>
Ideated and delivered strategies to improve payment processes for fortune 500 clients.
<br/><br/>
Collaborated with a Leading Bank in US for multiple implementations.
           </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={consulting} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em",textAlign: "left" }}>
             My <span className="purple" style={{ fontSize: "1em",textAlign: "left" }}>Core Competencies </span> 
            </h1>
            <p className="home-about-body">
            
        Critical Thinking and Attention to detail focused
individual
<br/><br/> Proactive Self-starter in both team oriented and
individual endeavors
<br/><br/>Good Verbal and Written Interpersonal
communication and Presentation skills
<br/><br/> Good Analytical and Problem Solving skills
           </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              {/* <img src={consulting} className="img-fluid" alt="avatar" /> */}
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Find Me at</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/maheksaraogi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/mahi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mahek-saraogi-0b4a50181/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/_mahi.99/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home3;
