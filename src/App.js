import React, { Component } from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'

import './App.sass'
import Home from "./Components/Pages/Home"
import Header from "./Components/Header"

class App extends Component {

  componentDidMount = () => {
  }

  render() {
      return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/">
                   <Home/>
                </Route>
                <Route path="*">
                    404
                </Route>
            </Switch>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = dispatch => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(App);