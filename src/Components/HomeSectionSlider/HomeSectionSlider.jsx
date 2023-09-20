import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import "./HomeSectionSlider.css";
import { NavLink } from 'react-router-dom';
import { scrollingToTop } from '../../Functions/ScrollingToTop';

export function HomeSectionSlider() {
  return (
    <div className="homeSectionContainer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 p-5 pe-0 position-relative text-col">
            <div className="backWhite"></div>
            <div className="text">
              <div className="stretchedElements mb-4">
                <p></p>
                <p></p>
              </div>
              <p className="top mt-4 mb-4">
                IT Design & Consulting
              </p>
              <h1>
                Degital Market For Ultimate Brands
              </h1>
              <p className="bottom">
                Increase productivity by simple to-do app. app to manage your personal budgets.
              </p>
              <button className='btn'>
                <NavLink className="nav-link" to="/products" onClick={()=>scrollingToTop()}>
                  Get Start Now
                </NavLink>
              </button>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 imageContainer">
            <div className="image">
              <div className="socialContanier">
                <ul className='position-relative w-100 h-100 pt-1'>
                  <li className='position-absolute twitter'>
                    <i className='bi bi-twitter'></i>
                  </li>
                  <li className='position-absolute instagram'>
                    <i className="bi bi-instagram"></i>
                  </li>
                  <li className='position-absolute facebook'>
                    <i className='bi bi-facebook'></i>
                  </li>
                </ul>
              </div>
              <img className='w-100 h-100' src="../home2.png" alt="home section image" />
              <div className="backBlack"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
