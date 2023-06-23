/* 
Google Auth route/redux flow adapted from Stephen Grider's Udemy course on modern React with Redux. 
BrowserRouter also adapted from previous assignments in 340 and 290. 
*/

import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import Header from "../components/design/Header";
import Landing from "../components/design/Landing";
import UserPage from "../pages/UserPage";
import FavoritesPage from "../pages/FavoritesPage";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <div className="container">
          <BrowserRouter>
            <div>
              <Header />
              <Route
                exact
                path="/"
                component={Landing}
              />
              <Route
                exact
                path="/user"
                component={UserPage}
              />
              <Route
                exact
                path="/user/faves"
                component={FavoritesPage}
              />
            </div>
          </BrowserRouter>
        </div>
      </LocalizationProvider>
    );
  }
}

export default connect(null, actions)(App);
