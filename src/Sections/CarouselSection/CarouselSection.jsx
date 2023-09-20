import {Swiper,SwiperSlide} from 'swiper/react';
import {Autoplay, Controller} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './CarouselSection.css';
import { Container } from 'react-bootstrap';

const CarouselSection = () => {
    return (
        <section>
            <Container className='mb-5 mt-4 pb-5 carouselSection'>
                <Swiper
                    modules={[Autoplay , Controller]}
                    autoplay={{
                        delay: 1500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true ,
                    }}
                    spaceBetween={25}
                    slidesPerView={5}
                    centeredSlides={true}
                    loop={true}
                    lazyPreloadPrevNext={true}
                    parallax={true}
                    className='p-0 carouselSectionMainSwiper'
                    >
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s1.png" className='w-100 p-0' alt="image Slider 1" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s2.png" className='w-100 p-0' alt="image Slider 2" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s3.png" className='w-100 p-0' alt="image Slider 3" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s4.png" className='w-100 p-0' alt="image Slider 4" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s5.png" className='w-100 p-0' alt="image Slider 5" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s1.png" className='w-100 p-0' alt="image Slider 1" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s2.png" className='w-100 p-0' alt="image Slider 2" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s3.png" className='w-100 p-0' alt="image Slider 3" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s4.png" className='w-100 p-0' alt="image Slider 4" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s5.png" className='w-100 p-0' alt="image Slider 5" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s1.png" className='w-100 p-0' alt="image Slider 1" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s2.png" className='w-100 p-0' alt="image Slider 2" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s3.png" className='w-100 p-0' alt="image Slider 3" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s4.png" className='w-100 p-0' alt="image Slider 4" />
                    </SwiperSlide>
                    <SwiperSlide className='carouselSectoinSwiperContent p-3'>
                        <img src="../s5.png" className='w-100 p-0' alt="image Slider 5" />
                    </SwiperSlide>
                </Swiper>
            </Container>
        </section>
    );
}

export default CarouselSection;



