import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialsSlider.css';
import { useSelector } from 'react-redux';

export function TestimonialsSlider() {
  const { data } =useSelector(state => state.testimonialsReducer);

  return (
    <Swiper
    modules={[Autoplay]}
    autoplay={{
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true ,
    }}
    spaceBetween={0}
    slidesPerView={1}
    centeredSlides={true}
    loop={true}
    lazyPreloadPrevNext={true}
    parallax={true}
    className='testimonialsSwiperParent'
    >
      {
        data?.map(el=> {
          return (
            <SwiperSlide key={el?.id}>
              <div className="testimonialsCard rounded">
                <div className="testimonialsCardTopContent d-flex justify-content-between align-items-center">
                  <div className="testimonialsCardDesc  d-flex justify-content-between align-items-center gap-5">
                    <div className="image">
                      <img src={el?.src} alt={el?.alt} />
                    </div>
                    <div>
                      <h3>{el?.name}</h3>
                      <p>{el?.job}</p>
                    </div>
                  </div>
                  <div className="testimonialsCardIcons">
                    <i className="bi bi-quote"></i>
                  </div>
                </div>
                <div className="testimonialsCardBottomContent">
                  <p>{el?.demo}</p>
                </div>
              </div>
            </SwiperSlide>
          )
        })
      }
    </Swiper>
  )
}
