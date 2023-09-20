import { AboutAgency } from "../../Sections/AboutAgency/AboutAgency";
import { HomeSection } from "../../Sections/HomeSection/HomeSection";
import { QouteSection } from "../../Sections/QouteSection/QouteSection";
import { ServicesSection } from "../../Sections/ServicesSection/ServicesSection";
import "./Home.css";
import OurWork from "../../Sections/OurWork/OurWork";
import { OurProjects } from "../../Sections/OurProjects/OurProjects";
import { OurTeam } from "../../Sections/OurTeam/OurTeam";
import { TestimonialsSection } from "../../Sections/Testimonials/TestimonialsSection";
import { MediaInfo } from "../../Sections/MediaInfo/MediaInfo";
import ContactSection from "../../Sections/ContactSection/ContactSection";
import { useEffect, useState } from "react";

export function Home() {
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
        <HomeSection />
        <ServicesSection />
        <AboutAgency />
        <QouteSection />
        <OurWork />
        <OurProjects />
        <OurTeam />
        <TestimonialsSection />
        <MediaInfo />
        <ContactSection src="../contact.png" alt="contact image" />
      </>
    }
    </>
  );
}
