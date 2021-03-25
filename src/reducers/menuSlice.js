import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
import { restaurantService } from "../services/restaurant.service";

export const getMenu = createAsyncThunk(
  "restaurant/get_menu",
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

const menuSlice = createSlice({
  name: "menu",
  initialState: {
    status: "idle",
    error: null,
    refreshed: true,
    menu: [],
  },
  reducers: {
    changeRefreshed: (state) => {
      state.refreshed = false;
    },
  },
  extraReducers: {
    [getMenu.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMenu.fulfilled]: (state, action) => {
      state.status = "succeeded";
      state.menu = action.payload.menu;
    },
    [getMenu.rejected]: (state, action) => {
      state.status = "failed";
      state.error = action.error;
      console.log("failed");
      window.location.reload();
    },
  },
});

// export const {saveme, authenticate, unAuthenticate} = restaurantSlice.actions;
export default menuSlice.reducer;
// export const selectLogged = state;

export const { changeRefreshed } = menuSlice.actions;
