import { useEffect, useState } from "react";
import ContactPageForm from "../../Sections/ContactPageForm/ContactPageForm";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import ContactGPS from "../ContactGPS/ContactGPS";
import "./ContactUs.css";
const ContactUs = () => {
  const [loading,setLoading] = useState(true);
  useEffect(()=>{
    setLoading(false);
  },[loading]);

  return (
    <>
      {
        loading ?
        <div className="loaderContainer">
          <div className="loader"></div>
        </div> 
        :
        <>
          <HomeSectionForEveryPage pName="Contact Us" pTitle="Contact Us" />
          <ContactPageForm />
          <ContactGPS />
        </>
      }
    </>
  );
}

export default ContactUs;