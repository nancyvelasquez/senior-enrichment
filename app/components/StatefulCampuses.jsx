import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import AllCampuses from './AllCampuses';
import { fetchCampuses } from '../store';


// export default class StatefulCampuses extends Component {
function StatefulCampuses (props) {

  const { campuses } = props

  // constructor () {
  //   super();
  //   this.state = store.getState();
  // }

  // componentDidMount () {
  //   this.unsubscribe = store.subscribe(() => {
  //     this.setState(store.getState())
  //   })

  //   axios.get('/api/campuses/')
  //     .then(res => res.data)
  //     .then(campuses => {
  //       const gotCampusesAction = gotCampusesFromServer(campuses)
  //       store.dispatch(gotCampusesAction)
  //     });
  // }

  // componentWillUnMount(){
  //   this.unsubscribe();
  // }

  // render () {
    // const campuses = this.state.campuses;
    return (
      <AllCampuses campuses={campuses} />
    );
  // }
}

const mapStateToProps = function (state) {
  return {
    campuses: state.campuses
  };
}

export default withRouter(connect(mapStateToProps)(StatefulCampuses));
