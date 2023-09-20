import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "https://tecno-api.onrender.com/portfolio";

export const getAllPortFolioData = createAsyncThunk("portfolio/getAllPortFolioData",async (arg,thunkAPI)=>{
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axios(URL);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});