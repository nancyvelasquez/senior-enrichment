import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
// import store, { newStudent } from file
// import thunkMiddleware from 'redux-thunk;  // make sure you add thunk

export default class NewStudent extends Component {
  constructor() {
    super();
    this.state = {
      firstNameValue: '',
      lastNameValue: '',
      emailValue: '',
      campusValue: 0,
      dirty: false,
      campuses: []
      // this.state = store.getState();
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {

    // this.unsubscribe = store.subscribe{() => this.setState(store.getState()))}

    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses })
      });
  }

  // componentWillUnMount() {
  //   this.unsubscribe();
  // }
  
  handleFirstNameChange(event) {
    this.setState({ firstNameValue: event.target.value, dirty: true });

    // const action = newStudent(inputValue);
    // store.dispatch(action); 
  }

  handleLastNameChange(event) {
    this.setState({lastNameValue: event.target.value});
  }

  handleEmailChange(event) {
    this.setState({emailValue: event.target.value});
  }

  handleCampusChange(event) {
    this.setState({campusValue: event.target.value});
  }
  
  handleSubmit(event) {
    event.preventDefault();

    // const firstName = this.state.firstNameValue,
    // const lastName = this.state.lastNameValue,
    // const email = this.state.emailValue,
    // const campusId = this.state.campusValue

    // this.props.addStudent([firstName, lastName, email, campusId])
    
    axios.post('/api/students', {
      firstName: this.state.firstNameValue,
      lastName: this.state.lastNameValue,
      email: this.state.emailValue,
      campusId: this.state.campusValue
    })
    .then(res => res.data)
    .then(newStudent => {
      console.log(newStudent)
    });

    this.setState({
      firstNameValue: '',
      lastNameValue: '',
      emailValue: '',
      campusValue: 0,
    });
  }

  render() {

    const firstNameValueLength = this.state.firstNameValue.length;
    const lastNameValueLength = this.state.lastNameValue.length;
    const tooLong = firstNameValueLength > 16 || lastNameValueLength > 16;
    const tooShort = firstNameValueLength < 1 || lastNameValueLength < 1 && this.state.dirty;

    let warning;
    if(tooShort) {
      warning = "Please enter a name";
    } else if (tooLong) {
      warning = "Name length exceeded";
    }

    return (
      <div id="form-container">
        <form onSubmit={this.handleSubmit} className="form-horizontal">
            <h2>Create New Student</h2>
            {
              warning && <div className="alert alert-warning">{ warning }</div>
            }
            <div className="form-group" onChange={this.handleChange}>
                <input value={this.state.firstNameValue} className="form-control" type="text" onChange={this.handleFirstNameChange} name="firstName" placeholder="First Name"/><br />
                <input value={this.state.lastNameValue} className="form-control" type="text" onChange={this.handleLastNameChange} name="lastName" placeholder="Last Name"/><br />
                <input value={this.state.emailValue} className="form-control" type="text" onChange={this.handleEmailChange} name="email" placeholder="Email"/><br />
                <h2>Select a Campus: </h2>
                  <select value={this.state.campusValue} onChange={this.handleCampusChange}>
                  {
                      this.state.campuses.map((campus) => {
                          return (
                              <option key={campus.id} 
                              value={campus.id}>
                              {campus.name}
                              </option>
                          )}
                      )
                  }
                  </select>
            </div>
            <button type="submit" className="btn btn-success" disabled={tooLong || tooShort}>Submit</button>
        </form>
      </div>
    );
  }
}