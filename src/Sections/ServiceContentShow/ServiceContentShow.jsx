import { Col, Container, Row } from "react-bootstrap";
import "./ServiceContentShow.css";
import { NavLink } from "react-router-dom";
import { scrollingToTop } from "../../Functions/ScrollingToTop";

const ServiceContentShow = ({data}) => {
  return (
    <div className="serviceContentShowSection">
      <Container>
        <Row className="flex-wrap g-3">
          <Col lg={6} className="serviceContentShowSection-imageCol">
            <div className="serviceContentShowSection-image">
              <img src={data?.srcDetails} alt={data?.alt} />
            </div>
          </Col>
          <Col lg={6} className="serviceContentShowSection-titleContent">
            <div className="mb-4">
              <h2 className="mb-3">{data?.name1 ?? data?.name}{data?.name2 ?? ""}</h2>
              <p>{data?.fullDescription}</p>
            </div>
          </Col>
          <Col lg={6} className="serviceContentShowSection-texContent">
            <div className="serviceContentShowSection-costContent mb-5">
              <h3 className="mb-3">Cost</h3>
              <p>{data?.cost}</p>
            </div>
            <div className="featuresContent">
              <h3 className="mb-4">Features</h3>
              <p>{data?.features}</p>
            </div>
          </Col>
          <Col lg={6}>
            <div className="seoContent">
              <h3 className="mb-4">
                Why It’s Good for SEO Pros
              </h3>
              <p className="mb-3">{data?.seo1}</p>
              <p className="mb-3">{data?.seo2}</p>
              <p className="mb-3">{data?.seo3}</p>
            </div>
            <button className="btnBlue mt-5 mx-auto" onClick={()=> scrollingToTop()}>
              <NavLink className="nav-link" to="/services">See All Services</NavLink>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ServiceContentShow;
