import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Row>
        <Col md={12} className="myAvtar">
          <Tilt>
            <img src={myImg} className="img-fluid" alt="avatar" />
          </Tilt>
        </Col>
      </Row>
      <Row>
        <Col md={12} className="home-about-social">
          <h1>Wanna Connect!</h1>
          <p>
            Feel free to{" "}
            <a
              style={{ textDecoration: "none" }}
              href="mailto:dhanawadeaniket72@gmail.com">
              <span className="purple">contact </span>
            </a>{" "}
            me
          </p>
          <ul className="home-about-social-links">
            <li className="social-icons">
              <a
                href="mailto:dhanawadeaniket72@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons">
                <AiFillMail />
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://github.com/aniketd2909"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons">
                <AiFillGithub />
              </a>
            </li>

            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/dhanawadeaniket/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons">
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
export default Home2;
