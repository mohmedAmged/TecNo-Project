import { useEffect, useState } from "react";
import ErrorSection from "../../Sections/ErrorSection/ErrorSection";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import "./ErrorPage.css";

const ErrorPage = ({errorMSG}) => {
  const [loading ,setLoading] = useState(true);

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
          <HomeSectionForEveryPage pTitle="Not Found" pName={errorMSG || "404 - Not Found"} />
          <ErrorSection errorMSG={errorMSG} />
        </>
      }
    </>
  );
}

export default ErrorPage;
