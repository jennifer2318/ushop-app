import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import {connect} from 'react-redux';

import './App.sass';
import LoadingFull from "./Components/LoadingFull";

const Home = lazy(() => import("./Components/Pages/Home"));
const Header = lazy(() => import("./Components/Header"));

class App extends Component {

  componentDidMount = () => {
  };

  render() {
      return (
          <BrowserRouter>
              <Suspense fallback={<LoadingFull/>}>
                  <Header/>
                  <Switch>
                      <Route exact path="/">
                          <Home/>
                      </Route>
                      <Route path="*">
                          404
                      </Route>
                  </Switch>
              </Suspense>
          </BrowserRouter>
      );
  }
}

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(App);