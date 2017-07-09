import React, {Component} from 'react';
import CampusSelect from './CampusSelect';

export default class ChosenCampus extends Component {

  constructor(prop) {
    super(prop)
    this.state = { 
      campus: prop.campusSelect 
    }
    this.setAnimal = this.setCampus.bind(this)
  }

  setCampus(campus) {
    this.setState({ campus });
  }

  render () {
  	return (
	    <div className="chosen_campus">
            <CampusSelect campuses={ this.props.campuses } campus={ this.setCampus }/>
	    </div>
  		)
  }
};