import { Col, Row } from "react-bootstrap";
import { DiJava, DiPython } from "react-icons/di";
import { SiTypescript, SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";

function LanguagesStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaPhp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
    </Row>
  );
}

export default LanguagesStack;
