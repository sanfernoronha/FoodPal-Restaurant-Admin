import React, { useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./PublicRouter";
import PrivateRoute from "./PrivateRouter";
import SignIn from "../pages/SignInSide";
import Dashboard from "../pages/Dashboard";
import { saveme, authenticate, unAuthenticate } from "../reducers/signinSlice";
import { useDispatch } from "react-redux";

function Router({ ...props }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkLoggedIn = async () => {
      let me = await localStorage.getItem("me");
      if (!!me) {
        //We need to firstly parse me JSON.parse(me)
        //Put it back to state
        //saveme action dispatch krenge
        //set isauthenticated to true
        me = JSON.parse(me);
        dispatch(saveme(me));
        dispatch(authenticate());
      } else {
        dispatch(unAuthenticate());
      }
    };
    checkLoggedIn();
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <PrivateRoute path="/" component={Dashboard} exact={true} /> */}
          <PublicRoute path='/' component={SignIn} exact={true} />
          <PrivateRoute path='/dashboard' component={Dashboard} exact={true} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
