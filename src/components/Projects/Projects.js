import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import angularCRUD from "../../Assets/Projects/angular-CRUD.png";
import reactCRUD from "../../Assets/Projects/react-CRUD.png";
import salesPrice from "../../Assets/Projects/Sales-Price.png";
import iotDevice from "../../Assets/Projects/IoT-Device.png";
import diffusionModel from "../../Assets/Projects/Diffusion-Model.png";
import parkingViolation from "../../Assets/Projects/Parking-Voilation.png";
import infoExtract from "../../Assets/Projects/info-extract-cheque.jpg";
import amazonClone from "../../Assets/Projects/amazon-clone.png";
import SkillUP from "../../Assets/Projects/skillUp.png";
import jwt from "../../Assets/Projects/jwt.png";
import careerHubVid from "../../Assets/Projects/careerHub.mp4";
import careerHubImg from "../../Assets/Projects/careerHubImg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={amazonClone}
              isBlog={false}
              title="Amazon-Clone"
              description="
              Built an amazon clone using React and deployed it on firebase. Used various React Context API, hooks to manage states. Provided authentication, database using Firebase and payment gateway through Stripe"
              ghLink="https://github.com/aniketd2909/amazon-clone"
              demoLink="https://clone-app-13296.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jwt}
              isBlog={false}
              title="JWT Role based authentication"
              description="
              Implemented Role-Based Authorization and Authentication using JWT Token ensuring secure access control to resources"
              ghLink="https://github.com/aniketd2909/JWT_Auth_API"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parkingViolation}
              isBlog={false}
              title="Parking Violation Ticket"
              description="
              Data gathering, cleaning, exploratory analysis, hypothesis formulation (approx. 13GB of Parking Data); augmented the parking data with the temperature data from NOAA; performed t-test on the vehicles to get some useful insights"
              ghLink="https://github.com/aniketd2909/Parking_Voilations_Tickets_Big_Data"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iotDevice}
              isBlog={false}
              title="IoT Device Identification"
              description="
              Utilized IoT device packet capture files to extract features and tooled ML algorithms (RF, DT, KNN, Naïve Bayes, XGB) with scikit-learn, achieving 90% accuracy for RF and DT on single packet and 99% accuracy with aggregation of 9 packets"
              ghLink="https://github.com/aniketd2909/IPAssess_IoT_Devices"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diffusionModel}
              isBlog={false}
              title="Diffusion_Model---DDPM-DDIM"
              description="
              Implemented a Diffusion model utilizing Denoising Diffusion Probabilistic Model (DDPM) for image generation using Neural Network; trained 89,400 sprite images (16X16X3); utilized Fréchet Inception Distance (FID) scores for model evaluation "
              ghLink="https://github.com/aniketd2909/Diffusion_Model---DDPM-DDIM.git"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salesPrice}
              isBlog={false}
              title="Effect COVID-19 Florida Housing Market"
              description="
              Answered questions related to change in housing and rental prices over Covid-19, correlation between median income of a county and the housing sales, investement strategies, Pending and Closing days in Covid-19 for a listing"
              ghLink="https://github.com/aniketd2909/Effect_COVID-9_Florida_Housing_Market"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactCRUD}
              isBlog={false}
              title="Employee-Management-System (React)"
              description="o Built a Web app to manage employee details using Dotnet framework, MSSQL, ReactJS. Implemented Rest API using Dotnet framework and used Entity framework to connect with MSSQL Database."
              ghLink="https://github.com/aniketd2909/Crud_React"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={angularCRUD}
              isBlog={false}
              title="Employee-Management-System (Angular)"
              description="o Built a Web app to manage employee details using Dotnet framework, MSSQL, Angular. Implemented Rest API using Dotnet framework and used Entity 
              framework to connect with MSSQL Database."
              ghLink="https://github.com/soumyajit4419/Editor.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={SkillUP}
              isBlog={false}
              title="SkillUP"
              description="Developed a web application using technologies like Angular, Dotnet framework, and MYSQL database to give an enhanced learningexperience to the new Joiners"
              ghLink="https://github.com/aniketd2909/SkillUP"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infoExtract}
              isBlog={false}
              title="Information Extraction from Cheques"
              description="Extracted legal information from bank cheques using the Tesseract library of python and developed an SVM Model for signature verification using SIFT features of signatures"
              ghLink="https://github.com/aniketd2909/Information_Extraction_From_Cheques"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Keep-Notes-App"
              description="Created a web-app to manage your notes"
              ghLink="https://github.com/aniketd2909/Keep-Notes-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={careerHubImg}
              isBlog={false}
              vidPath={careerHubVid}
              title="CareerHub - Job Search Portal"
              description="
              Implemented a job portal using React Native"
              ghLink="https://github.com/aniketd2909/CareerHub"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
