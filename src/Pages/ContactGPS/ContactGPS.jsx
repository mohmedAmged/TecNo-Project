
import { Col, Container, Row } from "react-bootstrap";
import "./ContactGPS.css";
const ContactGPS = () => {

  return (
    <div className="contactGPSSection">
        <div className="topPart text-center">
          <h2>
            Our Support Guys or
            <br />
            Make Appointment With Our Consultan
          </h2>
          <p>
            Please contact us using the information below. For additional information on our management consulting services, please visit
            the appropriate page on our site.
          </p>
        </div>
        <Container>
          <div className="middleGPS mb-5">
              <iframe className="googlemap" src="https://maps.google.com/maps?q=egypt&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed"></iframe>
          </div>
          <Row className="rowOfOurLastContactSection g-3">
            <Col className="p-5 ps-0" lg={3} md={6}>
              <img src="../last-contact-image.jpg" alt="logo our-contact page" />
            </Col>
            <Col className="py-5" lg={3} md={6}>
              <h3>United Kingdom</h3>
              <p className="topP">
                49488 Avenida Obregon, La Quinta, CA 92253
              </p>
              <ul className="flex-column align-items-start gap-2 mb-4">
                <li>+1-(281)-813 926</li>
                <li>+1-(281)-813 612</li>
              </ul>
              <p className="bottomP">
                support@example.com
              </p>
            </Col>
            <Col className="p-5" lg={3} md={6}>
            <h3>Australia</h3>
              <p className="topP">
                13/1 Dixon Street, Sydney NSW 2000
              </p>
              <ul className="flex-column align-items-start gap-2 mb-4">
                <li>+1-(281)-813 926</li>
                <li>+1-(281)-813 612</li>
              </ul>
              <p className="bottomP">
                support@example.com
              </p>
            </Col>
            <Col className="p-5 pe-0" lg={3} md={6}>
            <h3>Netherlands</h3>
              <p className="topP">
                Nieuwe Leliestraat 27-HS 101J Amsterdam
              </p>
              <ul className="flex-column align-items-start gap-2 mb-4">
                <li>+1-(281)-813 926</li>
                <li>+1-(281)-813 612</li>
              </ul>
              <p className="bottomP">
                support@example.com
              </p>
            </Col>
          </Row>
        </Container>
    </div>
  );
}

export default ContactGPS;
