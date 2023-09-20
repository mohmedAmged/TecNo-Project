import { Col, Container, Row } from "react-bootstrap";
import TeamCard from "../../Components/TeamCard/TeamCard";
import "./OurTeam.css";
import { useSelector } from "react-redux";

export function OurTeam() {
  const {data} = useSelector(state=>state.ourTeamReducer);
  const homePageData = data?.filter(el=> el.key === "home-collection");

  return (
    <div className="ourTeamSection">
      <div className="mainHeading text-center mb-5">
        <p>Our Expert Team</p>
        <div className="separators">
          <span></span>
        </div>
        <h2>
          We Are Dedic Features Members
        </h2>
      </div>
      <Container>
        <Row>
          {homePageData?.map(ele=> {
            return (
              <Col key={ele?.id} lg={4} md={6} className="teamCard-Col">
                <TeamCard src={ele?.src} alt={ele?.alt} name={ele?.name} job={ele?.job} id={ele?.id} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  )
}
