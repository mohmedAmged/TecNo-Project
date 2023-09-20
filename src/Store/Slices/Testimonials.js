import { createSlice } from "@reduxjs/toolkit";
import { getAllTestimonials } from "../Functions/TestimonialsFunc";

const initialState = {
    data: [],
    isLoadingTestimonials: false,
    isErrorTestimonials: false,
    testimonialsErrorMSG: ""
};

const testimonialsSlice = createSlice({
    name: "testimonials",
    initialState,
    reducers: {},
    extraReducers:{
        [getAllTestimonials.pending]: (state)=>{
            state.isLoadingTestimonials = true;
        },
        [getAllTestimonials.fulfilled]: (state,actions)=>{
            state.isLoadingTestimonials = false;
            state.data = actions.payload;
        },
        [getAllTestimonials.rejected]: (state ,action)=>{
            state.isLoadingTestimonials = false;
            state.isErrorTestimonials = true;
            state.testimonialsErrorMSG = action.payload;
        },
    },
});

export const testimonialsReducer = testimonialsSlice.reducer;
export const testimonialsActions = testimonialsSlice.actions;