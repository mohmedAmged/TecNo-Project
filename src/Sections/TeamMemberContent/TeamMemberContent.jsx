import { Col, Container, Row } from "react-bootstrap";
import "./TeamMemberContent.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const TeamMemberContent = ({myData}) => {
  const {data} = useSelector(state=> state.settingsReducer);
  const social = data?.filter(el=> el?.key === "icon");
  const {ref: myRef ,inView: isVisible} = useInView();
  const [isVisibleOnce, setIsVisibleOnce] = useState(false);
  useEffect(()=>{
    if(isVisible) setIsVisibleOnce(true);
  },[isVisible]);

  return (
    <div className="teamMemberContent">
      <Container>
        <Row className="g-4">
          <Col lg={8} className="pe-3 textColumnTeamMember">
            <h2>
              {myData?.name}
            </h2>
            <p className="job">{myData?.job}</p>
            <ul className="social justify-content-start mt-5 mb-4 gap-3">
              {social?.map(icon =>{
                return (
                  <li key={icon.id}>
                    <a href={icon?.href}>
                      <i className={icon?.className}></i>
                    </a>
                  </li>
                );
              })}
            </ul>
            <h4>Skills</h4>
            <ul className="skills flex-column align-items-start gap-1">
              {myData?.skills?.map((skill,i)=>{
                return (
                  <li key={skill[0]} className="skillContainer">
                    <p className="topli d-flex justify-content-between">
                      <span>{skill[0]}</span>
                      <span>{skill[1]}</span>
                    </p>
                    <div ref={myRef} className="myProgress">
                      <div className="pinkProgress"></div>
                      <div className={`black ${isVisibleOnce && ("getWidthPower" + i)}`}></div>
                      <div className={`blackbtn ${isVisibleOnce && ("getProgressPower" + i)}`}></div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Col>
          <Col lg={4} className="teamMemberContent-imageContainer">
            <img src={myData?.src} alt={myData?.alt} />
          </Col>
          <Col lg={12}>
            <p className="firstp mb-4">
              {myData?.userDetails1}
            </p>
            <p className="secondp">
              {myData?.userDetails2}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeamMemberContent;
