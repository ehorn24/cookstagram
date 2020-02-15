import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Feed from "./Components/Feed/Feed";
import Recipe from "./Components/Recipe/Recipe";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route
          exact
          path="/"
          render={props => (
            <>
              <Navigation {...props} />
              <Header {...props} />
            </>
          )}
        />
        <Route
          exact
          path="/signup"
          render={props => (
            <>
              <Navigation />
              <Signup />
            </>
          )}
        />
        <Route
          exact
          path="/login"
          render={props => (
            <>
              <Navigation />
              <Login />
            </>
          )}
        />
        <Route
          exact
          path="/feed/ellahorn"
          render={props => (
            <>
              <Navigation />
              <Feed />
            </>
          )}
        />
        <Route
          path="/recipe/:recipename"
          render={props => (
            <>
              <Navigation />
              <Recipe {...props} />
            </>
          )}
        />
      </Router>
    );
  }
}
