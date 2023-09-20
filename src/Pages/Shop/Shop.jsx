import { Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import ProductsList from "../../Components/ProductsList/ProductsList";
import "./Shop.css";
import Filteration from "../../Components/Filteration/Filteration";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [loading,setLoading] = useState(true);

  function getAllProducts() {
    fetch(`https://tecno-api.onrender.com/products`)
    .then(res => res.json())
    .then(data => setProducts(data));
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    getAllProducts();
  }, []);

  return (
    <>
      {
        loading ?
        <div className="loaderContainer">
          <div className="loader"></div>
        </div> 
        :
        <>
          <HomeSectionForEveryPage pTitle="Our Products" pName="Shop" />
          <div className="shopMainSection">
          <div className="mainHeading text-center mb-5">
            <p>We Help You</p>
            <div className="separators">
              <span></span>
            </div>
            <h2>
              Our Electronic Collection
            </h2>
          </div>
            <Container className='my-5'>
              <Row>
                <Col lg={9} md={8}>
                  <ProductsList currPage={currPage} setCurrPage={setCurrPage} products={products} /> 
                </Col>
                <Col className="filterationCol" lg={3} md={4}>
                  <Filteration setProducts={setProducts} setCurrPage={setCurrPage} getAllProducts={getAllProducts} />
                </Col>
              </Row>
            </Container>
          </div>
        </>
      }
    </>
  )
}

//url parameters