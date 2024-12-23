// userApi.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { API_SERVER_HOST } from "../config/hostConfig";

const host = `${API_SERVER_HOST}/api/auth`;

export const loginThunk = createAsyncThunk(
  "userInfo/login",
  async (userData, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${host}/login`, userData);
      return res.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "userInfo/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post(`${host}/logout`);
      return;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);
