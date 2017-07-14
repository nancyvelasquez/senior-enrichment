import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { updateStudentThunk } from '../store';
import { connect } from "react-redux";

class EditStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            email: "",
            campusId: 0
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleCampusChange = this.handleCampusChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value });
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value });
    }

    handleEmailChange(event) {
        this.setState({ email: event.target.value });
    }

    handleCampusChange(event) {
        this.setState({ campusId: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        const id = this.props.match.params.studentId;
        const student = this.props.students.filter(student => student.id === +id)

        const state = {
            firstName: this.state.firstName || student[0].firstName,
            lastName: this.state.lastName || student[0].lastName,
            email: this.state.email || student[0].email,
            campusId: this.state.campusId || student[0].campusId
        }

        this.props.updateStudentThunk(id, state)
        this.props.history.push('/')

        this.setState({ firstName: "", lastName: "", email: "", campusId: 0 })
    }

    render() {

        const { students, campuses } = this.props;

        const student = students.find(student => student.id === +this.props.match.params.studentId)
        const campus = campuses.find(campus => student.campusId === campus.id)

        return (
            <div className="well">
            <div id="form-container" onSubmit={this.handleSubmit}>
                <form className="form-horizontal">
                    <h2>Edit Student</h2>
                    <div className="form-group">
                        <input className="form-control"
                            type="text" name="firstName"
                            placeholder={student.firstName}
                            onChange={this.handleFirstNameChange}
                        /><br />
                        <input className="form-control"
                            type="text"
                            name="lastName"
                            placeholder={student.lastName}
                            onChange={this.handleLastNameChange} />
                        <br />
                        <input className="form-control"
                            type="text"
                            name="email"
                            placeholder={student.email}
                            onChange={this.handleEmailChange} />
                        <br />
                        <h2>Select New Campus: </h2>
                        <label>
                        <span class="custom-dropdown custom-dropdown--white">
                        <select name="campusName" onChange={this.handleCampusChange} className="custom-dropdown__select custom-dropdown__select--white">       
                            {
                                campuses.map((campus) => {
                                    return (
                                        <option key={campus.id}
                                            value={campus.id}>
                                            {campus.name}
                                        </option>
                                    )
                                }
                                )
                            }
                        </select>
                        </span>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-success">
                        Submit
            </button>
                </form>
            </div>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const studentId = ownProps.match.params.studentId;
    return { campuses: state.campuses, students: state.students }
}

const mapDispatch = {
    updateStudentThunk
}

export default connect(mapStateToProps, mapDispatch)(EditStudent);
