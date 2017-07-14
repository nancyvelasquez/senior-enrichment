import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { postStudent, enterNewStudent, fetchCampuses } from '../store';
import { connect } from "react-redux";

const NewStudent = (props) => {

  const { handleSubmit, campuses } = props;

  return (
    <div className="well">
      <div id="form-container">
        <form onSubmit={handleSubmit} className="form-horizontal">
          <h2>Create New Student</h2>
          <div className="form-group">
            <input className="form-control" type="text" name="firstName" placeholder="First Name" /><br />
            <input className="form-control" type="text" name="lastName" placeholder="Last Name" /><br />
            <input className="form-control" type="text" name="email" placeholder="Email" /><br />
            <h2>Select a Campus: </h2>
            <div className="select-style">
            <label>
            <span className="custom-dropdown custom-dropdown--white">
            <select name="campusName" className="custom-dropdown__select custom-dropdown__select--white">
              {
                campuses.map((campus) => {
                  return (
                    <option key={campus.id} value={campus.id}>{campus.name}</option>
                  )
                }
                )
              }
            </select>
            </span>
            </label>
            </div>
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
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
        console.log('These are the arguments', arguments)

      const firstName = evt.target.firstName.value;
      const lastName = evt.target.lastName.value;
      const email = evt.target.email.value;
      const campusId = evt.target.campusName.value;

      dispatch(postStudent({ firstName, lastName, email, campusId }))
      ownProps.history.push('/')
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent);