import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
import Signup from "./Components/Signup/Signup";
import Login from "./Components/Login/Login";
import Feed from "./Components/Feed/Feed";
import Recipe from "./Components/Recipe/Recipe";
import Profile from "./Components/Profile/Profile";
import AddRecipe from "./Components/AddRecipe/AddRecipe";

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
        <Route
          path="/profile/:username"
          render={props => (
            <>
              <Navigation />
              <Profile {...props} />
            </>
          )}
        />
        <Route
          exact
          path="/addrecipe"
          render={props => (
            <>
              <Navigation />
              <AddRecipe />
            </>
          )}
        />
      </Router>
    );
  }
}
