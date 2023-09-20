import { Col } from "react-bootstrap";
import "./MediaCard.css";

const MediaCard = ({src,alt,desc,date}) => {
  return (
    <Col lg={4} md={6} className="mediaCol">
      <div className="mediaCard text-center d-flex flex-column justify-content-between">
        <div className="image p-0">
          <img src={src} alt={alt} />
        </div>
        <h3 className="px-4 fw-bold">{desc}</h3>
        <div className="containForBottom">
          <p className="date pb-3">
            {date}
          </p>
          <div className="bottomContent d-flex justify-content-between align-items-center p-3">
            <div className="leftContent d-flex justify-content-between align-items-center">
              <div className="image p-0 me-3">
                <img src="../media-admin.png" alt="" />
              </div>
              <p>by admin</p>
            </div>
            <div className="rightContent d-flex justify-content-between align-items-center">
              <div className="msgIcon">
                <i className="bi bi-chat-text me-2"></i>
              </div>
              <p>0 Comments</p>
            </div>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default MediaCard;
