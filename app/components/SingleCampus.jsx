import React, { Component } from 'react';
import axios from 'axios';
import Students from '../components/AllStudents';

export default class SingleCampus extends Component {

  constructor (props) {
    super(props);
    this.state = {
      singleCampus: {},
      students: []
    };
  }

//   componentDidMount () {
//     const campusId = this.props.match.params.campusId;
//     const mainPath = `/api/campuses/${campusId}`;
//     const paths = [mainPath, `${mainPath}/students`];

//     Bluebird
//       .map(paths, path => axios.get(path))
//       .map(res => res.data)
//       .spread((campus, students) => {
//         this.setState({ campus, students });
//         console.log
//       });
//   }

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


//     axios.get(`/api/campuses/${campusId}`)
//       .then(res => res.data)
//       .then(campus => this.setState({
//         campus
//       }));
//   }

  render () {
    const campus = this.state.singleCampus;
    const students = this.state.students;
    console.log('This is the state', this.state.students)

    return (
      <div className="campus">
        <div>
          <h3>{ campus.name }</h3>
          <p>{}</p>
          <img src={ campus.imageUrl } className="img-thumbnail" />
        </div>
        {/*<Students students={campus.students} />*/}
      </div>
    );
  }
}