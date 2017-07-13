import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import store, { fetchStudents, updateStudent, updateStudentThunk, fetchCampuses } from '../store';
import { connect } from "react-redux";
import axios from 'axios';

export default class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            campusId: 0
        }
            // // firstName: this.props.firstName,
            // // lastName: this.props.lastName,
            // // email: this.props.email,
            // // campusId: this.props.campusId
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCampusChange = this.handleCampusChange.bind(this);
}

componentDidMount() {
    this.unsubscribe = store.subscribe(() => this.setState(store.getState));
}

componentWillUnmount() {
    this.unsubscribe();
}

// componentDidMount() {
//     const id = this.props.match.params.studentId;
    
//     axios.get(`/api/students/${+id}`)
//        .then(res => res.data)
//        .then(student => {

//            this.setState({ 
//                firstName: student.firstName, 
//                lastName: student.lastName, 
//                 email: student.email, 
//                 campusId: student.campusId
//             });
//        })
// }

handleFirstNameChange(event) {
        this.setState({
            firstName: event.target.value,
            dirty: true
        });
    }
 
handleLastNameChange(event) {
            this.setState({
            lastName: event.target.value,
        });
    }
 
handleEmailChange(event) {
        this.setState({
        email: event.target.value,
    });
    }
 
handleCampusChange(event) {
        console.log('handling campus', event.target.value)
        this.setState({
        campusId: event.target.value,
        });
    }

handleSubmit(event) {
    console.log('This is the state ', this.state)
    event.preventDefault();
      axios.put(`/api/students/${id}`, this.state)
       .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));

    this.setState({
            firstName: "",
            lastName: "",
            email: "",
            campusId: 0   
    })
}

// router.put('/:id', function (req, res, next) {
//   Students.update(req.body, {
//     where: {id: req.params.id},
//     returning: true
//   })
//   .then(function (results) {
//     console.log(results)
//     res.json({
//       message: 'Updated successfully',
//     });
//   })
//   .catch(next);
// });

// componentWillReceiveProps(newProps) {
//     this.setState({
//         firstName: "",
//         lastName: "",
//         email: "",
//         campusId: 0
//     });
// }

render() {

    const id = Number(this.props.match.params.studentId);
    console.log('These are hte props ', this.props)
    // const student = this.state.students.filter(student => student.id === id)
    // console.log('This is the student ', student)
    // const firstNameValueLength = this.state.firstName.length;
    // const lastNameValueLength = this.state.firstName.length;
    // const tooLong = firstNameValueLength > 16 || lastNameValueLength > 16;
    // const tooShort = firstNameValueLength < 1|| lastNameValueLength < 1 && this.state.dirty;
 
    // let warning = tooShort ? "Please enter name(s)" : tooLong ? "Name length exceeded" : null;
    // const tooShort = firstNameValueLength < 1 || lastNameValueLength < 1 && this.state.dirty;
  
    // const campuses = this.state.campuses;
    // let warning;
    // if(tooShort) {
    // warning = "Please enter a name";
    // } else if (tooLong) {
    // warning = "Name length exceeded";
    // }

    // const { student, campuses } = this.props;

    return (
      <div id="form-container" onSubmit={this.handleSubmit}>
         <form className="form-horizontal"> 
            <h2>Edit Student</h2>
            <div className="form-group">
                <input className="form-control" 
                type="text" name="firstName" 
                placeholder={ this.state.firstName }
                value={this.state.firstName}
                onChange={this.handleFirstNameChange}
                /><br />
                <input className="form-control" 
                type="text" 
                name="lastName" 
                placeholder={ this.state.lastName }
                value={this.state.lastName}
                onChange={this.handleLastNameChange}/>
                <br />
                <input className="form-control" 
                type="text" 
                name="email" 
                placeholder={ this.state.email }
                value={this.state.email}
                onChange={this.handleEmailChange}/>
                <br />
                <h2>Select New Campus: </h2>
                  {/* <select name="campusName" value={this.state.campuses} onChange={this.handleCampusChange}>
                    {
                      campuses.map((campus) => {
                          return (
                              <option key={campus.id} value={campus.id}>{campus.name}</option>
                          )}
                      )
                  }  
                  </select> */}
            </div>
        <button type="submit" className="btn btn-success">Submit</button>        
        </form>
      </div>
    );
  }
}

// function onStudentUpdate (updatedItem, ownProps) {
//     console.log('Hi ', updatedItem)
//     console.log('And state ', ownProps)
//     const { student } = this.state;
// }

// const mapStateToProps = (state, ownProps) => {
//   const studentId = ownProps.match.params.studentId;
//   return {
//     student: state.students.find(student => student.id === +studentId),
//     campuses: state.campuses
//   }
// }

// const mapDispatchToProps = function (dispatch, ownProps) {
//     console.log('These are my ownProps ', ownProps)
//   return {
//     handleSubmit(evt) {
//       dispatch(updateStudentThunk({ 
//           id: ownProps.id, 
//           firstName: ownProps.firstName, 
//           lastName: ownProps.lastName, 
//           email: ownProps.email, 
//           campusId: ownProps.campusId }))
//     }
//   };
// }

// export default connect(mapStateToProps)(EditStudent);






 // disabled={tooLong || tooShort }