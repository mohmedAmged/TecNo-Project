import { Container, Row } from "react-bootstrap";
import "./MediaInfo.css";
import MediaCard from "../../Components/MediaCard/MediaCard";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
export function MediaInfo() {
  const {ref: myRef ,inView: isVisible} = useInView();
  const [isVisibleOnce, setIsVisibleOnce] = useState(false);
  useEffect(()=>{
    if(isVisible) setIsVisibleOnce(true);
  },[isVisible]);

  return (
    <div className="mediaInfo" ref={myRef}>
      <div className="mainHeading text-center mb-5">
        <p>Latest News</p>
        <div className="separators">
          <span></span>
        </div>
        <h2>
          Media Information
        </h2>
      </div>
      <Container>
        <Row>
        {isVisibleOnce && 
          <>
            <MediaCard 
              src={"../media-1.jpg" } 
              alt={"media image 1"} 
              desc={"Thirty-two surrogate mothers charged with human trafficking."} 
              date={"January 8, 2022"}
              />
          </>
        }
        {isVisibleOnce && 
          <>
            <MediaCard
              src={"../media-2.jpg" } 
              alt={"media image 2"} 
              desc={"Thirty-two surrogate mothers charged with human trafficking."} 
              date={"March 6, 2022"}
              />
          </>
        }
        {isVisibleOnce && 
          <>
            <MediaCard 
              src={"../media-3.jpg" } 
              alt={"media image 3"} 
              desc={"Chinese clients have been released after agreeing to keep."} 
              date={"March 6, 2022"}
              />
          </>
        }
        </Row>
      </Container>
    </div>
  );
}
