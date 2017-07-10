import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllStudents = (props) => {

  const students = props.students;

  // const handleDelete = function(id) {
  //   console.log(id)
  //   return axios.delete(`/api/students/${id}`)
  //     // .then(res => res.redirect('/campuses'))
  // }

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
                  <td>{ student.campusId }</td>
                  <td><Link to={`/students/${student.id}`}>View Student</Link></td>
                  {/*<td><a onClick={handleDelete(student.id)} className="delete" href="#">x</a></td>*/}
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

export default AllStudents;