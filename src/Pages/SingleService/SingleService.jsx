import { useParams } from "react-router";
import "./SingleService.css";
import { useEffect, useState } from "react";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import ServiceContentShow from "../../Sections/ServiceContentShow/ServiceContentShow";
const URL = "https://tecno-api.onrender.com/services/";

const SingleService = () => {
    const { id } = useParams();
    const [myCurrentService,setMyCurrentService] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(URL + id)
            .then(res => res.json())
            .then(data => setMyCurrentService(data));
        setLoading(false);
    },[loading]);

    return (
        <>
            {loading ? 
            <div className="loaderContainer">
                <div className="loader"></div>
            </div> 
            :
            <>
                <HomeSectionForEveryPage pTitle="Services Details" pName={(myCurrentService?.name1 ?? myCurrentService?.name) + (myCurrentService?.name2 ?? "")} />
                <ServiceContentShow data={myCurrentService} />
            </>
            }
        </>
    );
}

export default SingleService;
