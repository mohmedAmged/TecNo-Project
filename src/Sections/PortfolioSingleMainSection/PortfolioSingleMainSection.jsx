import { Carousel, Col, Container, Row } from "react-bootstrap";
import "./PortfolioSingleMainSection.css";

const PortfolioSingleMainSection = ({data}) => {
    return (
        <div className="portfolioSingleMainSection">
            <Container>
                <Row className="g-3">
                    <Col md={8} className="carouselPart">
                        <Carousel indicators={false} className='main-carousel'>
                            <Carousel.Item className='main-carousel__item'>
                            <img className='h-100 w-100' src="../news-10.jpg" alt="first slider image" />
                            </Carousel.Item>
                            <Carousel.Item className='main-carousel__item'>
                            <img className='h-100 w-100' src="../news-11.jpg" alt="second slider image" />
                            </Carousel.Item>
                            <Carousel.Item className='main-carousel__item'>
                            <img className='h-100 w-100' src="../news-12.jpg" alt="third slider image" />
                            </Carousel.Item>
                            <Carousel.Item className='main-carousel__item'>
                            <img className='h-100 w-100' src="../news-13.jpg" alt="fourth slider image" />
                            </Carousel.Item>
                        </Carousel>
                    </Col>
                    <Col md={4} className="portfolioImage">
                        <img src={data?.src} alt={data?.alt} />
                    </Col>
                    <Col lg={8} className="portfolioTextContent">
                        <p className="portfolioTop mb-3 mt-5">
                            {data?.description1}
                        </p>
                        <p className="portfolioBottom mb-5">
                            {data?.description2}
                        </p>
                        <h3 className="mb-4">
                            Challenge & Solutions
                        </h3>
                        <p className="challengeP">
                            {data?.challenge}
                        </p>
                        <ul className="flex-column align-items-start gap-2 mt-4">
                            {data?.challengelist?.map((li,i)=>{
                                return (
                                    <li key={i} className="challengeListItem d-flex gap-2">
                                        <i className="bi bi-star-fill"></i>
                                        <span>{li}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </Col>
                    <Col lg={4} className="position-relative">
                        <div className="backGoundImage position-absolute">
                            <img src="../dash.png" alt="backGround Image" />
                        </div>
                        <div className="boxContentPortfolio mt-4">
                            <h4>Project Information</h4>
                            <ul className="flex-column align-items-start gap-0 mt-4">
                                <li className="d-flex justify-content-between w-100 flex-wrap">
                                    <h6>Client :</h6>
                                    <p>{data?.client}</p>
                                </li>
                                <li className="d-flex justify-content-between w-100 flex-wrap">
                                    <h6>Date :</h6>
                                    <p>{data?.date}</p>
                                </li>
                                <li className="d-flex justify-content-between w-100 flex-wrap">
                                    <h6>Category :</h6>
                                    <p>Strategy , Bussniss</p>
                                </li>
                                <li className="d-flex justify-content-between w-100 flex-wrap">
                                    <h6>Class :</h6>
                                    <p>{data?.class}</p>
                                </li>
                                <li className="d-flex justify-content-between w-100 flex-wrap">
                                    <h6>Website :</h6>
                                    <p>{data?.website}</p>
                                </li>
                                <li className="d-flex justify-content-between w-100 flex-wrap">
                                    <h6>Value :</h6>
                                    <p>{data?.price}</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PortfolioSingleMainSection;
