import { NavLink } from "react-router-dom";
import "./HomeSectionForEveryPage.css";
import { Container } from "react-bootstrap";
import { scrollingToTop } from "../../Functions/ScrollingToTop";
const HomeSectionForEveryPage = ({pName,pTitle}) => {
    return (
        <div className="HomeSectionForEveryPage position-relative">
            <div className="HomeSectionForEveryPage__left-top position-absolute">
                <img src="../icon-6.png" alt="animation image left" />
            </div>
            <div className="HomeSectionForEveryPage__left-bottom position-absolute">
                <img src="../icon-7.png" alt="animation img left bottom" />
            </div>
            <div className="HomeSectionForEveryPage__center-left-top position-absolute">
                <img src="../icon-8.png" alt="animation img center left" />
            </div>
            <div className="HomeSectionForEveryPage__center-top position-absolute">
                <img src="../icon-9.png" alt="animationimg center top" />
            </div>
            <div className="HomeSectionForEveryPage__center-bottom position-absolute">
                <img src="../icon-10.png" alt="animation img center bottom" />
            </div>
            <div className="HomeSectionForEveryPage__right position-absolute">
                <img src="../icon-6.png" alt="animation icon right" />
            </div>
            <Container className="h-100">
                <div className="homeSectionEveryPage__content position-relative">
                    <div className="HomeSectionForEveryPage__title">
                        <h1>{pTitle}</h1>
                    </div>
                    <div className="HomeSectionForEveryPage__pName">
                        <h4 className="d-flex justify-content-between align-items-center gap-3">
                            <NavLink className="nav-link" to="/" onClick={() => scrollingToTop()}>Home </NavLink>
                            <i className="bi bi-arrow-right-short"></i>
                            {pName}
                        </h4>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default HomeSectionForEveryPage
