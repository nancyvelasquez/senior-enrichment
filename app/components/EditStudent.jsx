import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { fetchStudents, updateStudent, updateStudentThunk, fetchCampuses } from '../store';
import { connect } from "react-redux";

const EditStudent = (props) => {

    // const firstNameValueLength = this.state.firstNameValue.length;
    // const lastNameValueLength = this.state.lastNameValue.length;
    // const tooLong = firstNameValueLength > 16 || lastNameValueLength > 16;
    // const tooShort = firstNameValueLength < 1 || lastNameValueLength < 1 && this.state.dirty;

    // let warning;
    // if(tooShort) {
    //   warning = "Please enter a name";
    // } else if (tooLong) {
    //   warning = "Name length exceeded";
    // }

    const { student, campuses, handleSubmit } = props;

    return (
      <div id="form-container">
         <form className="form-horizontal"> 
            <h2>Edit Student</h2>
            {/* {
              warning && <div className="alert alert-warning">{ warning }</div>
            } */}
            <div className="form-group">
                <input className="form-control" type="text" name="firstName" placeholder={ student.firstName }/><br />
                <input className="form-control" type="text" name="lastName" placeholder={ student.lastName }/><br />
                <input className="form-control" type="text" name="email" placeholder={ student.email }/><br />
                <h2>Select New Campus: </h2>
                  <select name="campusName">
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



const mapStateToProps = (state, ownProps) => {
 
  const studentId = ownProps.match.params.studentId;

  return {
    student: state.students.find(student => student.id === +studentId),
    campuses: state.campuses
  }
}

const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit(evt) {
      evt.preventDefault();

      console.log(evt.target)

      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;
      const campusId = evt.target.campusName.value;

      dispatch(updateStudentThunk({ firstName, lastName, email, campusId }))
    }
  };
}


// disabled={tooLong || tooShort}

export default connect(mapStateToProps, mapDispatchToProps)(EditStudent);
