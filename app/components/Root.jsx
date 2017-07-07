'use strict'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'

export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


//   componentDidMount() {
//     const currLocation = location.hash.substr(1);
//     console.log("currLocation", currLocation);
//     this.setState({ activeView: currLocation });
//   }

  render () {
    return (
      <Router>
        <div id="main" className="container-text-center">
            <div className="Root-header">
                <img src="../../public/pic1.jpeg" className="App-logo" alt="logo" />
                <h3>Margaret Hamilton Interplanetary Academy of JavaScript</h3>
            </div>

            <div className="container campuses-or-students">
                <div className="row">
                <Link to="/campuses" className="btn-flat btn-large col s5">
                    See All Campuses
                </Link>
                <Link to="/students" className="btn-flat btn-large col s5 offset-s2" onClick={this.navigateToBarkers}>
                    See All Students
                </Link>
                </div>
           </div>

           <div className="App-content container-fluid">
             <Switch>
               <Route exact path="/"
                 render={() => <AnimalsList animals={[...this.state.cats, ...this.state.dogs]}
                    view="All Cuties"
                   />}
               />
               <Route path="/dogs"
                render={() =>
                   <AnimalsList animals={this.state.dogs} view="Who let the dogs out?" />}
               />
               <Route path="/cats"
                 render={() => <AnimalsList animals={this.state.cats} view="Ownnn" />}
               />
               <Route path="/profile/:id"
                 render={({ match }) =>
                   <AnimalProfile
                     allAnimals={[...this.state.cats, ...this.state.dogs]}
                     id={match.params.id}
                   />}
               />
               <Route path="/about" component={About} />
               <Route component={NotFound} />
             </Switch>
           </div>

          {/*<Provider store={store}>
            <Root/>
          </Provider>*/}
        </div>
      </Router>
    )
  }
}
