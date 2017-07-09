import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AllStudents = (props) => {

    const students = props.students;

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
                  <Link className="thumbnail" to={`/students/${student.id}`}>
                  <td>&#10146; { `${student.firstName} ${student.lastName} `}</td>
                  </Link>
                  <td>{ student.email }</td>
                  <td>{ student.campusId }</td>
                  {/*<td><a onClick={this.onDelete.bind(this, student)} className="delete" href="#">x</a></td>*/}
                </tr>
            ))
          },

        {/*onDelete(student){
          console.log(student)
        };*/}
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

export default AllStudents;

//  onClick={this.onClickDelete}