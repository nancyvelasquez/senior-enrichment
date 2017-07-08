import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class AllStudents extends Component {

  constructor (props) {
    super(props);
    this.state = {
      students: [ props ]
    };
  }

  componentDidMount () {
    axios.get('/api/students/')
      .then(res => res.data)
      .then(students => {
        this.setState({ students })
      });
  }

  render() {

    const students = this.state.students;

    return (
      <div>
        <h3>Students</h3>
        <div className="row">
          {
            students && students.map(student => (
              <div className="col-xs-4" key={ student.id }>
                <Link className="thumbnail" to={`/students/${student.id}`}>
                  <div className="caption">
                    <h5>
                      <span>{ `${student.lastName}, ${student.firstName} `}</span>
                    </h5>
                  </div>
                </Link>
              </div>
            ))
          }
        </div>
      </div>
    );
  };
};