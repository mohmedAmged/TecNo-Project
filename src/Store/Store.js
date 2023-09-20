import { configureStore } from "@reduxjs/toolkit";
import { canvasReducer } from "./Slices/Canvas";
import { fixedNavReducer } from "./Slices/FIxNav";
import { settingsReducer } from "./Slices/Settings";
import { ServicesReducer } from "./Slices/Services";
import { numsReducer } from "./Slices/Numbers";
import { portfolioReducer } from "./Slices/Portfolio";
import { ourTeamReducer } from "./Slices/OurTeam";
import { testimonialsReducer } from "./Slices/Testimonials";
import { categoriesReducer } from "./Slices/PortfolioCategories";
import authReducer from "./Slices/AuthSlice";
import cartReducer from "./Slices/CartSlice";
export const myStore = configureStore({
    reducer:{
        canvasReducer,
        fixedNavReducer,
        settingsReducer,
        ServicesReducer,
        numsReducer,
        portfolioReducer,
        ourTeamReducer,
        testimonialsReducer,
        categoriesReducer,
        authReducer,
        cartReducer,
    },
});