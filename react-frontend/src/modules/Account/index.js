import React from "react";
import {Route} from 'react-router-dom';
import urls from './urls';
import Login from "./screens/Authentication/Login";
import Register from "./screens/Authentication/Register";

class Account extends React.Component {
    render() {
        return <div>
            <Route exact path={urls.login} component={Login}/>
            <Route exact path={urls.register} component={Register}/>
        </div>
    }
}

export default Account