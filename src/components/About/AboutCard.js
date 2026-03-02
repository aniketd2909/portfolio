import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            <br />
            Currently I am working as a Software Professional with expertise in{" "}
            <span className="purple">
              Full-Stack Development & Robust Cloud Architectures
            </span>
            <br />
            Proficient in building RESTful APIs and microservices ensuring
            seamless integration and efficient data handling. Adept at
            modernizing web applications by integrating cutting-edge AI & Large
            Language Models (LLMs) to enhance user experiences and automate
            workflows.
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
