import React, { Component } from 'react';
import axios from 'axios';
import AllStudents from './AllStudents';
import store, { GOT_STUDENTS_FROM_SERVER } from '../store';


export default class StatefulStudents extends Component {

  constructor () {
    super();
    this.state = {
      store.getState();
    };
  }

  componentDidMount () {
    this.unsubscribe = store.subscribe(() => {
      this.setState(store.getState())
    })

    axios.get('/api/students/')
      .then(res => res.data)
      .then(students => {
        this.setState({ students })
      });
  }

  componentWillUnMount(){
    this.unsubscribe();
  }

  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     students: []
  //   };
  // }

  // componentDidMount () {
  //   axios.get('/api/students/')
  //     .then(res => res.data)
  //     .then(students => {
  //       this.setState({ students })
  //     });
  // }

  render () {

    const students = this.state.students;

    return (
      <AllStudents students={students} />
    );
  }
}