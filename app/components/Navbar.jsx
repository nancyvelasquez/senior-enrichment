import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Route, Link, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom'
import { connect } from 'react-redux';

export default class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target=".navbar-collapse">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
            <li>
                <NavLink to="/" activeClassName="active">Home</NavLink>
              </li>
              <li>
                <NavLink to="/campuses" activeClassName="active">Campuses</NavLink>
              </li>
              <li>
                <NavLink to="/students" activeClassName="active">Students</NavLink>
              </li>
              <li>
                <NavLink to="/new-campus" activeClassName="active">Add New Campus</NavLink>
              </li>
              <li>
                <NavLink to="/new-student" activeClassName="active">Add New Student</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}