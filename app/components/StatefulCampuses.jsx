import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import { fetchCampuses } from '../store';

function StatefulCampuses (props) {

  const { campuses } = props

    return <AllCampuses campuses={campuses} />
    
}

const mapStateToProps = (state) => {
  return { campuses: state.campuses };
}

export default withRouter(connect(mapStateToProps)(StatefulCampuses));
