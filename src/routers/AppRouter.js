import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import PublicRoute from "./PublicRouter";
import PrivateRoute from "./PrivateRouter";
import SignIn from "../pages/SignInSide";
import Dashboard from "../pages/Dashboard";
import Menu from "../pages/Menu";
import Tables from "../pages/Tables";
import Connector from "../utils/Connector";
import Navbar from "../components/global/Navbar";
import store from "../utils/store";
import Loader from "../components/loader";

function Router({ actions, checked, isLoggedIn, ...props }) {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    const checkLoggedIn = async () => {
      let me = await localStorage.getItem("me");
      // console.log(me);
      if (!!me) {
        me = JSON.parse(me);

        actions.saveMe(me);

        actions.authenticate();
      } else {
        actions.unauthenticate();
      }
    };
    checkLoggedIn();
  }, []);
  if (!checked) return <Loader />;

  return (
    <BrowserRouter>
      <div>
        <Switch>
          {/* <PrivateRoute path="/" component={Dashboard} exact={true} /> */}
          <PublicRoute path='/' component={SignIn} exact={true} />
          <PrivateRoute path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/menu' component={Menu} />
          <PrivateRoute path='/tables' component={Tables} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

const ConnectedRouter = (props) => (
  <Connector>
    {({
      actions,
      state: {
        auth: { isLoggedIn, checked },
      },
    }) => (
      <Router
        checked={checked}
        isLoggedIn={isLoggedIn}
        actions={actions.auth}
        {...props}
      />
    )}
  </Connector>
);

Router.propTypes = {
  checked: PropTypes.bool,
  loggedIn: PropTypes.bool,
  actions: PropTypes.object,
};

Router.defaultProps = {
  checked: false,
  loggedIn: false,
  actions: {},
};

export default ConnectedRouter;
