import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import axios from 'axios';
import AllStudents from './AllStudents';
import AllCampuses from './AllCampuses';

export default class SingleCampus extends Component {

  constructor (props) {
    super(props);
    this.state = {
      singleCampus: {},
      students: []
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

componentDidMount () {
    const campusId = this.props.match.params.campusId;

    const getCampus = axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        this.setState({ singleCampus: campus })
      })

    const getStudents = axios.get(`/api/campuses/${campusId}/students`)
      .then(res => res.data)
      .then(students => {
        this.setState({ students: students })
      })

    Promise.all([getCampus, getStudents])
        .then(() => {
        })
  }

handleDelete(event) {
  event.preventDefault();
  const id = this.state.singleCampus.id;

    axios.delete(`/api/campuses/${id}`)
    // .then(res => res.redirect('/campuses'))
}

  render () {
    const campus = this.state.singleCampus;
    const students = this.state.students || [];
    const imageURL = campus.imageURL;

    console.log(students)
    return (
        <div>
            <h3>{ campus.name }</h3>
            <button onClick={this.handleDelete} type="reset" value="Reset">Delete Campus</button><br />

            <img src={ imageURL } className="img-thumbnail" />
            <h4>Number of Students: { students.length }</h4>

            <ul className="nav nav-pills nav-justified">
                <li><Link to={`/campuses/${campus.id}/students`}>LIST OF STUDENTS</Link></li>
                <li><Link to={`/campuses/`}>BACK TO CAMPUSES</Link></li>
            </ul>
            <Switch>
                <Route path={`/campuses/${campus.id}/students`} render={() => (
                <AllStudents students={ students } />
                )} />
                <Route path={`/campuses`} />
            </Switch> 
        </div>     
    );
  }
}