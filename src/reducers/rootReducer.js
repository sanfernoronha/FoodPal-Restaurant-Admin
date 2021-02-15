import {SIGN_IN, SIGN_OUT} from '../constants/actionType';
import axios from 'axios';
//example init state

const initState = {
  email: '',
  password: ''
};

const rootReducer = (state = initState, action) => {
  switch(action.type){
    case SIGN_IN: {
      const name = action.payload.email;
      const password = action.payload.password;
      //Call backend
      console.log(name);
      console.log(password)

      axios({
        method: 'POST',
        url: 'http://localhost:5000/customer/signin',
        data:{
          name: name,
          password: password
        }
      }).then((response)=>{
        console.log(response);
        localStorage.setItem("authToken", response.data.accessToken)
      }).catch((err)=>{
        console.log(err)
      })

    }
    case SIGN_OUT: {

    }
  }  
  return state;
};

export default rootReducer;
