import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            Currently I am working as a Software Professional with expertise in{" "}
            <span className="purple">FullStack Web Development </span>
            <br />
            Skilled in designing and implementing robust applications using a
            wide range of frameworks and technologies, with a strong focus on
            delivering efficient, scalable solutions
            <br />
            Extensive knowledge in developing{" "}
            <span className="purple">
              Single-Page Applications (SPAs){" "}
            </span>{" "}
            using Angular, complemented by experience with design and
            architectural patterns
            <br />
            Proficient in building RESTful APIs and microservices using Node.js
            and .NET Core, ensuring seamless integration and efficient data
            handling
            <br />
            Masters in
            <span className="purple"> Computer Science</span> @Florida Tech.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
