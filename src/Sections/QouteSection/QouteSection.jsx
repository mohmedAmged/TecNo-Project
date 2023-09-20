import { NavLink } from 'react-router-dom';
import QouteForm from '../../Components/QouteForm/QouteForm';
import './QouteSection.css';
import { useSelector } from 'react-redux';
import Counter from './Counter';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

export function QouteSection() {
  const { data , isLoadingNums } = useSelector((state) => state.numsReducer);
  const {ref: myNumsRef ,inView: isVisible} = useInView();
  const [isVisibleOnce, setIsVisibleOnce] = useState(false);
  useEffect(()=>{
    if(isVisible) setIsVisibleOnce(true);
  },[isVisible]);

  return (
    <>
    {!isLoadingNums &&
      <div className="qouteSection position-relative"  ref={myNumsRef}>
        <div className="womanTopImage position-absolute">
          <img src="../woman-icon.png" alt="image for a woman reading book" />
        </div>
      <div className="container">
        <div className="mainHeading text-center mb-5">
          <p>Ready To Grow</p>
          <div className="separators">
            <span></span>
          </div>
          <h2>Get Your Free Quote Today</h2>
        </div>
        <QouteForm />
        <p className="privacy">
          Please check our{' '}
          <NavLink className="nav-link d-inline" to="/">
            Privacy Policy
          </NavLink>{' '}
          to find out how we manage and protect your data.
        </p>
        <div className="row mb-5 g-3">
          {isVisibleOnce &&
            data?.map((el) => (
              <Counter count={el?.num} title={el?.title} key={el?.id} />
            ))}
        </div>
      </div>
    </div>
    }
    </>
  );
}
