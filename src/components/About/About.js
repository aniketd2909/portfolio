import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import LanguagesStack from "./LanguagesStack";
import WebAndApisStack from "./WebAndApisStack";
import DatabasesStack from "./DatabasesStack";
import CloudStack from "./CloudStack";
import ToolsAndInfraStack from "./ToolsAndInfraStack";
import ConceptsStack from "./ConceptsStack";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", margin: "auto" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              margin: "auto",
            }}>
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img">
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Languages</strong>
        </h1>
        <LanguagesStack />

        <h1 className="project-heading">
          <strong className="purple">Web & APIs</strong>
        </h1>
        <WebAndApisStack />

        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col xs={12} md={6}>
            <h1 className="project-heading">
              <strong className="purple">Databases</strong>
            </h1>
            <DatabasesStack />
          </Col>
          <Col xs={12} md={6}>
            <h1 className="project-heading">
              <strong className="purple">Cloud</strong>
            </h1>
            <CloudStack />
          </Col>
        </Row>

        <h1 className="project-heading">
          <strong className="purple">Tools & Infrastructure</strong>
        </h1>
        <ToolsAndInfraStack />
        {/* 
        <h1 className="project-heading">
          <strong className="purple">Concepts</strong>
        </h1>
        <ConceptsStack /> */}
      </Container>
    </Container>
  );
}

export default About;
