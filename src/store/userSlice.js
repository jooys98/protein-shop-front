// userSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk } from "../api/userApi";

const userSlice = createSlice({
  name: "userInfo",
  initialState: {
    userInfoList: [],
    count: 0,
    loginFlag: false,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.loginFlag = true;
        state.userInfoList.push(action.payload);
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutThunk.fulfilled, (state) => {
        state.loginFlag = false;
        state.userInfoList = [];
      });
  },
});

export default userSlice.reducer;