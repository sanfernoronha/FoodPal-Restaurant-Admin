import React from 'react';
import { connect, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
// import {isLoggedIn} from '../reducers/signinSlice';
const PublicRoute = ({
    component: Component,
    ...rest
}) => { 
    var isAuthenticated = useSelector((state) => state.signin.isLoggedIn)
    return(
        <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <Redirect to="/dashboard" />
            ) : (
    
                    <React.Fragment>
                        <Component {...props} />
                    </React.Fragment>
                )
        )} />
    )
}

// const mapStateToProps = (state) => ({
//     isAuthenticated: !!state.auth.isLoggedIn
// });

// export default connect(mapStateToProps)(PublicRoute);

export default PublicRoute;