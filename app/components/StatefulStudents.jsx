import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AllStudents from './AllStudents';
import { fetchStudents } from '../store';

function StatefulStudents (props) {

  const { students } = props

    return <AllStudents students={students} />

}

const mapStateToProps = (state) => {
  return { students: state.students };
}

export default withRouter(connect(mapStateToProps)(StatefulStudents));


