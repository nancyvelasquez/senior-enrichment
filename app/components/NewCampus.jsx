import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewCampus extends Component {
  constructor() {
    super();
    this.state = {
      inputName: '',
      inputImageURL: '',
      nameInputDirty: false,
      imageInputDirty: false
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({
      inputName: event.target.value,
      nameInputDirty: true
    });
  }
  handleImageChange(event) {
    this.setState({
      inputImageURL: event.target.value,
      imageInputDirty: true,
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const name = this.state.inputName;
    const imageURL = this.state.inputImageURL;

    axios.post('/api/campuses', {
      name,
      imageURL
    })
    .then(res => res.data)
    .then({});

    this.setState({
      inputName: '',
      inputImageURL: '',
      nameInputDirty: false,
      imageInputDirty: false
    });
  }

  render() {

    const inputLength = this.state.inputName.length;
    const tooLong = inputLength > 40;
    const tooShort = inputLength < 1 && this.state.nameInputDirty;
    const noImage = this.state.inputImageURL.length < 1 && this.state.imageInputDirty;

    let warning;
    if(tooShort) {
      warning = "Please enter a campus name";
    } else if (tooLong) {
      warning = "Campus name length exceeded";
    }

    return (
      <div className="well">
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          <fieldset>
            <legend>Create New Campus</legend>
            {
              warning && <div className="alert alert-warning">{ warning }</div>
            }
            {
              noImage && <div className="alert alert-warning">Please add an image URL</div>
            }
            <div className="form-group">
              <label className="col-xs-2 control-label"></label>
              <div className="col-xs-8">
                <input value={this.state.inputName} 
                className="form-control" 
                type="text" 
                onChange={this.handleNameChange} 
                name="campusName" placeholder="Campus Name"/><br />

                <input value={this.state.inputImageURL} 
                className="form-control" 
                type="text" 
                onChange={this.handleImageChange} 
                name="imageURL" placeholder="Image URL"/><br />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={this.state.inputName.length < 1 || this.state.inputName.length > 40 || this.state.inputImageURL.length < 1}>
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
