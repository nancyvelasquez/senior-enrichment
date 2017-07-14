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
    // this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    // this.handleLastNameChange = this.handleLastNameChange.bind(this);
    // this.handleEmailChange = this.handleEmailChange.bind(this);
    // this.handleCampusChange = this.handleCampusChange.bind(this);
// }

// handleFirstNameChange(event) {
//     this.setState({
//         firstName: event.target.value,
//     });
// }
 
// handleLastNameChange(event) {
//     this.setState({
//         lastName: event.target.value,
//     });
// }
 
// handleEmailChange(event) {
//     this.setState({
//         email: event.target.value,
//     });
// }
 
// handleCampusChange(event) {
//     this.setState({
//         campusId: event.target.value,
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

// const mapDispatchToProps = function (dispatch, ownProps) {
//     const studentId = Number(ownProps.match.params.studentId);
    
//   return {
//     handleSubmit(evt) {
//       evt.preventDefault();
//       const firstName = evt.target.firstName.value;
//       const lastName = evt.target.lastName.value;
//       const email = evt.target.email.value;
//       const campusId = evt.target.campusName.value;
//       console.log(campusId)

//       dispatch(updateStudentThunk(studentId, { firstName, lastName, email, campusId }))
//     }
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);

////////////////////////


import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { updateStudentThunk } from '../store';
import { connect } from "react-redux";

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            campusId: 0
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCampusChange = this.handleCampusChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({
            firstName: event.target.value,
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


    handleSubmit(event) {
        event.preventDefault();

        console.log('this props ', this.props.student.id)

        const id = this.props.student.id;
        const state = {
            firstName: this.state.firstName || this.props.student.firstName,
            lastName: this.state.lastName || this.props.student.lastName,
            email: this.state.email || this.props.student.email,
            campusId: this.state.campusId || this.props.student.campusId
        }

        this.props.updateStudentThunk(this.props.student.id, state)
        this.props.history.push('/')

        this.setState({ firstName: "", lastName: "", email: "", campusId: 0 })
    }

    render() {

    const { students, campuses } = this.props;

    const student = students.find(student => student.id === +this.props.match.params.studentId)
    const campus = campuses.find(campus => student.campusId === campus.id)

    return (
      <div id="form-container" onSubmit={this.handleSubmit}>
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


const mapStateToProps = (state, ownProps) => {
    const studentId = ownProps.match.params.studentId;

    return {
        campuses: state.campuses,
        students: state.students
    }
}

const mapDispatch = {
    updateStudentThunk
}

export default connect(mapStateToProps, mapDispatch)(EditStudent);
