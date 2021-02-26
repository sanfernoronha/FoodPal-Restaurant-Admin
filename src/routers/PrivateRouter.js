import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import Navbar from "../components/global/Navbar"
import CssBaseline from '@material-ui/core/CssBaseline';

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
        isAuthenticated ? (

            <div className="bodyComponent" style={{ display: "flex" }}>
                {/* navbar */}
                <CssBaseline />
                <Navbar />
                <Component {...props} />

            </div>
        ) : (
                <Redirect to="/" />
            )
    )} />
);

const mapStateToProps = (state) => ({
    isAuthenticated: !!state.auth.isLoggedIn
});

export default connect(mapStateToProps)(PrivateRoute);