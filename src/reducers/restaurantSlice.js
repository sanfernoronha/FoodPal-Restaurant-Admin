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
    try {
      const restaurantData = await restaurantService.getRestaurantById();

      return restaurantData;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: {
    restaurantData: {},
  },
  reducers: {},
  extraReducers: {
    [getRestaurant.fulfilled]: (state, { payload }) => {
      state.restaurantData = payload;
    },
    [getRestaurant.rejected]: (state, action) => {
      console.log(action.error);
    },
  },
});

// export const {saveme, authenticate, unAuthenticate} = restaurantSlice.actions;
export default restaurantSlice.reducer;
// export const selectLogged = state;
