import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay, Controller} from "swiper/modules"
import { Modal } from 'react-bootstrap';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Slider4.css';
import { scrollingToTop } from '../../Functions/ScrollingToTop';


export default function Slider4() {
  const { data } = useSelector(state => state.portfolioReducer);
  const dataForHomePage = data?.filter(el=> el.key === "home-collection");

  const [show, setShow] = useState(false);
  const [ele,setElement] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setElement(dataForHomePage?.find(el=> el?.id === id));
    setShow(true);
  };
  return (
    <Swiper
      modules={[Autoplay , Controller]}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true ,
      }}
      spaceBetween={30}
      slidesPerView={4}
      centeredSlides={true}
      loop={true}
      lazyPreloadPrevNext={true}
      parallax={true}
      className='swiperParent py-5'
    >
      {dataForHomePage?.map(el=>{
        return (
          <SwiperSlide className='mySlide position-relative w-md-50' key={el?.id}>
            <div className="mySlideOverLay position-absolute"></div>
            <div className="mySlideOverLayinnerContent">
              <button className='btn popupBtn' onClick={() => handleShow(el?.id)}>
                  <i className="bi bi-eye"></i>
              </button>
            </div>
            <div className="mySlideOverLayBottomArrow position-absolute">
            <NavLink className='nav-link' to={`portfolio/${el?.id}`} onClick={()=>scrollingToTop()}>
                <i className="bi bi-arrow-right-short"></i>
            </NavLink>
            </div>
            <img src={`${el?.src}`} alt={`portfolio ${el?.id} image`} />
          </SwiperSlide>
        )
      })}
      {dataForHomePage?.map(el=>{
        return (
          <SwiperSlide className='mySlide position-relative w-md-50' key={(el?.id) * 2}>
            <div className="mySlideOverLay position-absolute"></div>
            <div className="mySlideOverLayinnerContent">
              <button className='btn popupBtn' onClick={() => handleShow(el?.id)}>
                  <i className="bi bi-eye"></i>
              </button>
            </div>
            <div className="mySlideOverLayBottomArrow position-absolute">
            <NavLink className='nav-link' to={`portfolio/${el?.id}`} onClick={()=>scrollingToTop()}>
                <i className="bi bi-arrow-right-short"></i>
            </NavLink>
            </div>
            <img src={`${el?.src}`} alt={`portfolio ${el?.id * 2} image`} />
          </SwiperSlide>
        )
      })}
      {dataForHomePage?.map(el=>{
        return (
          <SwiperSlide className='mySlide position-relative' key={el?.id * 3}>
            <div className="mySlideOverLay position-absolute"></div>
            <div className="mySlideOverLayinnerContent">
              <button className='btn popupBtn' onClick={() => handleShow(el?.id)}>
                  <i className="bi bi-eye"></i>
              </button>
            </div>
            <div className="mySlideOverLayBottomArrow position-absolute">
              <NavLink className='nav-link' to={`portfolio/${el?.id}`} onClick={()=>scrollingToTop()}>
                <i className="bi bi-arrow-right-short"></i>
              </NavLink>
            </div>
            <img src={`${el?.src}`} alt={`portfolio ${el?.id * 3} image`} />
          </SwiperSlide>
        )
      })}
      <Modal className='mainModal' show={show} onHide={handleClose} animation={false}>
        <button className=" btn exiteBtn position-fixed" onClick={handleClose}>X</button>
        <Modal.Body className='modalContent'>
          <img src={`${ele?.src}`} className='modalImage' alt={`portfolio ${ele?.id} image`} />
        </Modal.Body>
      </Modal>
    </Swiper>
  );
}
