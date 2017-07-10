import React, { Component } from 'react';
import axios from 'axios';
import AllStudents from './AllStudents';

export default class StatefulStudents extends Component {

  constructor (props) {
    super(props);
    this.state = {
      students: []
    };
  }

  componentDidMount () {
    axios.get('/api/students/')
      .then(res => res.data)
      .then(students => {
        this.setState({ students })
      });
  }

  render () {

    const students = this.state.students;

    return (
      <AllStudents students={students} />
    );
  }
}