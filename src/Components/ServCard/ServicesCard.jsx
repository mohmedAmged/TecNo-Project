import { Card } from "react-bootstrap";
import "./ServicesCard.css";
import { NavLink } from "react-router-dom";
import { scrollingToTop } from "../../Functions/ScrollingToTop";

export default function ServicesCard({src,alt,desc,title1,title2,id}) {
  return (
    <Card className="text-center servicesCard">
      <div className="card-image mb-4">
        <img src={src} alt={alt} />
      </div>
      <div className="card-body text-center">
        <h3 className="mb-4">
          <NavLink to={`/services/${id}`} className="nav-link" onClick={()=>scrollingToTop()}>
            {title1}<br />{title2}
          </NavLink>
        </h3>
        <p>{desc}</p>
        <NavLink to={`/services/${id}`} className="nav-link bottomPlus" onClick={()=>scrollingToTop()}>+</NavLink>
      </div>
    </Card>
  )
}
