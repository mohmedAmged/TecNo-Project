import { NavLink } from "react-router-dom";
import "./MyNavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { setOnPage } from "../../Store/Slices/Canvas"
import { scrollingToTop } from "../../Functions/ScrollingToTop";
import { Container, Nav, Navbar } from "react-bootstrap";
import { logout } from "../../Store/Slices/AuthSlice";
import Swal from "sweetalert2";

export function MyNavBar() {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.settingsReducer.data);
  const lightimage = settings.find(set=>set.key === "light-logo");
  const totalItems = useSelector(state => state.cartReducer.totalItems);
  const isAuth = useSelector(state => state.authReducer.isAuth);

  return (
    <>
      <Navbar expand="lg" className={`position-relative navbarTop`}>
        <Container>
          <NavLink className="nav-link logo" to="/" onClick={()=>scrollingToTop()}>
            <img src={lightimage?.src} alt={lightimage?.alt} />
          </NavLink>
          {isAuth &&
          <div className="me-4 ms-auto cartResponsiveContent d-none cartLink fs-3 logoutIcon" onClick={ ()=> { 
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Logout Done Successfully',
              showConfirmButton: false,
              timer: 1000
            })
            dispatch(logout());
            scrollingToTop();
            }}>
            <i className="bi bi-box-arrow-left"></i>
          </div>}
          <NavLink className={`nav-link me-4 cartLink fs-3 cartResponsiveContent d-none ${!isAuth && "mx-auto"}`} to="/cart">
            <i className="bi bi-basket"></i>
            <span className="cartCounter">{isAuth ? totalItems : "0"}</span>
          </NavLink>
          <Navbar.Toggle className={`${isAuth ? "toggler" : ""}`} aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto left-content gap-3 align-items-center">
              <NavLink className={`nav-link position-relative link`} to="/" onClick={()=>scrollingToTop()}>
                Home
              </NavLink>
              <NavLink className={`nav-link position-relative link`} to="/about" onClick={()=>scrollingToTop()}>
                About
              </NavLink>
              <NavLink className={`nav-link postion-relative link`} to="/services" onClick={()=>scrollingToTop()}>
                Services
              </NavLink>
              <NavLink className={`nav-link postion-relative link`} to="/portfolio" onClick={()=>scrollingToTop()}>
                Portfolio
              </NavLink>
              <NavLink className={`nav-link postion-relative link`} to="/products" onClick={()=>scrollingToTop()}>
                Our Products
              </NavLink>
              <NavLink className={`nav-link postion-relative link`} to="/contact_us" onClick={()=>scrollingToTop()}>
                Contact Us
              </NavLink>
              {
                !isAuth &&
              <NavLink className={`nav-link postion-relative link`} to="/login" onClick={() => scrollingToTop()}>
                Login
              </NavLink>
              }
              <div className="nav-link right-icons d-flex justify-end align-items-center ms-0">
                {isAuth &&
                <div className="me-4 cartLink fs-3 logoutIcon" onClick={ ()=> { 
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Logout Done Successfully',
                    showConfirmButton: false,
                    timer: 1000
                  })
                  dispatch(logout());
                  scrollingToTop()
                  }}>
                  <i className="bi bi-box-arrow-left"></i>
                </div>}
                <div className="me-4 cartContainer">
                  <NavLink className={`nav-link cartLink fs-3`} to="/cart" onClick={() => scrollingToTop()}>
                    <i className={`bi bi-basket`}></i>
                    <span className="cartCounter">{isAuth ? totalItems : "0"}</span>
                  </NavLink>
                </div>
                <div onClick={()=> {
                  dispatch(setOnPage());
                  }} className="canvasToggler">
                  <button className="nav-link fs-3 postion-relative windowLink" >
                    <i className="bi bi-microsoft rounded"></i>
                  </button>
                </div>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}