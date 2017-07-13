import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCampuses, fetchStudents, removeCampus } from '../store';
import AllStudents from './AllStudents';


const SingleCampus = (props) => {

  const { campus, students, handleDelete } = props;
  const campusStudents = students.filter(student => student.campusId === campus.id)

    return (
        <div>
            <h3>{ campus.name }</h3>
            <button
                className="btn btn-default btn-s"
                onClick={ () => handleDelete(campus.id) }>
            <span className="glyphicon glyphicon-remove" />   Delete Campus</button>
            <img src={ campus.imageURL } className="img-thumbnail" />
            <h4>Number of Students: { campusStudents.length }</h4>

            <ul className="nav nav-pills nav-justified">
                <li><Link to={`/campuses/${campus.id}/students`}>LIST OF STUDENTS</Link></li>
                <li><Link to={`/campuses/`}>BACK TO CAMPUSES</Link></li>
            </ul>
            <Switch>
                <Route path={`/campuses/${campus.id}/students`} render={() => (
                <AllStudents students={ campusStudents } campuses={ campus } />
                )} />
                <Route path={`/campuses`} />
            </Switch> 
        </div>     
    );
}

const mapStateToProps = (state, ownProps) => {
  const campusId = ownProps.match.params.campusId;
  return {
    campus: state.campuses.find(campus => campus.id === +campusId),
    students: state.students
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleDelete(id) {
      dispatch(removeCampus(id));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);

