import { createSlice } from "@reduxjs/toolkit";
import {getAllSettingseData} from "../Functions/SettingsFunc";
const initialState = {
    data: [],
    isLoading: false,
    isError: false,
    errorMSG: "",
};

const settingsSlice = createSlice({
    name: "settings",
    initialState,
    reducers: {},
    extraReducers: {
        // Getting Page's Data
        [getAllSettingseData.pending]: (state)=>{
            state.isLoading = true;
        }, 
        [getAllSettingseData.fulfilled]: (state,action)=> {
            state.isLoading = false;
            state.data = action.payload;
        },
        [getAllSettingseData.rejected]: (state , action )=>{
            state.isLoading = false;
            state.isError = true;
            state.errorMSG = action.payload;
        },
    },
});


export const settingsReducer = settingsSlice.reducer;
export const settingsActions = settingsSlice.actions;