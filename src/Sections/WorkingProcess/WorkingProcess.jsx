import { Col, Container, Row } from "react-bootstrap";
import "./WorkingProcess.css";

const WorkingProcess = () => {
  return (
    <div className="workingProcess">
      <div className="mainHeading text-center mb-5">
        <p>Steps For Done</p>
        <div className="separators">
          <span></span>
        </div>
        <h2>
          Our Working Process
        </h2>
      </div>
      <Container className="pt-3">
        <Row>
        <Col lg={3} md={6} className="mb-4">
            <div className="workingProcess_col-content d-flex flex-column justify-content-between gap-3 text-center">
              <div className="workingProcess_col-content-image order-1">
                <img src="../process-1.png" alt="image process one" />
              </div>
              <div className="workingProcess_col-content-text order-2 d-flex flex-column align-items-center">
                <h3 className="order-1 my-3">Date Exchange</h3>
                <div className="line order-2"></div>
                <p className="order-3">01</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="workingProcess_col-content d-flex flex-column justify-content-between gap-3 text-center">
              <div className="workingProcess_col-content-image order-2">
                <img src="../process-2.png" alt="image process two" />
              </div>
              <div className="workingProcess_col-content-text order-1 d-flex flex-column align-items-center">
                <h3 className="order-3 my-3">Content Managment</h3>
                <div className="line order-2"></div>
                <p className="order-1">02</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="workingProcess_col-content d-flex flex-column justify-content-between gap-3 text-center">
              <div className="workingProcess_col-content-image order-1">
                <img src="../process-3.png" alt="image process 3" />
              </div>
              <div className="workingProcess_col-content-text order-2 d-flex flex-column align-items-center">
                <h3 className="order-1 my-3">Workflow</h3>
                <div className="line order-2"></div>
                <p className="order-3">03</p>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} className="mb-4">
            <div className="workingProcess_col-content d-flex flex-column justify-content-between gap-3 text-center">
              <div className="workingProcess_col-content-image order-2">
                <img src="../process-4.png" alt="image process 4" />
              </div>
              <div className="workingProcess_col-content-text order-1 d-flex flex-column align-items-center">
                <h3 className="order-3 my-3">Business Digital</h3>
                <div className="line order-2"></div>
                <p className="order-1">04</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default WorkingProcess;
