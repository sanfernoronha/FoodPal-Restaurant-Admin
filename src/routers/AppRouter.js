import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import SignIn from "../pages/SignInSide";
import Dashboard from "../pages/Dashboard";
import Connector from "../utils/Connector";
import Navbar from "../components/global/Navbar"

function Router({ actions, checked, isLoggedIn, ...props }) {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async () => {
        let me = localStorage.getItem("me");
        if (!!me) {
            me = JSON.parse(me);
            actions.saveMe(me);
            actions.authenticate();
        } else {
            actions.unauthenticate();
        }
    }, [actions]);



    return (
        <BrowserRouter>

            <div>

                <Switch>
                    {/* <PrivateRoute path="/" component={Dashboard} exact={true} /> */}
                    <PublicRoute path="/" component={SignIn} exact={true} />
                    <PrivateRoute path="/dashboard" component={Dashboard} />
                </Switch>
            </div>
        </BrowserRouter>
    )
};





const ConnectedRouter = props => (
    <Connector>
        {
            ({ actions, state: { auth: { isLoggedIn, checked } } }) => (
                <Router
                    checked={checked}
                    isLoggedIn={isLoggedIn}
                    actions={actions.auth}
                    {...props}
                />
            )
        }
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
