import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { setOffPage } from "../../Store/Slices/Canvas";
import { scrollingToTop } from "../../Functions/ScrollingToTop";

import "./Canvas.css";
export function RightOfCanvas() {
  const {onPage,firstLoadEnd} = useSelector(state => state.canvasReducer);
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settingsReducer.data);
  const darkimage = settings.find(set => set.key === "dark-logo");
  const pageMainData = settings.filter(set => set.key === "page-data");
  const pageMainIcons = settings.filter(set => set.key === "icon");

  return (
    <>
      {
        firstLoadEnd && 
        <>
          <div className={`overLay ${onPage ? "overlayAppearance" : "overlayHide"}`} onClick={()=>{
        dispatch(setOffPage());
        }}>
      </div>
      <div className={`myCanvas ${onPage ? "myCanvasAppearance" : "myCanvasHide"}`}>
        <div className="myCanvas-head fs-4">
          <button className=" exite" onClick={()=> {
          dispatch(setOffPage());
          }}>
            X
          </button>
        </div>
        <div className="myCanvas-body">
          <div className="aboutContent mb-2">
            <h5 className="myCanvas-logo">
              <img src={darkimage?.src} alt={darkimage?.alt} />
            </h5>
            <h3>About Us</h3>
            <p>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non.
            </p>
            <NavLink className="btn" to="/about_us" onClick={()=>{
              dispatch(setOffPage());
              scrollingToTop();
              }}>Consultation</NavLink>
          </div>
          <div className="contactContent">
            <h3>Contact Info</h3>
            <ul className="d-flex flex-column gap-3 align-items-start justify-content-start">
              {pageMainData?.map(data => {
                return (
                  <li className="d-flex gap-3 align-items-center" key={data?.id}>
                    <span className="list-icon" ><i className={data?.iconClassName}></i></span>
                    {data?.content}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="socialList">
            <h3 className="mb-4">Social Links :</h3>
            <ul className="d-flex gap-3 align-items-center justify-content-start">
              {
                pageMainIcons?.map(icon => {
                  return (
                    <li className={icon?.name} key={icon?.id}>
                      <a href={icon?.href} className="icon">
                        <i className={icon?.className}></i>
                      </a>
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </div>
        </>
      }
    </>
  );
}
