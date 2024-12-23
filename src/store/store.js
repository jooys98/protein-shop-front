// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";  // slice에서 export한 reducer 가져오기

const store = configureStore({
    reducer: {
        userInfo: userReducer
    }
});

export default store;