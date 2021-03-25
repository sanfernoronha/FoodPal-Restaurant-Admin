import React, { useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import PublicRoute from "./PublicRouter";
import PrivateRoute from "./PrivateRouter";
import SignIn from "../pages/SignInSide";
import Dashboard from "../pages/Dashboard";
import Menu from "../pages/Menu";
import OrdersSide from "../pages/OrdersSide";
import { saveme, authenticate, unAuthenticate } from "../reducers/signinSlice";
import { useDispatch } from "react-redux";

function Router({ ...props }) {
  const dispatch = useDispatch();
  let me = localStorage.getItem("me");
  if (!!me) {
    me = JSON.parse(me);
    dispatch(saveme(me));
    dispatch(authenticate());
  } else {
    dispatch(unAuthenticate());
  }

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <PrivateRoute path="/" component={Dashboard} exact={true} /> */}
          <PublicRoute path="/" component={SignIn} exact={true} />
          <PrivateRoute path="/dashboard" component={Dashboard} exact={true} />
          <PrivateRoute path="/menu" component={Menu} />
          <PrivateRoute path="/orders" component={OrdersSide} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default Router;
