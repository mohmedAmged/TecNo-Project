import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    onPage: false,
    firstLoadEnd: false,
};

const canvasSlice = createSlice({
    name: "canvas",
    initialState,
    reducers: {
        setOnPage: (state)=> {
            state.onPage = true;
            state.firstLoadEnd = true;
        },
        setOffPage: (state)=> {
            state.onPage = false;
        },
    },
});

export const canvasReducer = canvasSlice.reducer;
export const {setOnPage,setOffPage} = canvasSlice.actions;