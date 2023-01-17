import { configureStore } from "@reduxjs/toolkit";
import userLoginReducer from "../modules/userLoginSlice";

const store = configureStore({
    reducer: {
        userLogin: userLoginReducer
    }
});

export default store;