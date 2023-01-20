import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  username: '',
  email: '',
  role: '',
  isLoading: false,
  errorMessage: null,
  isLoggedIn: false
};

export const userLogin = createAsyncThunk(
  'login',
  async ({ email, password }, thunkAPI) => {
    try {
      const { data } = await axios.post("https://tbheroesserver.vercel.app/login",{ email,password });

      localStorage.setItem('user', JSON.stringify(data.data));
      return thunkAPI.fulfillWithValue(data.data);
    } catch (err) {
      const status = err.response.status;
      let message = null;
      if (status === 400) {
        message = err.response.data.message
      } else {
        message = 'Cannot access the server.'
      };

      return thunkAPI.rejectWithValue(message);
    };
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
      role: '',
      isLoggedIn: false
    }),
    stillLogin: (state, action) => ({
      ...state,
      username: action.payload.username,
      email: action.payload.email,
      role: action.payload.role,
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
      role: action.payload.role,
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