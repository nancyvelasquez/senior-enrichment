// import React, { Component } from 'react';
// import { Link, Switch, Route } from 'react-router-dom';
// import store, { fetchStudents, updateStudent, updateStudentThunk, fetchCampuses } from '../store';
// import { connect } from "react-redux";
// import axios from 'axios';

// class EditStudent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             firstName: "",
//             lastName: "",
//             email: "",
//             campusId: 0
//         }
//         this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
//         this.handleLastNameChange = this.handleLastNameChange.bind(this);
//         this.handleEmailChange = this.handleEmailChange.bind(this);
//         this.handleCampusChange = this.handleCampusChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this)
// }

// handleFirstNameChange(event) {
//         this.setState({
//             firstName: event.target.value,
//         });
//     }
 
// handleLastNameChange(event) {
//         this.setState({
//             lastName: event.target.value
//         });
//     }
 
// handleEmailChange(event) {
//         this.setState({
//         email: event.target.value,
//     });
//     }
 
// handleCampusChange(event) {
//         this.setState({
//         campusId: event.target.value,
//         });
//     }

// handleSubmit (event) {
//     event.preventDefault();

//     console.log(this.state)

//     this.props.updateStudentThunk(this.props.id, this.state)
//     // this.props.history.push('/')

//     this.setState({
//             firstName: "",
//             lastName: "",
//             email: "",
//             campusId: 0
//     });
// }


// render() {

//     const { student, campuses, handleSubmit } = this.props;

//     return (
//       <div id="form-container" onSubmit={handleSubmit}>
//          <form className="form-horizontal"> 
//             <h2>Edit Student</h2>
//             <div className="form-group">
//                 <input className="form-control" 
//                 type="text" name="firstName" 
//                 placeholder={ student.firstName }
//                 onChange={this.handleFirstNameChange}
//                 /><br />
//                 <input className="form-control" 
//                 type="text" 
//                 name="lastName" 
//                 placeholder={ student.lastName }
//                 onChange={this.handleLastNameChange}/>
//                 <br />
//                 <input className="form-control" 
//                 type="text" 
//                 name="email" 
//                 placeholder={ student.email }
//                 onChange={this.handleEmailChange}/>
//                 <br />
//                 <h2>Select New Campus: </h2>
//                    <select name="campusName" onChange={this.handleCampusChange}>
//                     {
//                       campuses.map((campus) => {
//                           return (
//                               <option key={campus.id} value={campus.id}>{campus.name}</option>
//                           )}
//                       )
//                   }  
//                   </select> 
//             </div>
//         <button type="submit" className="btn btn-success">Submit</button>        
//         </form>
//       </div>
//     );
//   }
// }

// const mapStateToProps = (state, ownProps) => {
//   const studentId = ownProps.match.params.studentId;
//   return {
//     student: state.students.find(student => student.id === +studentId),
//     campuses: state.campuses
//   }
// }

// // const mapDispatchToProps = function (dispatch, ownProps) {
// //     const studentId = ownProps.match.params.studentId;

// //     return {
// //         handleSubmit(evt) {
// //         const firstName = evt.target.firstName.value;
// //         const lastName = evt.target.lastName.value;
// //         const email = evt.target.email.value;
// //         const campusId = evt.target.campusName.value;

// //         dispatch(updateStudentThunk(studentId, { firstName, lastName, email, campusId }))
    
// //         }
// //     }
// // }

// export default connect(mapStateToProps, null)(EditStudent);


import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import store, { fetchStudents, updateStudent, updateStudentThunk, fetchCampuses } from '../store';
import { connect } from "react-redux";
import axios from 'axios';

class EditStudent extends Component {
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

// componentDidMount() {
//     this.unsubscribe = store.subscribe(() => this.setState(store.getState));
// }

// componentWillUnmount() {
//     this.unsubscribe();
// }

// // componentDidMount() {
// //     const id = this.props.match.params.studentId;
    
// //     axios.get(`/api/students/${+id}`)
// //        .then(res => res.data)
// //        .then(student => {

// //            this.setState({ 
// //                firstName: student.firstName, 
// //                lastName: student.lastName, 
// //                 email: student.email, 
// //                 campusId: student.campusId
// //             });
// //        })
// // }

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
        this.setState({
        campusId: event.target.value,
        });
    }

// handleSubmit(event) { // call thunk 
//     console.log('This is the state ', this.state)
//     event.preventDefault();

//     const thisStudent = this.state;
//     console.log('This is the student yo ', thisStudent)
//     // store.dispatch(updateStudentThunk( id, {firstName, lastName, email, campusId }));

//     axios.put(`/api/students/${id}`, thisStudent)
//        .then(res => dispatch(update(res.data)))
//        .catch(err => console.error(`Updating student: ${student} unsuccessful`, err));
// }

// handleSubmit (evt) {
//     evt.preventDefault();

//     const { name, newMessageEntry } = this.state;
//     const content = newMessageEntry;
//     const { channelId } = this.props;

//     store.dispatch(updateStudentThunk( id, {firstName, lastName, email, campusId }));
//   }
//     this.setState({
//             firstName: "",
//             lastName: "",
//             email: "",
//             campusId: 0   
//     })
// }

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

    // const id = Number(this.props.match.params.studentId);
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

    const { student, campuses, handleSubmit } = this.props;

    return (
      <div id="form-container" onSubmit={handleSubmit}>
         <form className="form-horizontal"> 
            <h2>Edit Student</h2>
            <div className="form-group">
                <input className="form-control" 
                type="text" name="firstName" 
                placeholder={ student.firstName }
                onChange={this.handleFirstNameChange}
                /><br />
                <input className="form-control" 
                type="text" 
                name="lastName" 
                placeholder={ student.lastName }
                onChange={this.handleLastNameChange}/>
                <br />
                <input className="form-control" 
                type="text" 
                name="email" 
                placeholder={ student.email }
                onChange={this.handleEmailChange}/>
                <br />
                <h2>Select New Campus: </h2>
                   <select name="campusName" onChange={this.handleCampusChange}>
                    {
                      campuses.map((campus) => {
                          return (
                              <option key={campus.id} value={campus.id}>{campus.name}</option>
                          )}
                      )
                  }  
                  </select> 
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

const mapStateToProps = (state, ownProps) => {
  const studentId = ownProps.match.params.studentId;
  return {
    student: state.students.find(student => student.id === +studentId),
    campuses: state.campuses
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
    const studentId = Number(ownProps.match.params.studentId);
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;
      const campusId = evt.target.campusName.value;
      console.log(campusId)

      dispatch(updateStudentThunk(studentId, { firstName, lastName, email, campusId }))


    //   dispatch(updateStudentThunk(ownProps.id, {  
    //       firstName: ownProps.firstName, 
    //       lastName: ownProps.lastName, 
    //       email: ownProps.email, 
    //       campusId: ownProps.campusId }))
    // }
  }
}
}

// const mapDispatchToProps = function (dispatch, ownProps) {
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault();

//       const firstName = evt.target.firstName.value;
//       const lastName = evt.target.lastName.value;
//       const email = evt.target.email.value;
//       const campusId = evt.target.campusName.value;

//       dispatch(postStudent({ firstName, lastName, email, campusId }))
//     }
//   };
// }

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
