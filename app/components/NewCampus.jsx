import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postCampus, enterNewCampus } from '../store';
import { connect } from "react-redux";

const NewCampus = (props) => {

    const { handleSubmit, campuses } = props;

    return (
      <div className="well">
        <form onSubmit={handleSubmit} className="form-horizontal">
          <fieldset>
            <legend>Create New Campus</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label"></label>
              <div className="col-xs-8">
                <input
                  className="form-control"
                  type="text"
                  name="campusName"
                  placeholder="Campus Name" /><br />

                <input
                  className="form-control"
                  type="text"
                  name="imageUrl"
                  placeholder="Image URL" /><br />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" >
                  Submit
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
// }

const mapStateToProps = (state, ownProps) => {  
  return {
    campuses: state.campuses,
    students: state.students
  }
}


const mapDispatchToProps = function (dispatch, ownProps) {
  return {
    handleSubmit(evt) {

      evt.preventDefault();
      const name = evt.target.campusName.value;
      const imageUrl = evt.target.imageUrl.value;
      dispatch(postCampus({ name, imageUrl }))
      // ownProps.history.push('/')

    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus);

