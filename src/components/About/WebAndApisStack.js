import { Col, Row } from "react-bootstrap";
import { SiSpringboot, SiGraphql } from "react-icons/si";
import { FaAngular, FaReact } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";

function WebAndApisStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiSpringboot />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaAngular />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGraphql />
      </Col>
    </Row>
  );
}

export default WebAndApisStack;
