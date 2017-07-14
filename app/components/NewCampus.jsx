import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postCampus, enterNewCampus } from '../store';
import { connect } from "react-redux";

class NewCampus extends Component {

  render() {

    const { handleSubmit } = this.props;

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
                  onChange={this.handleNameChange}
                  name="campusName"
                  placeholder="Campus Name" /><br />

                <input
                  className="form-control"
                  type="text"
                  name="imageURL"
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
}

const mapDispatchToProps = function (dispatch, ownProps) {

  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const name = evt.target.campusName.value;
      const imageURL = evt.target.imageURL.value;
      dispatch(postCampus({ name, imageURL }))
    }
  };
}

export default connect(null, mapDispatchToProps)(NewCampus);

