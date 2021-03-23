import { configureStore } from '@reduxjs/toolkit'
import restaurantSlice from '../reducers/restaurantSlice'
import signinReducer from '../reducers/signinSlice'


export default configureStore({
  reducer: {
        signin: signinReducer,
        restaurant: restaurantSlice,
    },
})
