import './App.css';
import {MyNavBar} from './Components/MyNav/MyNavBar';
import MyFixedNav from './Components/MyfixedNav/MyFixedNav';
import { RightOfCanvas } from './Components/MyfixedNav/RightOfCanvas';
import { useDispatch, useSelector } from 'react-redux';
import { setFixedOffPage, setFixedOnPage } from './Store/Slices/FIxNav';
import { useEffect } from "react";
import { Home } from './Pages/HomePage/Home';
import { Route, Routes } from 'react-router';
import { getAllNums } from './Store/Functions/NumbersFunc';
import { getAllPortFolioData } from "./Store/Functions/PortfolioFunc";
import { getOurTeamAllData } from "./Store/Functions/OurTeamFunc";
import { getAllTestimonials } from './Store/Functions/TestimonialsFunc';
import { getAllSettingseData } from './Store/Functions/SettingsFunc';
import Footer from './Sections/Footer/Footer';
import ArrowComponent from './Components/ArrowComponent/ArrowComponent';
import AboutUs from './Pages/AboutUsPage/AboutUs';
import Services from './Pages/ServicesPage/Services';
import CarouselSection from './Sections/CarouselSection/CarouselSection';
import Portfolio from './Pages/Portfolio/Portfolio';
import ContactUs from './Pages/ContactUs/ContactUs';
import SingleService from './Pages/SingleService/SingleService';
import { getServices } from './Store/Functions/ServicesFunc';
import SingleTeam from './Pages/SingleTeam/SingleTeam';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import SinglePortfolio from './Pages/SinglePortfolio/SinglePortfolio';
import Cart from './Pages/Cart/Cart';
import Shop from './Pages/Shop/Shop';
import IsLoggedIn from './Components/LoggedInCheck/IsLoggedIn';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import { calcQuantities, getCartData, updateCartData } from './Store/Slices/CartSlice';
import SingleProduct from './Pages/SingleProduct/SingleProduct';

function App() {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const userId = useSelector(state => state.authReducer.userId);
  const cart = useSelector(state => state.cartReducer.cart);
  const {isFirstLoadEnds} = useSelector(state=>state.fixedNavReducer);
  const {isLoading , isError , errorMSG} = useSelector(state=>state.settingsReducer);
  const {isLoadingServices , isErrorServices , servicesErrorMSG} = useSelector(state=>state.ServicesReducer);
  const {isLoadingPortfolio , isErrorPortfolio , portfolioErrorMSG} = useSelector(state=>state.portfolioReducer);
  const {isLoadingPortfolioCategories ,isErrorPortfolioCategories , portfolioCategoriesErrorMSG} = useSelector(state=>state.categoriesReducer);
  const {isLoadingOurTeam , isErrorOurTeam , teamErroMSG} = useSelector(state=>state.ourTeamReducer);
  const {isLoadingNums , isErrorNums , numsErrorMSG} = useSelector(state=>state.numsReducer);
  const {isLoadingTestimonials , isErrorTestimonials , testimonialsErrorMSG} = useSelector(state=>state.testimonialsReducer);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    if(scrollY >= 450) {
      dispatch(setFixedOnPage());
    } else if( scrollY < 450){
      dispatch(setFixedOffPage());
    }
  });

  useEffect(()=>{
    dispatch(getAllSettingseData());
    dispatch(getAllNums());
    dispatch(getAllPortFolioData());
    dispatch(getOurTeamAllData());
    dispatch(getAllTestimonials());
    dispatch(getServices());
  },[]);

  useEffect(() => {
    if(isAuth){
      dispatch(getCartData(userId));
    }
  }, [dispatch, isAuth, userId]);

  useEffect(() => {
    dispatch(updateCartData({id: userId, cart}));
    dispatch(calcQuantities());
  }, [cart, dispatch, userId]);

  const allLoading = isLoading && 
  isLoadingPortfolioCategories && 
  isLoadingServices && 
  isLoadingNums && 
  isLoadingPortfolio && 
  isLoadingOurTeam && 
  isLoadingTestimonials;
  if(allLoading)
  return (
    <div className="loaderContainer">
      <div className="loader"></div>
    </div> 
  );

  if(isError) return <ErrorPage errorMSG={errorMSG} />
  if(isErrorServices) return <ErrorPage errorMSG={servicesErrorMSG} />
  if(isErrorPortfolio) return <ErrorPage errorMSG={portfolioErrorMSG} />
  if(isErrorPortfolioCategories) return <ErrorPage errorMSG={portfolioCategoriesErrorMSG} />
  if(isErrorOurTeam) return <ErrorPage errorMSG={teamErroMSG} />
  if(isErrorNums) return <ErrorPage errorMSG={numsErrorMSG} />
  if(isErrorTestimonials) return <ErrorPage errorMSG={testimonialsErrorMSG} />


  {if(!isError 
    && !isErrorServices 
    && !isErrorPortfolio 
    && !isErrorPortfolioCategories 
    && !isErrorOurTeam 
    && !isErrorNums 
    && !isErrorTestimonials){
    return (
      <>
      {
        !allLoading &&
        <>
          <MyNavBar />
          {isFirstLoadEnds && <> <MyFixedNav /> <ArrowComponent /> </>}
          <RightOfCanvas />
        </>
      }
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/ourteam/:id' element={<SingleTeam />} />
          <Route path='/services' element={<Services />} />
          <Route path='/services/:id' element={<SingleService />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/portfolio/:id' element={<SinglePortfolio />} />
          <Route path='/products' element={<Shop />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path='/contact_us' element={<ContactUs />} />
          <Route path='/cart' element={
          <IsLoggedIn type="isAuth">
              <Cart />
          </IsLoggedIn>
          } />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<ErrorPage />} />
        </Routes>
        {
          !allLoading && 
          <>
            <CarouselSection />
            <Footer />
          </>
        }
      </>
    );
  }}
}

export default App;