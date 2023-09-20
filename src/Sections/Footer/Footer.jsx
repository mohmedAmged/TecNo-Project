import { useSelector } from "react-redux";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";
import { scrollingToTop } from "../../Functions/ScrollingToTop";

const Footer = () => {
  const {data} = useSelector(state => state.settingsReducer);
  const {data:portfoioData} = useSelector(state => state.portfolioReducer);
  const logo = data.find(el => el?.key === "light-logo");
  const pageData = data.filter(el=> el?.key === "icon");
  const copyWrite = data.find(el=> el?.key === "copy-write");
  const portfolioHomeCollection = portfoioData?.filter(el=> el.key === "home-collection");

  return (
    <div className="footer">
      <div className="footerUpperContent">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-3 col-md-6 ps-0">
            <div className="logoFooterImage">
              <NavLink className="nav-link" to="/" onClick={()=>scrollingToTop()}><img src={logo?.src} alt={logo?.alt} /></NavLink>
            </div>
            <p className="bottomLogoFooterImage">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore aliqua.
            </p>
            <ul className="footerListOfDetails d-flex flex-column align-items-start gap-2">
              <li>
                <span>Location:</span>
                {` ${pageData[0]?.content}`}
              </li>
              <li>
                <span>Email:</span>
                {` ${pageData[2]?.content}`}
              </li>
              <li>
                <span>Phone:</span>
                {` ${pageData[1]?.content}`}
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Quick Link</h3>
            <ul className="listOfLinks d-flex flex-column align-items-start gap-0">
              <li><NavLink className="nav-link" to="/" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> Home</NavLink></li>
              <li><NavLink className="nav-link" to="about" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> About Us</NavLink></li>
              <li><NavLink className="nav-link" to="portFolio" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> PortFolio</NavLink></li>
              <li><NavLink className='nav-link' to="products" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> Our Products</NavLink></li>
              <li><NavLink className="nav-link" to="contact_us" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> Contact Us</NavLink></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3>Services</h3>
            <ul className="listOfLinks d-flex flex-column align-items-start gap-0">
              <li><NavLink className="nav-link" to="servicedetails/id" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> Enterprise Consulting</NavLink></li>
              <li><NavLink className="nav-link" to="servicedetails/id" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> Growth Tracking</NavLink></li>
              <li><NavLink className="nav-link" to="servicedetails/id" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> Marketing Research</NavLink></li>
              <li><NavLink className='nav-link' to="servicedetails/id" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> Strategy & Planning</NavLink></li>
              <li><NavLink className="nav-link" to="servicedetails/id" onClick={()=>scrollingToTop()}><i className="bi bi-caret-right"></i> Super Fast & Great Security</NavLink></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6 pe-0">
            <h3>Our Projects</h3>
            <ul className="listOfImages gap-0 flex-wrap">
              {portfolioHomeCollection?.map(el =>{
                return (
                  <li key={el?.id} className="w-50 p-2">
                    <NavLink className="nav-link" to={`portfolio/${el?.id}`} onClick={()=>scrollingToTop()}>
                      <img src={el?.src} alt={el?.alt} />
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      </div>
      <div className="footerBottomContent">
        <Container>
          <div className="d-flex justify-content-between align-items-center flex-wrap">
            <div className="copyWriteContent">
              {copyWrite?.content}
            </div>
            <div className="socialContentBottomFooter">
              <div className="rightContentBottomFooter d-flex gap-2 flex-wrap">
                <span>
                  Follow Us :
                </span>
                <ul className="socialLinksBottomFoote gap-3">
                {pageData?.map(el => {
                  return (
                    <li key={el?.id}>
                      <a href={el?.href}>
                        <i className={`${el?.className} me-2`}></i>
                      </a>
                    </li>
                  );
                })}
                </ul>
              </div>
            </div>
            </div>
        </Container>
      </div>
    </div>
  );
}
export default Footer;
