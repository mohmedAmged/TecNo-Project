import { useEffect, useState } from "react";
import ContactSection from "../../Sections/ContactSection/ContactSection";
import DigitalServices from "../../Sections/DegitalServices/DigitalServices";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import { ServicesSection } from "../../Sections/ServicesSection/ServicesSection";

const Services = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
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
          <HomeSectionForEveryPage pName="Our Services" pTitle="Our Services" />
          <DigitalServices />
          <ServicesSection />
          <ContactSection src="../subscribe.png" alt="subscribe Image " />
        </>
      }
    </>
  )
}

export default Services;
