import { Col, Container, Row } from "react-bootstrap";
import "./TestimonialsSection.css";
import { TestimonialsSlider } from "../../Components/TestimonialsSlider/TestimonialsSlider";

export function TestimonialsSection() {
  return (
    <div className="testimonialsSection">
      <Container>
        <div className="mainHeading mb-4">
          <p>Testimonials</p>
          <div className="aboutSeparators">
            <span></span>
          </div>
          <h2>
            What Clients Say
            <br />
            About Us
          </h2>
        </div>
      </Container>
      <div className="container-fluid pe-5">
        <Row>
            <Col lg={5} className="imgCol">
              <div className="image">
                <img src="../authors-1.png" alt=" authors images" />
              </div>
            </Col>
            <Col lg={7} className="testimonialsCol">
              <TestimonialsSlider />
            </Col>
        </Row>
      </div>
      <div className="testimonialsMainContent d-flex justify-content-center align-items-center">
        <div className="leftContent">
          <img src="../testimonials-bg1.png" alt="testimonials bg-1" />
        </div>
        <div className="rightContent">
          <img src="../testimonials-bg2.png" alt="testimonials bg-2" />
        </div>
      </div>
    </div>
  );
}