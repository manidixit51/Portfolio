import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/39552-removebg-preview.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillGoogleCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I fell in love with programming and enjoy creating innovative solutions.
              <br />
              <br />Proficient in
              <i>
                <b className="purple"> C++, Python, Java, Javascript and MySQL. </b>
              </i>
              <br />
              <br />
              My interests span  &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain and AI.
                </b>
              </i>
              <br />
              <br />
              I specialize in building modern web applications using frameworks like<i><b className="purple"> Node.js</b></i> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, and Next.js</b>
              </i>
              <br/>
              <br/>
              I'm passionate about developing responsive, scalable, and secure applications, combining creativity with technology to deliver impactful results. &nbsp;
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
            <li className="social-icons">
                <a
                  href="mailto:manidixit512@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGoogleCircle />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/manidixit51"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/manidixit51/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/maniidixit"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://leetcode.com/u/manidixit512/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <SiLeetcode />
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
