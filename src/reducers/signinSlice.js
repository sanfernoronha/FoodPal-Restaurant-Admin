import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { authService } from "../services/auth.service";

export const authenticator = createAsyncThunk(
  "restaurant/signin",
  async (values, { rejectWithValue }) => {
    try {
      const me = await authService.login(values.email, values.password);

      return me;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const signinSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    me: {},
    checked: false,
    token: "",
  },
  reducers: {
    saveme: (state, action) => {
      //This accepts me object and saves it to state
      // console.log(action.payload);

      state.token = action.payload;
    },
    authenticate: (state, action) => {
      //This sets isLoggedin to turu

      state.isLoggedIn = true;
      state.checked = true;
    },
    unAuthenticate: (state, action) => {
      //This sets isLoggedIn to Falase
      // console.log("Logged out");
      state.isLoggedIn = false;
      state.checked = true;
    },
  },
  extraReducers: {
    [authenticator.fulfilled]: (state, { payload }) => {
      //   console.log("payload: ",payload);
      //   console.log(state)

      state.token = payload.accessToken;
      state.me = payload.restaurant;
      state.isLoggedIn = true;
      console.log("fulfilled!");
      //   console.log(localStorage.getItem('me'))
    },
    [authenticator.rejected]: (state, action) => {
      //   console.log(action);
      state.isLoggedIn = false;
      console.log(action.error);
    },
  },
});

export const { saveme, authenticate, unAuthenticate } = signinSlice.actions;
export default signinSlice.reducer;
// export const selectLogged = state;
