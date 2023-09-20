import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "https://tecno-api.onrender.com/numbers";

export const getAllNums = createAsyncThunk("numbers/getAllNums",async (arg,thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
        const res = await axios(URL);
        return res.data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
});