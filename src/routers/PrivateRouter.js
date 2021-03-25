import React from "react";
import { Route, Redirect } from "react-router-dom";
import Navbar from "../components/global/Navbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  var isAuthenticated = useSelector((state) => state.signin.isLoggedIn);
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <div>
            <div className='bodyComponent' style={{ display: "flex" }}>
              <CssBaseline />
              <Navbar />
              <Component {...props} />
            </div>
          </div>
        ) : (
          <Redirect to='/' />
        )
      }
    />
  );
};

export default PrivateRoute;
