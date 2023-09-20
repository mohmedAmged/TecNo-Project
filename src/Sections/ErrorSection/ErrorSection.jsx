import { Col, Container, Row } from "react-bootstrap";
import "./ErrorSection.css";
import { scrollingToTop } from "../../Functions/ScrollingToTop";
import { useNavigate } from "react-router";

const ErrorSection = ({errorMSG}) => {
    const navigate = useNavigate();
  return (
    <div className="errorSection">
      <Container>
        <Row>
            <Col lg={10} className="mx-auto text-center">
                <h2 className="mb-3">404</h2>
                <p className="errorAlert mb-3">{errorMSG || "Oops! That page can’t be found"}</p>
                <p className="errorApologise">
                    Sorry, but the page you are looking for does not existing
                </p>
                <button className="btnBlue mx-auto mt-5" onClick={() => {
                    scrollingToTop();
                    navigate("/");
                }}>
                    Go To Home Page
                </button>
            </Col>
        </Row>
      </Container>
    </div>
  )
}

export default ErrorSection
