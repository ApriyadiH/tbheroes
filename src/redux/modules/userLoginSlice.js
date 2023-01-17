import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    username: '',
    email: '',
    isAdmin: '',
    isLoading: false,
    errorMessage: null,
    isLoggedIn: false
};

export const userLogin = createAsyncThunk(
    'login',
    async ({ email, password }, thunkAPI) => {
        try {
            const { data } = await axios.post(
                "https://ambojakulinesiaserver.vercel.app/login",
                // "http://localhost:3001/login",
                {
                    email: email,
                    password: password
                }
            );
            localStorage.setItem('user', JSON.stringify(data.data));
            return thunkAPI.fulfillWithValue(data.data);
        } catch (error) {
            const status = error.response.status;
            let message = null;
            if (status === 400) {
                message = error.response.data.message
            } else {
                message = 'Cannot access the server.'
            }
            return thunkAPI.rejectWithValue(message);
        }
    }
);

export const userLoginSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logout: (state, action) => ({
            ...state,
            username: '',
            email: '',
            isAdmin: '',
            isLoggedIn: false
        }),
        stillLogin: (state, action) => ({
            ...state,
            username: action.payload.username,
            email: action.payload.email,
            isAdmin: action.payload.isAdmin,
            isLoggedIn: true,
        })
    },
    extraReducers: {
        [userLogin.pending]: (state) => ({
            ...state,
            isLoading: true,
            errorMessage: null,
        }),
        [userLogin.fulfilled]: (state, action) => ({
            ...state,
            username: action.payload.username,
            email: action.payload.email,
            isAdmin: action.payload.isAdmin,
            isLoading: false,
            errorMessage: null,
            isLoggedIn: true,
        }),
        [userLogin.rejected]: (state, action) => ({
            ...state,
            isLoading: false,
            errorMessage: action.payload,
            isLoggedIn: false,
        })
    }
});

export const { logout, stillLogin } = userLoginSlice.actions;
export default userLoginSlice.reducer;