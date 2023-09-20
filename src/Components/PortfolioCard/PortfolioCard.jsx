import { Col } from "react-bootstrap";
import "./PortfolioCard.css";
import { NavLink } from "react-router-dom";
import { scrollingToTop } from "../../Functions/ScrollingToTop";

const PortfolioCard = ({handleShow,data}) => {
    return (
        <Col className="portfolioCard p-4" lg={4} md={6}>
            <div className='mySlide position-relative'>
                <div className="mySlideOverLay position-absolute"></div>
                <div className="mySlideOverLayinnerContent">
                    <button className='btn popupBtn' onClick={() => handleShow(data?.id)}>
                        <i className="bi bi-eye"></i>
                    </button>
                </div>
                <div className="mySlideOverLayBottomArrow position-absolute">
                    <NavLink className='nav-link' to={`/portfolio/${data?.id}`} onClick={()=> scrollingToTop()}>
                        <i className="bi bi-arrow-right-short"></i>
                    </NavLink>
                </div>
                <img src={`${data?.src}`} alt={`${data?.alt}`} />
            </div>
            <div className="portfolioCard-text pt-4 pb-4 ps-2">
                <h3>
                    <NavLink className="nav-link" to={`/portfolio/${data?.id}`} onClick={()=> scrollingToTop()}>
                        {data?.head}
                    </NavLink>
                </h3>
                <p>{data?.cat}</p>
            </div>
        </Col>
    );
}

export default PortfolioCard;
