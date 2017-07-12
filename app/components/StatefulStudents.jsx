import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AllStudents from './AllStudents';
import { fetchStudents } from '../store';

// export default class StatefulStudents extends Component {
function StatefulStudents (props) {

  const { students } = props

  // constructor () {
  //   super();
  //   this.state = store.getState();
  // }

  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState())
  //   })

  //   axios.get('/api/students/')
  //     .then(res => res.data)
  //     .then(students => {
  //       this.setState({ students })
  //     });
  // }

  // componentWillUnMount(){
  //   this.unsubscribe();
  // }

  // render () {

    // const students = this.state.students;

    return (
      <AllStudents students={students} />
    );
  // }
}


const mapStateToProps = function (state) {
  return {
    students: state.students
  };
}

export default withRouter(connect(mapStateToProps)(StatefulStudents));
