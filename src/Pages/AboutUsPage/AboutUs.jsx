import { useEffect, useState } from "react";
import { AboutAgency } from "../../Sections/AboutAgency/AboutAgency";
import ContactSection from "../../Sections/ContactSection/ContactSection";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import AllOurTeam from "../../Sections/OurTeam/AllOurTeam";
import WhyChooseUs from "../../Sections/WhyChooseUs/WhyChooseUs";
import WorkingProcess from "../../Sections/WorkingProcess/WorkingProcess";

const AboutUs = () => {
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
          <HomeSectionForEveryPage pName="About Us" pTitle="Company Story" />
          <AboutAgency />
          <WorkingProcess />
          <WhyChooseUs />
          <AllOurTeam />
          <ContactSection src="../subscribe.png" alt="subscribe Image" />
        </>
      }
    </>
  );
}

export default AboutUs
