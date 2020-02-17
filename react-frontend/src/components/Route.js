import React from 'react';
import {Redirect, Route} from 'react-router-dom';
import {HOME_URL, URL_LOGIN} from '../setting';

export const AuthRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => (
        <>
            {
                JSON.parse(localStorage["appState"]).isLoggedIn ?
                    <Component {...props} user={JSON.parse(localStorage["appState"]).user}/> :
                    <Redirect to={URL_LOGIN}/>
            }
        </>
    )}/>
};

export const AnonymousRoute = ({component: Component, ...rest}) => {
    return <Route {...rest} render={(props) => (
        <>
            {
                JSON.parse(localStorage["appState"]).isLoggedIn ?
                    <Redirect to={HOME_URL}/>:
                    <Component {...props}/>
            }
        </>
    )}/>
};