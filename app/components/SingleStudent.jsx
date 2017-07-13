// import React, { Component } from 'react';
// import { fetchCampuses, fetchStudents } from '../store';
// import { connect } from "react-redux";
// import { Route, Link, Switch } from 'react-router-dom';

// const SingleStudent = (props) => {

//   const { student, campuses } = props;
//   const campus = campuses.find(campus => campus.id === student.campusId)

//     return (
//       <div className="student">
//         <h3>{`${student.firstName} ${student.lastName} `}</h3>
//           <p>Email: { student.email }</p>
//           <p>Campus Name: { campus ? campus.name : " No Campus Assigned" }
//           </p>
//         <ul className="nav nav-pills nav-justified">
//           <li>
//             { campus && <Link to={`/campuses/${campus.id}`}>NAVIGATE TO CAMPUS</Link> }
//           </li>
//           <li><Link to={`/students/`}>BACK TO STUDENTS</Link></li>
//         </ul>
//       </div>
//     );
// }

// const mapStateToProps = (state, ownProps) => {
 
//   const studentId = ownProps.match.params.studentId;

//   return {
//     student: state.students.find(student => student.id === +studentId),
//     campuses: state.campuses
//   }
// }

// export default connect(mapStateToProps)(SingleStudent);

import React, { Component } from 'react';
import { fetchCampuses, fetchStudents } from '../store';
import { connect } from "react-redux";
import { Route, Link, Switch, NavLink } from 'react-router-dom';

const SingleStudent = (props) => {

  const { student, campuses } = props;
  const campus = campuses.find(campus => campus.id === student.campusId)

    return (
      <div className="student">
        <button className="btn btn-default btn-s"> 
           <NavLink to={`/${student.id}/edit-student`} activeClassName="active">Edit Student</NavLink> 
        <span className="glyphicon glyphicon-pencil" /></button>

        <h3>{`${student.firstName} ${student.lastName} `}</h3>
          <p>Email: { student.email }</p>
          <p>Campus Name: { campus ? campus.name : " No Campus Assigned" }
          </p>
        <ul className="nav nav-pills nav-justified">
          <li>
            { campus && <Link to={`/campuses/${campus.id}`}>NAVIGATE TO CAMPUS</Link> }
          </li>
          <li><Link to={`/students/`}>BACK TO STUDENTS</Link></li>
        </ul>
      </div>
    );
}

const mapStateToProps = (state, ownProps) => {
 
  const studentId = ownProps.match.params.studentId;

  return {
    student: state.students.find(student => student.id === +studentId),
    campuses: state.campuses
  }
}

export default connect(mapStateToProps)(SingleStudent);


