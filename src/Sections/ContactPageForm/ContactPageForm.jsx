import { Col, Container, Row } from "react-bootstrap";
import "./ContactPageForm.css";
import ContactForm from "../../Components/ContactForm/ContactForm";

const ContactPageForm = () => {
  return (
    <div className="contactPageForm">
      <div className="mainHeading text-center mb-5">
        <p>We Help You</p>
        <div className="separators">
          <span></span>
        </div>
        <h2>
          Contact Us Now
        </h2>
      </div>
      <Container>
        <Row>
          <Col className="mx-auto pt-5" lg={9}>
            <ContactForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactPageForm;
