import { Col, Container, NavLink, Row } from "react-bootstrap";
import "./OurWork.css";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export default function OurWork() {
  const {ref: myRef ,inView: isVisible} = useInView();
  const [isVisibleOnce, setIsVisibleOnce] = useState(false);
  useEffect(()=>{
    if(isVisible) setIsVisibleOnce(true);
  },[isVisible]);
  return (
    <div className="ourWork position-relative">
      <div className="ourWork-icon-topleft position-absolute">
        <img src="../icon-4.png" alt="icon 4 animated" />
      </div>
      <div className="ourWork-icon-topRight position-absolute">
        <img src="../icon-3.png" alt="icon 4 animated" />
      </div>
      <div className="ourWork-icon-bottom position-absolute">
        <img src="../icon-2.png" alt="icon 4 animated" />
      </div>
      <Container>
        <Row ref={myRef} className="g-3">
          <Col lg={6} className="pe-3">
            {isVisibleOnce && 
            <>
              <div className="image">
                <img src="../work.png" alt="our work image" />
              </div>
            </>
            }
          </Col>
          <Col lg={6} className="pt-5 workTextContent">
            <div className="mainHeading pt-3">
              <p>Our Selected Works</p>
              <div className="aboutSeparators">
                <span></span>
              </div>
              <h2>
                Introducing Our Work
              </h2>
            </div>
            <p className="specialColor">We cater our campaigns to each client specifically</p>
            <p>Our creativity is driven by data in an effort to give you the best possible result and position your brand for success.</p>
            <p>We’re on a mission to start a conversation with your customers in this fast connected world. Let’s discover, build and grow your digital business. We fuel business growth through innovative digital marketing and technology solu-tions.</p>
            <button className="btn btnBlue mt-4 mt-md-5">
              <NavLink className="nav-link" to="/">
                View More Work
              </NavLink>
            </button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
