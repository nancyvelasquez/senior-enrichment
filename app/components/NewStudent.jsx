import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { postStudent, enterNewStudent, fetchCampuses } from '../store';
import { connect } from "react-redux";

const NewStudent = (props) => {

    const { handleSubmit, campuses } = props;

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

    return (
      <div id="form-container">
        <form onSubmit={handleSubmit} className="form-horizontal">
            <h2>Create New Student</h2>
            {/* {
              warning && <div className="alert alert-warning">{ warning }</div>
            } */}
            <div className="form-group">
                <input className="form-control" type="text" name="firstName" placeholder="First Name"/><br />
                <input className="form-control" type="text" name="lastName" placeholder="Last Name"/><br />
                <input className="form-control" type="text" name="email" placeholder="Email"/><br />
                <h2>Select a Campus: </h2>
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

const mapStateToProps = (state) => {
  return { campuses: state.campuses };
}


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit(evt) {
      evt.preventDefault();

      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;
      const campusId = evt.target.campusName.value;

      console.log('This is the name and image ', firstName, lastName, email, campusId)
      dispatch(postStudent({ firstName, lastName, email, campusId }))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);

// disabled={tooLong || tooShort}