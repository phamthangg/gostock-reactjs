import React from 'react';
import {HOME_URL, MODULE} from "./setting";
import {Switch, Route, Redirect, BrowserRouter} from 'react-router-dom';
import Home from './modules/Home';
import './App.css';
import Account from './modules/Account';
import Content from './modules/Content';
import Header from './components/Header';
import Footer from "./components/Footer";


class App extends React.Component {
  render() {
    return (
        <>
          <Header/>
          <main id="content" role="main">
            <BrowserRouter>
              <Switch>
                <Route exact path={HOME_URL} component={Home}/>
                <Route path={MODULE.account} component={Account}/>
                <Route path={MODULE.content} component={Content}/>
                <Route render={() => <Redirect to={HOME_URL}/>}/>
              </Switch>
            </BrowserRouter>
          </main>
          <Footer/>
        </>
    );
  }
}

export default App;
