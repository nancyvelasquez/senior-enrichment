import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { postCampus, enterNewCampus } from '../store';
import { connect } from "react-redux";

class NewCampus extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     inputName: '',
  //     inputImageURL: '',
  //     nameInputDirty: false,
  //     imageInputDirty: false,
  //     redirectToNewPage: false
  //   };
  //   this.handleNameChange = this.handleNameChange.bind(this);
  //   this.handleImageChange = this.handleImageChange.bind(this);
  // }

  // handleNameChange(event) {
  //   this.setState({
  //     inputName: event.target.value,
  //     nameInputDirty: true
  //   });
  // }
  // handleImageChange(event) {
  //   this.setState({
  //     inputImageURL: event.target.value,
  //     imageInputDirty: true,
  //   });
  // }


  render() {

    const { handleSubmit } = this.props;

    // const inputLength = this.state.inputName.length;
    // const tooLong = inputLength > 40;
    // const tooShort = inputLength < 1 && this.state.nameInputDirty;
    // const noImage = this.state.inputImageURL.length < 1 && this.state.imageInputDirty;

    // let warning;
    // if(tooShort) {
    //   warning = "Please enter a campus name";
    // } else if (tooLong) {
    //   warning = "Campus name length exceeded";
    // }
    
    return (
      <div className="well">
        <form onSubmit={handleSubmit} className="form-horizontal">
          <fieldset>
            <legend>Create New Campus</legend>
            {/* {
              warning && <div className="alert alert-warning">{ warning }</div>
            }
            {
              noImage && <div className="alert alert-warning">Please add an image URL</div>
            } */}
            <div className="form-group">
              <label className="col-xs-2 control-label"></label>
              <div className="col-xs-8">
                <input
                className="form-control" 
                type="text" 
                onChange={this.handleNameChange} 
                name="campusName" 
                placeholder="Campus Name"/><br />

                <input
                className="form-control" 
                type="text" 
                name="imageURL" 
                placeholder="Image URL"/><br />
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
      console.log('This is the name and image ', name, imageURL)
      dispatch(postCampus({ name, imageURL }))
    }
  };
}

export default connect(null, mapDispatchToProps)(NewCampus);

// disabled={this.state.inputName.length < 1 || this.state.inputName.length > 40 || this.state.inputImageURL.length < 1}