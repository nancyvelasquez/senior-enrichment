import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import SingleCampus from './SingleCampus';

export default class SingleStudent extends Component {

  constructor () {
    super();
    this.state = {
      student: {},
      campus: {}
    };
  }

componentDidMount () {
    const studentId = this.props.match.params.studentId;

    const getStudent = axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        this.setState({ student })
      })

    const getCampus = axios.get(`/api/students/${studentId}/campus`)
      .then(res => res.data)
      .then(campus => {
        this.setState({ campus })
      })

    Promise.all([getStudent, getCampus])
        .then(() => {})
  }

  render () {
    const student = this.state.student;
    const campus = this.state.campus;

    return (
      <div className="student">
        <h3>{`${student.firstName} ${student.lastName} `}</h3>
            <p>Email: { student.email }</p>
            <p>Campus Name: { campus.name }</p>
            <ul className="nav nav-pills nav-justified">
                 <li><Link to={`/campuses/${campus.id}`}>NAVIGATE TO CAMPUS</Link></li>
                 <li><Link to={`/students/`}>BACK TO STUDENTS</Link></li>
             </ul>
      </div>
    );
  }
}