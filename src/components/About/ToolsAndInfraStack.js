import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiDocker,
  SiPostman,
  SiApachekafka,
  SiOpensearch,
} from "react-icons/si";

function ToolsAndInfraStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiApachekafka />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpensearch />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
    </Row>
  );
}

export default ToolsAndInfraStack;
