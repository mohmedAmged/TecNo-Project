import { useEffect, useState } from "react";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import "./SinglePortfolio.css";
import { useParams } from "react-router";
import PortfolioSingleMainSection from "../../Sections/PortfolioSingleMainSection/PortfolioSingleMainSection";
import ContactSection from "../../Sections/ContactSection/ContactSection";
const URL = "https://tecno-api.onrender.com/portfolio/";

const SinglePortfolio = () => {
    const { id } = useParams();
    const [myCurrentPortfolio,setMyCurrentPortfolio] = useState({});
    const [loading , setLoading] = useState(true);

    useEffect(()=>{
        fetch(URL + id)
            .then(res => res.json())
            .then(data => setMyCurrentPortfolio(data));
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
                    <HomeSectionForEveryPage pTitle={myCurrentPortfolio?.head} pName={myCurrentPortfolio?.head} />
                    <PortfolioSingleMainSection data={myCurrentPortfolio} />
                    <ContactSection src="../contact.png" alt="contact Image" />
                </>
            }
        </>
    );
}

export default SinglePortfolio;
