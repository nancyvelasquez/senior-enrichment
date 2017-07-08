import React, { Component } from 'react';
import axios from 'axios';
import Students from '../components/AllStudents';

export default class SingleCampus extends Component {

  constructor () {
    super();
    this.state = {
      campus: {}
    };
  }

  componentDidMount () {
    const campusId = this.props.match.params.campusId;

    axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => this.setState({
        campus
      }));
  }

  render () {
    const campus = this.state.campus;

    return (
      <div className="campus">
        <div>
          <h3>{ campus.name }</h3>
          <img src={ campus.imageUrl } className="img-thumbnail" />
        </div>
        <Students students={campus.students} />
      </div>
    );
  }
}