import {
  createSlice,
  createAsyncThunk,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import axios from "axios";
import { restaurantService } from "../services/restaurant.service";
export const getRestaurant = createAsyncThunk(
  "restaurant/get",
  async (_, { rejectWithValue }) => {
    // try {
    //   const restaurantData = await restaurantService.getRestaurantById();

    //   return restaurantData;
    // } catch (err) {
    //   if (!err.response) {
    //     throw err;
    //   }
    //   return rejectWithValue(err.response.data);
    // }
    let token = JSON.parse(localStorage.getItem("me"));
    console.log(token);
    try {
      const data = await axios({
        headers: {
          "Content-Type": "application/json",
          "x-access-token": token,
        },
        method: "GET",
        url: "http://localhost:5000/restaurant/get",
      });
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurantData: {},
    status: "idle",
    error: null,
    refreshed: true,
  },
  reducers: {
    changeRefreshed: state => {
      state.refreshed = false
      
    }
  },
  extraReducers: {
    [getRestaurant.pending]: (state, action) => {
      state.status = "loading";
    },
    [getRestaurant.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.restaurantData = action.payload;
    },
    [getRestaurant.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
      // console.log(action.error);
      window.location.reload();
    },
  },
});

// export const {saveme, authenticate, unAuthenticate} = restaurantSlice.actions;
export default restaurantSlice.reducer;
// export const selectLogged = state;

export const {changeRefreshed} = restaurantSlice.actions;
