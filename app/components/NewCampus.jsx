import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class NewCampus extends Component {
  constructor() {
    super();
    this.state = {
      campusName: '',
      disabled: true,
      dirty: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value,
      disabled: !(event.target.value.length > 0 && event.target.value.length <= 16),
      dirty: true
    });
  }
  handleSubmit(event) {
    this.props.addPlaylist(this.state.inputValue)
    event.preventDefault();
    this.setState({
      inputValue: '',
      disabled: true,
    });
  }

  render() {

    return (
      <div className="well">
        <form onSubmit={this.handleSubmit} className="form-horizontal">
          <fieldset>
            <legend>Create New Campus</legend>
            <div className="form-group">
              <label className="col-xs-2 control-label">Enter Name</label>
              <div className="col-xs-10">
                <input value={this.state.inputValue} className="form-control" type="text" onChange={this.handleChange} />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-10 col-xs-offset-2">
                <button type="submit" className="btn btn-success" disabled={this.state.disabled}>Submit</button>
                 { this.state.dirty && this.state.disabled ? (this.state.inputValue.length === 0) ? <div className="alert alert-warning">Please enter a name</div> 
                : <div className="alert alert-warning">Input length exceeded</div> : null }
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    );
  }
}
