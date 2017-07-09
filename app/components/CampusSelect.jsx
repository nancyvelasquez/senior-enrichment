import React, { Component } from 'react';
// import StatefulCampuses from './StatefulCampuses';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default class CampusSelect extends Component {
    constructor(props) {
        super(props);
        console.log('Campus select ', props)
        this.state = {
            campuses: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount () {
    axios.get('/api/campuses/')
      .then(res => res.data)
      .then(campuses => {
        this.setState({ campuses })
      });
  }

  handleChange(event) {
    this.setState({
        value: event.target.value });
  };

  handleSubmit(event) {
      console.log(this.state.value)
        event.preventDefault();
  }

  render() {
    const campuses = this.state.campuses

    return (
        <form onSubmit={this.handleSubmit}>
        <h2>Select a Campus: </h2>
        <select value={this.state.campuses} onChange={this.handleChange}>
            { 
            campuses.map((campus) => {
            return (
                <option key={campus} value={campus}>{campus}</option>
                )})
            }
        </select>
        </form>
        );
    }
};