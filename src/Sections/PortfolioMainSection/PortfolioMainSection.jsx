import { Container, Modal, Row } from "react-bootstrap";
import "./PortfolioMainSection.css";
import { useState } from "react";
import PortfolioCategories from "../../Components/PortfolioCategories/PortfolioCategories";
import PortfolioCard from "../../Components/PortfolioCard/PortfolioCard";
import { useSelector } from "react-redux";

const PortfolioMainSection = () => {
  const { data } = useSelector(state => state.portfolioReducer);
  const portfolioSectionData = data?.filter(el => el?.key === "portfolio-collection");
  const [myData ,setMyData] = useState([]);

  const [show, setShow] = useState(false);
  const [ele,setElement] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setElement(portfolioSectionData?.find(el => +el?.id === +id));
    setShow(true);
  };
  return (
    <div className="portfolioMainSection">
      <PortfolioCategories setMyData={setMyData} portfolioSectionData={portfolioSectionData} />
      <Container>
        <Row className="rowOfPortfolioCards">
          {
            (myData.length > 0) ?
            myData?.map(el => <PortfolioCard key={el?.id} handleShow={handleShow} data={el} /> ):
            portfolioSectionData?.map(el => <PortfolioCard key={el?.id} handleShow={handleShow} data={el} />)
          }
        </Row>
      </Container>
      <Modal className='mainModal' show={show} onHide={handleClose} animation={false}>
        <button className="btn exiteBtn position-fixed" onClick={handleClose}>X</button>
        <Modal.Body className='modalContent'>
          <img src={`${ele.src}`} className='modalImage' alt={`portfolio ${ele.id} image`} />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default PortfolioMainSection;