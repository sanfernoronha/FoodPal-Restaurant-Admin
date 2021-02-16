import { SIGN_IN, SIGN_OUT } from "../constants/actionType";
import axios from "axios";
import API from "../components/global/axios";
//example init state

const initState = {
  email: "",
  password: "",
};

const rootReducer = (state = initState, action) => {
  if (action.type === SIGN_IN) {
    const name = action.payload.email;
    const password = action.payload.password;
    //Call backend
    console.log(name);
    console.log(password);

    // axios({
    //   method: "POST",
    //   url: "http://localhost:5000/customer/signin",
    //   data: {
    //     name: name,
    //     password: password,
    //   },
    // })
    API.post("/customer/signin", { name: name, password: password })
      .then((response) => {
        console.log(response);
        localStorage.setItem("authToken", response.data.accessToken);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  if (action.type === SIGN_OUT) {
    console.log("Sign out");
  }

  return state;
};

export default rootReducer;
