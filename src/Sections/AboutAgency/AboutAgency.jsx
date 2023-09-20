import { Col, Container, Row } from "react-bootstrap";
import "./AboutAgency.css";

export function AboutAgency() {
  return (
    <div className="aboutSection position-relative">
      <div className="aboutSection-left-image position-absolute">
        <img src="../icon-1.png" alt="icon 1 animated" />
      </div>
      <div className="aboutSection-right-image position-absolute">
        <img src="../icon-2.png" alt="icon 2 animated" />
      </div>
      <div className="aboutSection-bottom-image position-absolute">
        <img src="../icon-4.png" alt="icon 4 animated" />
      </div>
      <Container>
        <Row>
          <Col lg={6}>
            <div className="mainHeading mb-4">
              <p>About The Agency</p>
              <div className="aboutSeparators">
                <span></span>
              </div>
              <h2>
                Insights and Resources to
                <br />
                help drive your Business
                <br />
                Forward Faster.
              </h2>
            </div>
            <div className="about-text">
              <p>
                we build results-oriented brand strategies and continually refine your canpaigns for the greatest outcome. from full-scale digital marketing and advertising strategy, right through to our precise execution and reporting that’s right,we’ve got you covered
              </p>
              <div className="authorContent d-flex align-items-center gap-4 mt-5">
                <div className="leftPart">
                  <img src="../author-1.png" alt="author 1 image" />
                </div>
                <div className="rightPart">
                  <h5>Dntuli Frek</h5>
                  <p>Founden & CEO</p>
                </div>
              </div>
              <div className="signatureImage mt-4">
                <img src="../signature.png" alt="author signature image" />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <img src="../about-1.png" alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
