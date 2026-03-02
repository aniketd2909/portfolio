import { Col, Row } from "react-bootstrap";
import { SiElasticsearch } from "react-icons/si";
import { DiMicroserv } from "react-icons/di";

function ConceptsStack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={2} className="tech-icons">
        {/* No specific icon for Microservices, just text */}
        <p>Microservices</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        {/* No specific icon for MVC, just text */}
        <p>MVC</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        {/* No specific icon for Event Driven Architecture, just text */}
        <p>Event Driven Architecture</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        {/* No specific icon for MCP, just text */}
        <p>MCP</p>
      </Col>
      <Col xs={2} md={2} className="tech-icons">
        <SiElasticsearch />
        <p>ElasticSearch</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        {/* No specific icon for DevOps, just text */}
        <p>DevOps</p>
      </Col>
    </Row>
  );
}

export default ConceptsStack;
