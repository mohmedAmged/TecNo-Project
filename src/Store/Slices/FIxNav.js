import { createSlice } from "@reduxjs/toolkit";
const initialState= {
    isFixedOnPage: false,
    isFirstLoadEnds: false,
};

const fixedNavSlice = createSlice({
    name: "FixNav",
    initialState,
    reducers: {
        setFixedOnPage: (state)=> {
            state.isFirstLoadEnds = true;
            state.isFixedOnPage = true;
        },
        setFixedOffPage: (state)=> {
            state.isFixedOnPage = false;
        },
    },
});
export const fixedNavReducer = fixedNavSlice.reducer;
export const {setFixedOnPage , setFixedOffPage} = fixedNavSlice.actions;