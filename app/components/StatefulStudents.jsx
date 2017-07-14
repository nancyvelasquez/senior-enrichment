import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AllStudents from './AllStudents';
import { fetchStudents, fetchCampuses } from '../store';

function StatefulStudents(props) {
  const { students, campuses } = props
  return <AllStudents students={students} campuses={campuses} />
}

const mapStateToProps = (state) => {
  return { students: state.students, campuses: state.campuses };
}

export default withRouter(connect(mapStateToProps)(StatefulStudents));


