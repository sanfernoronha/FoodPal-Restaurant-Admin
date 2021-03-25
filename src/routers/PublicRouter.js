import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  var isAuthenticated = useSelector((state) => state.signin.isLoggedIn);
  console.log(isAuthenticated);
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? (
          <Redirect to='/dashboard' />
        ) : (
          <React.Fragment>
            <Component {...props} />
          </React.Fragment>
        )
      }
    />
  );
};

export default PublicRoute;
