import { Col } from "react-bootstrap";
import "./DigitalServicesCard.css";
import { NavLink } from "react-router-dom";
import { scrollingToTop } from "../../Functions/ScrollingToTop";

const DigitalServicesCard = ({data}) => {
  return (
    <Col lg={4} md={6} className="p-3 normalServicesColumn">
      <div className="normalServiceContent position-relative p-5">
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="normalServiceIcon">
          <i className={data?.className}></i>
        </div>
        <h3 className="mt-4 mb-4 position-relative"><NavLink className="nav-link" to={`/services/${data?.id}`} onClick={()=> scrollingToTop()}>{data?.name}</NavLink></h3>
        <p className="position-relative">{data?.minDescription}</p>
      </div>
    </Col>
  );
}
export default DigitalServicesCard;