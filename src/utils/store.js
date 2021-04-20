import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import restaurantSlice from "../reducers/restaurantSlice";
import signinReducer from "../reducers/signinSlice";
import menuSlice from "../reducers/menuSlice";

export default configureStore({
  reducer: {
    signin: signinReducer,
    restaurant: restaurantSlice,
    menu: menuSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});
