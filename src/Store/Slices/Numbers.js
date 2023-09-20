import { createSlice } from "@reduxjs/toolkit";
import { getAllNums } from "../Functions/NumbersFunc";
const initialState = {
    data: [],
    isLoadingNums: false,
    isErrorNums: false,
    numsErrorMSG: ""
};

const NumsSlice = createSlice({
    name: "numbers",
    initialState,
    reducers: {},
    extraReducers: {
        [getAllNums.pending]: (state)=> {
            state.isLoadingNums = true;
        },
        [getAllNums.fulfilled]: (state,action)=>{
            state.isLoadingNums = false;
            state.data = action.payload;
        },
        [getAllNums.isErrorNums]: (state,action) => {
            state.isLoadingNums = false;
            state.isErrorNums = true;
            state.numsErrorMSG = action.payload;
        }
    }
});

export const numsReducer = NumsSlice.reducer;
export const numsActions = NumsSlice.actions;