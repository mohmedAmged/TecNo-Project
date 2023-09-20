import { createSlice } from "@reduxjs/toolkit";
import { getServices } from "../Functions/ServicesFunc";
const initialState = {
    data: [],
    isLoadingServices: false,
    isErrorServices: false,
    servicesErrorMSG: ""
};

const ServicesSlice = createSlice({
    name: "services",
    initialState,
    reducers: {},
    extraReducers: {
        [getServices.pending]: (state)=>{
            state.isLoadingServices = true;
        },
        [getServices.fulfilled]: (state,action)=>{
            state.isLoadingServices = false;
            state.data = action.payload
        },
        [getServices.rejected]: (state ,action)=>{
            state.isLoadingServices = false;
            state.isErrorServices = true;
            state.servicesErrorMSG = action.payload;
        },
    },
});

export const ServicesReducer = ServicesSlice.reducer;
export const ServicesAction = ServicesSlice.actions;