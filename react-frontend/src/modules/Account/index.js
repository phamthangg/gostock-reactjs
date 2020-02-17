import React from "react";
import {Route} from 'react-router-dom';
import urls from './urls';
import Login from "./screens/Authentication/Login";
import Register from "./screens/Authentication/Register";
import {AuthRoute, AnonymousRoute} from '../../components/Route';


class Account extends React.Component {
    render() {
        return <div>
            <AnonymousRoute exact path={urls.login} component={Login}/>
            <AnonymousRoute exact path={urls.register} component={Register}/>
        </div>
    }
}

export default Account