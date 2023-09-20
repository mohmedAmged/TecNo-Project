import { Col } from "react-bootstrap";
import "./DigitalServices.css";
import { useSelector } from "react-redux";
import DigitalServicesCard from "../../Components/DigitalServicesCard/DigitalServicesCard";
const DigitalServices = () => {
  const {data} = useSelector(state=> state.ServicesReducer);
  const normalServices = data?.filter(el => el?.key === "normal-service");

  return (
    <div className="digitalServicesSection position-relative">
      <div className="image-icon-1 position-absolute">
        <img src="../icon-1.png" alt="icon one animated" />
      </div>
      <div className="image-icon-2 position-absolute">
        <img src="../icon-2.png" alt="icon two animated" />
      </div>
      <div className="image-icon-4 position-absolute">
        <img src="../icon-4.png" alt="icon four aniamted" />
      </div>
      <div className="container">
        <div className="row g-3">
          <Col lg={4} md={12} className="order-0 position-relative">
            <div className="mainHeading mb-4">
              <p>Our Services</p>
              <div className="aboutSeparators">
                <span></span>
              </div>
              <h2>
                We Are Providing
                <br />
                Digital Services
              </h2>
            </div>
          </Col>
          {normalServices?.map(service => {
            return (
              <DigitalServicesCard key={service?.id} data={service} />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DigitalServices;
