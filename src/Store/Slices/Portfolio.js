import { createSlice } from "@reduxjs/toolkit";
import { getAllPortFolioData } from "../Functions/PortfolioFunc";
const initialState = {
    data: [],
    isLoadingPortfolio: false,
    isErrorPortfolio: false,
    portfolioErrorMSG: ""
};

const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: { },
    extraReducers: {
        [getAllPortFolioData.pending]: (state)=> {
            state.isLoadingPortfolio = true;
        },
        [getAllPortFolioData.fulfilled]: (state,action) => {
            state.isLoadingPortfolio = false;
            state.data = action.payload;
        },
        [getAllPortFolioData.rejected]: (state , action)=> {
            state.isLoadingPortfolio = false;
            state.isErrorPortfolio = true;
            state.portfolioErrorMSG = action.payload;
        },
    },
});

export const portfolioReducer = portfolioSlice.reducer;
export const portfolioActions = portfolioSlice.actions;