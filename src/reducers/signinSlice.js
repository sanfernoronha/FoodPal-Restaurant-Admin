import {
    createSlice,
    createAsyncThunk,
    createEntityAdapter,
  } from '@reduxjs/toolkit'
  import axios from 'axios';

  export const authenticator = createAsyncThunk(
    'restaurant/signin',
    async (values, thunkAPI) => {
        console.log(values);
        //Instead of get restaurants we will authenticate here
        //We can have axios calls in one file like we did.
        const data = await axios({
            method: 'POST',
            url: 'http://localhost:5000/restaurant/signin',
            data:{
                email: values.email,
                password: values.password,
            }   
          }).then((response)=>{
            // console.log(response.data);
            // localStorage.setItem("authToken", response.data.accessToken)
            if(response.status === 200){
            localStorage.setItem("me", JSON.stringify(response.data))
            }
            else{
                console.log("Bhaduhjad")
                return thunkAPI.rejectWithValue("Bhaaad mai jaa");
            }
            return(response);

        }).catch((err)=>{
            // console.log("Bhaduhjad")
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


  const signinSlice = createSlice({
      name: 'auth',
      initialState: {
          isLoggedIn: false,
          me: {},
          checked: false,
      },
      reducers: {
          saveme: (state, action) => {
            //This accepts me object and saves it to state
            console.log(action.payload);
            state.me=action.payload;
          },
          authenticate: (state, action) =>{
              //This sets isLoggedin to turu
              console.log("Authenticate called")
              state.isLoggedIn=true
          },
          unAuthenticate: (state, action) => {
            //This sets isLoggedIn to Falase
            console.log("Bulaya gaya");
            state.isLoggedIn=false;
          }
      },
      extraReducers:{
          [authenticator.fulfilled]: (state, {payload}) => {
            //   console.log("payload: ",payload);
            //   console.log(state)
              state.me = payload.data;
              state.isAuthenticated = true;
            //   console.log(localStorage.getItem('me'))
          },
          [authenticator.rejected]: (state, action) => {
            //   console.log(action);
              console.log("Rejected cause that's what you deserve")
          }
      }
})



export const {saveme, authenticate, unAuthenticate} = signinSlice.actions;
export default signinSlice.reducer;
// export const selectLogged = state;