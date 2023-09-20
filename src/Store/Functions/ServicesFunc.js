import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const URL = "https://tecno-api.onrender.com/services";

export const getServices = createAsyncThunk("services/getPopularServices", async (arg,thunkAPI)=>{
  const { rejectWithValue } = thunkAPI;
  try {
    const res = await axios.get(`${URL}`);
    return res.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});