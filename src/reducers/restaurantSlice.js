import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';
import { YAxis } from 'recharts';
  import HttpHelper from '../utils/HttpHelperUtil';

  export const getRestaurant = createAsyncThunk(
    'restaurant/get',
    async (thunkAPI) => {
        //Instead of get restaurants we will authenticate here
        //We can have axios calls in one file like we did.
        let me = JSON.parse(localStorage.getItem('me'));
        console.log(me);
        const {accessToken} = me
        console.log(accessToken)
        const data = await axios({
            headers:{
                "Content-Type": "application/json" ,
                "x-access-token":accessToken,
            },
            method: 'GET',
            url: 'http://localhost:5000/restaurant/get'
        }).then((response)=>{
            console.log(response);
            return(response);

        }).catch((err)=>{

            return thunkAPI.rejectWithValue("Bhaaad mai jaa");
            
          })      
          if(data.status === 200){
              return (data);
          }
          else{
            return thunkAPI.rejectWithValue("Bhaaad mai jaa");
          }
    }
)


  const restaurantSlice = createSlice({
      name: 'restaurant',
      initialState: {
        restaurant: {

        }
      },
      reducers: {},
      extraReducers:{
          [getRestaurant.fulfilled]: (state, {payload}) => {
            //   console.log("payload: ",payload);
            //   console.log(state)
              state.restaurant = payload.data;
            //   console.log(localStorage.getItem('me'))
          },
          [getRestaurant.rejected]: (state, action) => {
            //   console.log(action);
              console.log("Rejected cause that's what you deserve")
          }
      }
})



// export const {saveme, authenticate, unAuthenticate} = restaurantSlice.actions;
export default restaurantSlice.reducer;
// export const selectLogged = state;