import { useSelector } from "react-redux";
import "./TeamCard.css";
import { useNavigate } from "react-router";
import { scrollingToTop } from "../../Functions/ScrollingToTop";

export default function TeamCard({src,alt,name,job,id}) {
  const {data} = useSelector(state=>state.settingsReducer);
  const iconsData = data?.filter(el => el.key === "icon");
  const navigate = useNavigate();

  return (
    <div className="teamCard position-relative">
      <div className="teamCardImg me-auto" onClick={()=> navigate(`/ourteam/${id}`)} >
        <img src={src} alt={alt} />
      </div>
      <div className="teamCardText ms-auto">
        <ul className="teamList position-absolute">
          {iconsData?.map(icon=> {
            return (
              <li key={icon?.id}>
                <a href={icon?.href}>
                  <i className={`${icon?.className} iconTeamList`}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="bottomText position-absolute">
          <h3 onClick={() => {
            navigate(`/ourteam/${id}`);
            scrollingToTop();
            }}>{name}</h3>
          <p>{job}</p>
        </div>
      </div>
    </div>
  );
}
