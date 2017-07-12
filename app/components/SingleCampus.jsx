import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { fetchCampuses, fetchStudents } from '../store';
import AllStudents from './AllStudents';

const SingleCampus = (props) => {

  const { campus, students } = props;
  const campusStudents = students.filter(student => student.campusId === campus.id)

    return (
        <div>
            <h3>{ campus.name }</h3>
            {/*<button type="button" onClick={() => props.handleDelete(campus.id)} name="campusName" type="reset" value="Reset">Delete Campus</button><br />
 <button type="button" onClick={() => props.deleteTask(props.Obj.slug)} className="btn">Delete</button>*/}
            <img src={ campus.imageURL } className="img-thumbnail" />
            <h4>Number of Students: { campusStudents.length }</h4>

            <ul className="nav nav-pills nav-justified">
                <li><Link to={`/campuses/${campus.id}/students`}>LIST OF STUDENTS</Link></li>
                <li><Link to={`/campuses/`}>BACK TO CAMPUSES</Link></li>
            </ul>
            <Switch>
                <Route path={`/campuses/${campus.id}/students`} render={() => (
                <AllStudents students={ campusStudents } />
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

// const mapDispatchToProps = function (dispatch, ownProps) {
//   return {
//     handleDelete: function (evt) {
//       dispatch(deleteCampus(evt.target.value));
//     },
//     handleSubmit: function (evt) {
//       evt.preventDefault();
//       dispatch(destroyCampus({ name: evt.target.campusName.value }))
//     }
//   };
// }

export default connect(mapStateToProps)(SingleCampus);

