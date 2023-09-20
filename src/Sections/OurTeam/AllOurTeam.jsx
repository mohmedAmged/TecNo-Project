import { useSelector } from "react-redux";
import "./OurTeam.css";
import { Col, Container, Row } from "react-bootstrap";
import TeamCard from "../../Components/TeamCard/TeamCard";

const AllOurTeam = () => {
  const {data} = useSelector(state=>state.ourTeamReducer);

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
        <Row className="g-4">
          {data?.map(ele=> {
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

export default AllOurTeam
