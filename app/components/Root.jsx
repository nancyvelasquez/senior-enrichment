'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import { render } from 'react-dom'
// import { Provider } from 'react-redux'
import axios from 'axios';
import About from './About';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import Footer from './Footer';
import NotFound from './NotFound';
import SingleCampus from './SingleCampus';
import SingleStudent from './SingleStudent';
import StatefulStudents from './StatefulStudents';
import StatefulCampuses from './StatefulCampuses';
import NewStudent from './NewStudent';
import NewCampus from './NewCampus';
import Navbar from './Navbar';
import EditStudent from './EditStudent';
import EditCampus from './EditCampus';
import store, { fetchCampuses, fetchStudents } from '../store';
import { connect } from "react-redux";

export default class Main extends Component {

  componentDidMount () {

    // store.unsubscribe = store.subscribe(() => this.setState(store.getState())) 
    const campusesThunk = fetchCampuses();
    const studentsThunk = fetchStudents();
    store.dispatch(campusesThunk);
    store.dispatch(studentsThunk);
  }

  render () {
    return (
      <Router>
        <div>
            <div className="Root-header">
                <a href="http://localhost:1337/">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Hogwarts_coat_of_arms_colored_with_shading.svg" className="Root-logo" alt="logo" />
                </a>
                <h3>Margaret Hamilton Interplanetary Academy of JavaScript</h3>
            </div>
            <Navbar />
            <div className="container text-center">
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route exact path="/students" component={StatefulStudents} />
                    <Route path="/:studentId/edit-student" component={EditStudent} />
                    <Route path="/:campusId/edit-campus" component={EditCampus} />
                    <Route path="/campuses/:campusId" component={SingleCampus} />
                    <Route path="/students/:studentId" component={SingleStudent} />
                    <Route exact path="/campuses" component={StatefulCampuses} />
                    <Route exact path="/new-student" render={
                      () => <NewStudent addStudent={this.addStudent} />
                    } />
                    <Route exact path="/new-campus" render={
                      () => <NewCampus component={NewCampus}/>
                    } />
                    <Route component={NotFound} />
                    <Redirect to="/" />
                </Switch>
            </div>
           <Footer />
        </div>
      </Router>
    );
  }
}