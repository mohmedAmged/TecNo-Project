import { useEffect, useState } from "react";
import HomeSectionForEveryPage from "../../Sections/EveryPageHomeSection/HomeSectionForEveryPage";
import "./SingleTeam.css";
import { useParams } from "react-router";
import TeamMemberContent from "../../Sections/TeamMemberContent/TeamMemberContent";
const URL = "https://tecno-api.onrender.com/ourteam/";

const SingleTeam = () => {
    const { id } = useParams();
    const [currentMember,setCurrentMember] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch(URL + id)
            .then(res => res.json())
            .then(data => setCurrentMember(data));
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
            <HomeSectionForEveryPage pTitle="Our Team Details" pName={currentMember?.name} />
            <TeamMemberContent myData={currentMember} />
        </>
        }
        </>
    );
}

export default SingleTeam;
