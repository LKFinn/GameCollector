/* 
Adapted from Stephen Grider's Udemy course on Modern React and Redux
*/

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Help from "./Help";
import MyDrawer from "../drawers/Drawer";
import Stack from "@mui/material/Stack";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div>
            <li>
              <Help />
            </li>
            <li>
              <a href="/auth/google">Login With Google</a>
            </li>
          </div>
        );
      default:
        return (
          <div>
            <li>
              <Help />
            </li>
            <li>
              <a href="/user/faves">Favorites</a>
            </li>
            <li>
              <a href="/user">Home</a>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </div>
        );
    }
  }

  render() {
    return (
      <nav>
        <div
          className="nav-wrapper"
          style={{ backgroundColor: "#1d5250" }}
        >
            <Link className="left brand-logo" to={this.props.auth ? "/user" : "/"}>Game Collector</Link>

          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
