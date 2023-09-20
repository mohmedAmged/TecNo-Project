import { Col, Container, Row } from "react-bootstrap";
import "./ContactSection.css";
import ContactForm from "../../Components/ContactForm/ContactForm";

const ContactSection = ({src,alt}) => {
  return (
    <div className="contactSection">
      <Container>
        <Row>
          <Col lg={6}>
            <img src={src} alt={alt} />
          </Col>
          <Col lg={6}>
            <div className="mainHeading mb-4">
              <p>Get In Touch</p>
              <div className="aboutSeparators">
                <span></span>
              </div>
              <h2>
                Got a Problem to Solve?
              </h2>
            </div>
            <p className="notImportant">Before we put our thinking caps on, tell us a few things about yourself.</p>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactSection;
