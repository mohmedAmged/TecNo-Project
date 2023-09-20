import { Col, Container , Row } from "react-bootstrap";
import { MainHeading } from "../../Components/MainHeading/MainHeading";
import ServicesCard from "../../Components/ServCard/ServicesCard";
import { useSelector } from "react-redux";
import "./ServicesSection.css"
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export function ServicesSection() {
  const {data} = useSelector(state => state.ServicesReducer);
  const popularServices = data?.filter(el => el?.key === "special-service");
  const {ref: myRef ,inView: isVisible} = useInView();
  const [isVisibleOnce, setIsVisibleOnce] = useState(false);

  useEffect(()=>{
    if(isVisible) setIsVisibleOnce(true);
  },[isVisible]);

  return (
      <div className="servicesSection position-relative pb-5 mb-5">
      <div className="top-left position-absolute">
        <img src="../icon-1.png" alt="animated icon 1" />
      </div>
      <div className="top-right position-absolute">
        <img src="../icon-3.png" alt="animated icon 3" />
      </div>
      <div className="botton-left position-absolute">
        <img src="../icon-2.png" alt="animated icon 2" />
      </div>
      <div className="bottom-right position-absolute">
        <img src="../icon-4.png" alt="animated icon 4" />
      </div>
      <MainHeading />
      <Container>
        <Row className="g-4" ref={myRef}>
          {popularServices?.map(serv => {
            return (
              <Col key={serv?.id} lg={4} md={6}>
                {
                  isVisibleOnce && 
                  <>
                    <ServicesCard src={serv?.src} alt={serv?.alt} desc={serv?.minDescription} title1={serv?.name1} title2={serv?.name2} id={serv?.id} />
                  </>
                }
              </Col>)
          })}
        </Row>
      </Container>
    </div>
  )
}
