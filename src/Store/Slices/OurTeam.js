import { createSlice } from "@reduxjs/toolkit";
import { getOurTeamAllData } from "../Functions/OurTeamFunc";

const initialState ={
    data: [],
    isLoadingOurTeam: false,
    isErrorOurTeam: false,
    teamErroMSG: ""
};

const OurTeamSlice = createSlice({
    name: "ourteam",
    initialState,
    reducers: {},
    extraReducers:{
        [getOurTeamAllData.pending]: (state)=>{
            state.isLoadingOurTeam = true;
        },
        [getOurTeamAllData.fulfilled]: (state,action) => {
            state.isLoadingOurTeam = false;
            state.data = action.payload;
        },
        [getOurTeamAllData.rejected]: (state ,action)=>{
            state.isLoadingOurTeam = false;
            state.isErrorOurTeam = true;
            state.teamErroMSG = action.payload;
        },
    },
});

export const ourTeamReducer = OurTeamSlice.reducer;
export const ourTeamActions = OurTeamSlice.actions;