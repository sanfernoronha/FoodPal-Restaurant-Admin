import React, { useEffect } from 'react';
// import PropTypes from 'prop-types';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import PublicRoute from './PublicRouter';
import PrivateRoute from './PrivateRouter';
import SignIn from "../pages/SignInSide";
import Dashboard from "../pages/Dashboard";
import { saveme, authenticate, unAuthenticate} from '../reducers/signinSlice'
import { useDispatch } from 'react-redux';


function Router({ ...props }) {

    // eslint-disable-next-line react-hooks/exhaustive-deps
    // useEffect(async () => {
    //     let me = localStorage.getItem("me");
    //     if (!!me) {
    //         me = JSON.parse(me);
    //         actions.saveMe(me);
    //         actions.authenticate();
    //     } else {
    //         actions.unauthenticate();
    //     }
    // }, [actions]);

    const dispatch = useDispatch();
    
    useEffect(()=>{
      const checkLoggedIn = async () => {
        let me = localStorage.getItem("me");
      if(!!me){
        console.log("Hai bhai")
        //We need to firstly parse me JSON.parse(me)
        //Put it back to state
        //saveme action dispatch krenge
        //set isauthenticated to true
        me = JSON.parse(me);
        dispatch(saveme(me));
        dispatch(authenticate());
      }
      else{
        console.log("Hattt nahi hai")
        dispatch(unAuthenticate());
        //actions.unauthenticate
      } 
    }
      checkLoggedIn(); 
    },[])



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

export default Router;
