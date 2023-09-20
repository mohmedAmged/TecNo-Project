import { useDispatch } from "react-redux";
import ContactSection from "../../Sections/ContactSection/ContactSection";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import PortfolioMainSection from "../../Sections/PortfolioMainSection/PortfolioMainSection";
import "./Portfolio.css";
import { useEffect, useState } from "react";
import { getAllCategories } from "../../Store/Functions/PortfolioCategoriesFunc";

const Portfolio = () => {
  const [loading ,setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getAllCategories());
    setLoading(false);
  },[loading]);

  return (
    <>
      {
        (loading) ?
        <div className="loaderContainer">
          <div className="loader"></div>
        </div> 
        :
        <>
          <HomeSectionForEveryPage pName="Portfolio" pTitle="Portfolio" />
          <PortfolioMainSection />
          <ContactSection src="../subscribe.png" alt="subscribe Image " />
        </>
      }
    </>
  );
}

export default Portfolio;
