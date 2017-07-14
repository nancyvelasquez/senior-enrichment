import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import { updateCampusThunk, fetchCampuses } from '../store';
import { connect } from "react-redux";

class EditCampus extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            imageURL: ""
        }
        this.handleCampusNameChange = this.handleCampusNameChange.bind(this);
        this.handleImageUrlChange = this.handleImageUrlChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleCampusNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleImageUrlChange(event) {
        this.setState({ imageURL: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = this.props.campus.id;
        const state = {
            name: this.state.name || this.props.campus.name,
            imageURL: this.state.imageURL || this.props.campus.imageURL
        }
        this.props.updateCampusThunk(this.props.campus.id, state)
        this.props.history.push('/')
        this.setState({ name: "", imageURL: "" })
    }

    render() {

        const { campus, handleSubmit } = this.props;

        return (
            <div className="well">
                <form onSubmit={this.handleSubmit} className="form-horizontal">
                    <fieldset>
                        <legend>Edit Campus</legend>
                        <div className="form-group">
                            <label className="col-xs-2 control-label"></label>
                            <div className="col-xs-8">
                                <input
                                    className="form-control"
                                    type="text"
                                    onChange={this.handleCampusNameChange}
                                    name="campusName"
                                    placeholder="Campus Name" /><br />

                                <input
                                    className="form-control"
                                    type="text"
                                    name="imageURL"
                                    onChange={this.handleImageUrlChange}
                                    placeholder="Image URL" /><br />
                            </div>
                        </div>
                        <img src={campus.imageURL} className="img-thumbnail" />
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

const mapStateToProps = (state, ownProps) => {
    const campusId = ownProps.match.params.campusId;
    return {
        campus: state.campuses.find(campus => campus.id === +campusId),
    }
}

const mapDispatch = {
    updateCampusThunk
}

export default connect(mapStateToProps, mapDispatch)(EditCampus);
