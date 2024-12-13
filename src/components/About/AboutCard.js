import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mani Dixit </span>
            from <span className="purple"> Gwalior, India.</span>
            <br />
            I am currently pursuing <span className="purple">BTech (CSE)</span> from <span className="purple">Jaypee University of Engineering and Technology, Guna.</span>
            <br />
            <br />
            Beyond coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
        
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Graphic Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Photography
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
           <i> "Innovating with purpose, learning with passion."{" "}</i>
          </p>
          <footer className="blockquote-footer">Mani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
