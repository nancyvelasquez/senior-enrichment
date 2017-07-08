import React, { Component } from 'react';
import axios from 'axios';

export default class SingleStudent extends Component {

  constructor () {
    super();
    this.state = {
      student: {}
    };
  }

  componentDidMount () {
    const studentId = this.props.match.params.studentId;

    axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => this.setState({
        student
      }));
  }

  render () {
    const student = this.state.student;
    console.log(student)

    return (
      <div className="student">
          <h3>{`${student.firstName} ${student.lastName} `}</h3>
          {/*<ul>
            <li>Email: {` ${student.email} `}</li>
            <li>Campus: {`${student.studentCampusId}`}<li>
          </ul>*/}
      </div>
    );
  }
}