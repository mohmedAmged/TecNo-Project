import { Col, Container, Row } from "react-bootstrap";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  return (
    <div className="whyChooseUs position-relative">
      <div className="whyChooseUs__bgImg">
        <img src="../pattern-5.png" alt="backGruongImage for choose section" />
      </div>
      <Container>
        <Row>
            <Col lg={6}>
                <div className="mainHeading mb-4">
                <p>Why Choose Us</p>
                <div className="aboutSeparators">
                    <span></span>
                </div>
                <h2>
                    Get Benifits and
                    <br />
                    Advantages Market Goal
                </h2>
                </div>
                <p className="specialColor">A Satisfied Customer is best for business</p>
                <p className="whyChooseUs__para">
                    The activity of buying or selling goods and services in all the countries of the world.
                </p>
                <ul className="gap-3 flex-column align-items-start whyChooseUs__list">
                    <li>
                        <span className="whyChooseUs__icon me-2">
                            <i className="bi bi-check-lg"></i>
                        </span>
                        What is global market economy?
                    </li>
                    <li>
                        <span className="whyChooseUs__icon me-2">
                            <i className="bi bi-check-lg"></i>
                        </span>
                        Why is the global market so important?
                    </li>
                    <li>
                        <span className="whyChooseUs__icon me-2">
                            <i className="bi bi-check-lg"></i>
                        </span>
                        Which is the largest stock market in the world?
                    </li>
                </ul>
                <button className="btnBlue mt-5">
                    Free Consultation
                </button>
            </Col>
            <Col lg={6}>
                <ul className="whyChooseUs__boxsList row">
                    <li className="col-9 me-auto pt-4 px-4 d-flex justify-content-between gap-2">
                        <div className="whyChooseUs__boxsList-icon whyChooseUs__boxsList-icon1">
                            <i className="bi bi-currency-dollar"></i>
                        </div>
                        <div className="whyChooseUse__boxsList-text pb-4">
                            <h4>
                                Offerdable Price
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod incididunt aliqua.</p>
                        </div>
                    </li>
                    <li className="col-9 ms-auto pt-4 px-4 d-flex justify-content-between gap-2">
                        <div className="whyChooseUs__boxsList-icon whyChooseUs__boxsList-icon2">
                            <i className="bi bi-headphones"></i>
                        </div>
                        <div className="whyChooseUse__boxsList-text pb-4">
                            <h4>
                                Greate Support
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod incididunt aliqua.</p>
                        </div>
                    </li>
                    <li className="col-9 me-auto pt-4 px-4 d-flex justify-content-between gap-2">
                        <div className="whyChooseUs__boxsList-icon whyChooseUs__boxsList-icon3">
                            <i className="bi bi-lock-fill"></i>
                        </div>
                        <div className="whyChooseUse__boxsList-text pb-4">
                            <h4>
                                Quick Access
                            </h4>
                            <p>Lorem ipsum dolor sit amet, consectetur, sed do eiusmod incididunt aliqua.</p>
                        </div>
                    </li>
                </ul>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WhyChooseUs;
