import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "https://tecno-api.onrender.com/portfolioCategories/";

export const getAllCategories = createAsyncThunk("portfolioCategories/getAllCategories",async (arg,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axios(URL);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});
