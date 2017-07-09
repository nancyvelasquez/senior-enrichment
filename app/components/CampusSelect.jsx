import React, { Component } from 'react';

// exporting the constructor function (dumb component).
// what is the parameter coming in here?
export default class CampusSelect extends Component {
    constructor(props) {
            console.log("Campus select ", props)

        super(props);
        this.state = {
            value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
    const campus = this.props.campus;

    return (
        <form onSubmit={this.handleSubmit}>
            <label>Select a Campus: </label>
            <select value={this.state.value} onChange={this.handleChange}>
            {
                campuses.map((campus) => {
                    return (
                        <option key={campus} value={campus}>{campus}</option>
                    )}
                )
            }
            </select>
            <input type="submit" value="Submit" />
            </form>
        );
    }
};