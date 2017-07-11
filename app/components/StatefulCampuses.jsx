import React, { Component } from 'react';
import axios from 'axios';
import AllCampuses from './AllCampuses';
import store, { GOT_CAMPUSES_FROM_SERVER } from '../store';

export default class StatefulCampuses extends Component {

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

    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        const gotCampusesAction = gotCampusesFromServer(campuses)
        store.dispatch(gotCampusesAction)
      });
  }

  componentWillUnMount(){
    this.unsubscribe();
  }

  render () {

    console.log(this.state);

    const campuses = this.state.campuses;

    return (
      <AllCampuses campuses={campuses} />
    );
  }
}