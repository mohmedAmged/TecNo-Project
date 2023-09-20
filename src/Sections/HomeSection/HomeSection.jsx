import { HomeSectionSlider } from "../../Components/HomeSectionSlider/HomeSectionSlider";
import "./HomeSection.css";

export function HomeSection() {
  return (
    <div className="homeSection">
      <div className="left-image position-absolute">
        <img src="../vector-3.png" alt="left-image animated" />
      </div>
      <div className="right-image position-absolute">
        <img src="../vector-3.png" alt="right-image animated" />
      </div>
      <div className="center-top-image position-absolute">
        <img src="../icon-7.png" alt="center-top-image animated" />
      </div>
      <div className="center-bottom-image position-absolute">
        <img src="../icon-6.png" alt="center-bottom-image animated" />
      </div>
      <HomeSectionSlider />
    </div>
  )
}
