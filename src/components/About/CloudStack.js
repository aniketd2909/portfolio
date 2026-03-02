import { Col, Row } from "react-bootstrap";
import { SiAmazonaws, SiMicrosoftazure } from "react-icons/si";

function CloudStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAmazonaws />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure />
      </Col>
    </Row>
  );
}

export default CloudStack;
