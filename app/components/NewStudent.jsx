import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import ChosenCampus from './ChosenCampus';
// import CampusSelect from './CampusSelect';

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
    };
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleCampusChange = this.handleCampusChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses })
      });
  }
  
  handleFirstNameChange(event) {
    this.setState({
      firstNameValue: event.target.value,
      dirty: true
    });
  }
  handleLastNameChange(event) {
    this.setState({
      lastNameValue: event.target.value,
    });
  }
  handleEmailChange(event) {
    this.setState({
      emailValue: event.target.value,
    });
  }
  handleCampusChange(event) {
    console.log('Campus ', event.target.value)
    this.setState({
      campusValue: event.target.value,
    });
  }
  
  handleSubmit(event) {
    event.preventDefault();

    const firstName = this.state.firstNameValue;
    const lastName = this.state.lastNameValue;
    const email = this.state.emailValue;
    const campusId = this.state.campusValue;

    axios.post('/api/students', {
      firstName,
      lastName,
      email,
      campusId
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
    const lastNameValueLength = this.state.firstNameValue.length;
    const tooLong = firstNameValueLength > 16 || lastNameValueLength > 16;
    const tooShort = firstNameValueLength < 1|| lastNameValueLength < 1 && this.state.dirty;

    let warning = tooShort ? "Please enter name(s)" : tooLong ? "Name length exceeded" : null;

    const campuses = this.state.campuses;

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
                {/*<ChosenCampus campuses={campuses}/>*/}
                  <select value={this.state.campusValue} onChange={this.handleCampusChange}>
                  {
                      this.state.campuses.map((campus) => {
                          return (
                              <option key={campus.id} value={campus.id}>{campus.name}</option>
                          )}
                      )
                  }
                  </select>
            </div>
            <button type="submit" className="btn btn-success" disabled={tooLong || tooShort }>Submit</button>
        </form>
      </div>
    );
  }
}


//     return (
//       <div className="well">
//         <form onSubmit={this.handleSubmit} className="form-horizontal">
//           <fieldset>
//             <legend>Create New Campus</legend>
            // {
            //   warning && <div className="alert alert-warning">{ warning }</div>
            // }
//             <div className="form-group">
//               <label className="col-xs-2 control-label"></label>
//               <div className="col-xs-8">
//                 <input value={this.state.inputName} 
//                 className="form-control" 
//                 type="text" 
//                 onChange={this.handleNameChange} 
//                 name="campusName" placeholder="Campus Name"/><br />

//                 <input value={this.state.inputImageURL} 
//                 className="form-control" 
//                 type="text" 
//                 onChange={this.handleImageChange} 
//                 name="imageURL" placeholder="Image URL"/><br />
//               </div>
//             </div>
//             <div className="form-group">
//               <div className="col-xs-10 col-xs-offset-2">
//                 <button type="submit" className="btn btn-success" disabled={this.state.inputName.length < 1 || this.state.inputName.length > 20}>
//                 Submit
//                 </button>
//               </div>
//             </div>
//           </fieldset>
//         </form>
//       </div>
//     );
//   }
// }
