import { createSlice } from "@reduxjs/toolkit";
import { getAllCategories } from "../Functions/PortfolioCategoriesFunc";
const initialState = {
    data: [],
    isLoadingPortfolioCategories: false,
    isErrorPortfolioCategories: false,
    portfolioCategoriesErrorMSG: ""
}

const portfolioCategoriesSlice = createSlice({
    name: "portfolioCategories",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllCategories.pending]: (state) => {
            state.isLoadingPortfolioCategories = true;
        },
        [getAllCategories.fulfilled]: (state,action) => {
            state.isLoadingPortfolioCategories = false;
            state.data = action.payload;
        },
        [getAllCategories.rejected]: (state , action)=> {
            state.isLoadingPortfolioCategories = false;
            state.isErrorPortfolioCategories = true;
            state.portfolioCategoriesErrorMSG = action.payload;
        },
    },
});
export const categoriesReducer = portfolioCategoriesSlice.reducer;
export const categoriesActions = portfolioCategoriesSlice.actions;