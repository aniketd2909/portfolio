import { Col, Row } from "react-bootstrap";
import { SiMysql, SiRedis } from "react-icons/si";
import { DiMongodb } from "react-icons/di";

function DatabasesStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
    </Row>
  );
}

export default DatabasesStack;
