import { useSelector } from "react-redux";
import "./ArrowComponent.css";
import { scrollingToTop } from "../../Functions/ScrollingToTop";
const ArrowComponent = () => {
  const {isFixedOnPage} = useSelector(state=>state.fixedNavReducer);

  return (
    <div className={`arrowFixed ${isFixedOnPage ? "showArrow" : "hideArrow"}`} onClick={()=>scrollingToTop()}>
      <div className="containerArrow">
        <i className="bi bi-arrow-up-short"></i>
      </div>
    </div>
  );
}

export default ArrowComponent;
