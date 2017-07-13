import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteStudent, removeStudent } from '../store';
import { connect } from "react-redux";


const AllStudents = (props) => {

  const { students, campuses, handleDelete } = props;
  
  const studentCampusName = (studentCampusId) => {
      const findCampus = campuses.find(campus => campus.id === studentCampusId);
      return findCampus.name
  }

    return (
      <div>
        <h3>Students</h3>
        <br></br>
        <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Campus</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            students && students.map(student => (
                <tr key={student.id}>
                  <td>{ `${student.firstName} ${student.lastName} `}</td>
                  <td>{ student.email }</td>
                   <td>{ student.campusId ? studentCampusName(student.campusId) : 'No Campus Assigned' }</td> 
                  <td><Link to={`/students/${student.id}`}>View Student</Link></td>
                   <td><button
                    className="btn btn-default btn-xs"
                    onClick={ () => handleDelete(student.id) }>
                    <span className="glyphicon glyphicon-remove" />
                  </button></td> 
                </tr>
            ))
          },
        </tbody>
      </table>
      <h4>
      <Link className="btn btn-primary btn-block" to="/new-student">
            <span className="glyphicon glyphicon-plus" /> ADD STUDENT
      </Link>
      </h4>
    </div>
    );
  };

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleDelete(id) {
      dispatch(removeStudent(id))
    }
  };
}

export default connect(null, mapDispatchToProps)(AllStudents);