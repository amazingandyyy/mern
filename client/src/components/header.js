import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions";
import { NavLink } from "react-router-dom";

const renderSignButton = (auth) => {
  if (auth)
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to="/signout">
          Sign out
        </NavLink>
      </li>
    );
  return (
    <section className="d-flex">
      <li className="nav-item" key="1">
        <NavLink to="/signin" className="nav-link">
          Sign in
        </NavLink>
      </li>
      <li className="nav-item" key="2">
        <NavLink to="/signup" className="nav-link">
          Sign Up
        </NavLink>
      </li>
    </section>
  );
};

function Header({ authenticated }) {
  return (
    <nav className="navbar navbar-expand-sm bg-light text-white-50">
      <NavLink className="navbar-brand logofont" to="/">
        MERN Stack
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className="nav-link" to="/public">
              Public
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/account">
              Account
            </NavLink>
          </li>
        </ul>
        <ul className="navbar-nav">{renderSignButton(authenticated)}</ul>
      </div>
    </nav>
  );
}

function mapStateToProps({ auth }) {
  return {
    authenticated: auth.authenticated,
  };
}

export default connect(mapStateToProps, actions)(Header);
