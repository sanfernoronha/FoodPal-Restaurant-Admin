import { configureStore } from '@reduxjs/toolkit'
import signinReducer from '../reducers/signinSlice'


export default configureStore({
  reducer: {
        signin: signinReducer,
    },
})
