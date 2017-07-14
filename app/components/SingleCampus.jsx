import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { removeCampus } from '../store'; // note took out fetches
import AllStudents from './AllStudents';

const SingleCampus = (props) => {

  const { campuses, students, handleDelete } = props;
  const campusId = props.match.params.campusId;

  const campus = campuses.find(campus => campus.id === +campusId);
  const campusStudents = students.filter(student => student.campusId === campus.id)

  return (
    <div>
      <h3>{campus.name}</h3>
      <h4>Number of Students: {campusStudents.length}</h4>
      <button className="btn btn-default btn-s">
        <NavLink to={`/${campus.id}/edit-campus`} activeClassName="active">Edit Campus</NavLink>
        <span className="glyphicon glyphicon-pencil" /></button>
      <button
        className="btn btn-default btn-s"
        onClick={() => handleDelete(campus.id)}>
        <span className="glyphicon glyphicon-remove" />   Delete Campus</button>
      <img src={campus.imageURL} className="img-thumbnail" />
      <ul className="nav nav-pills nav-justified">
        <li><Link to={`/campuses/${campus.id}/students`}>LIST OF STUDENTS</Link></li>
        <li><Link to={`/campuses/`}>BACK TO CAMPUSES</Link></li>
      </ul>
      <Switch>
        <Route path={`/campuses/${campus.id}/students`} render={() => (
          <AllStudents students={campusStudents} campuses={campus} />
        )} />
        <Route path={`/campuses`} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    campuses: state.campuses,
    students: state.students
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleDelete() {
      const id = ownProps.match.params.campusId;
      dispatch(removeCampus(id));
      ownProps.history.push('/')
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);

