import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "https://tecno-api.onrender.com/settings";

const getAllSettingseData = createAsyncThunk("settings/getPageData", async ( arg , thunkAPI )=> {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axios.get(URL);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});


export {getAllSettingseData};