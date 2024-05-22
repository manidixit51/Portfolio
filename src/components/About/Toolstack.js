import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiVercel,
  SiFigma,
  SiGithub,
  SiIntellijidea,

} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiFigma/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiIntellijidea/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobephotoshop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
