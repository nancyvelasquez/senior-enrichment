import React, { Component } from "react";
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <h3>About the Hamilton Academy of Javascript</h3>
        <br></br>
        <p>Hamilton Academy is unlike any other academy in the world.</p>
        <br></br>
        <p>We’re the second oldest college in the nation, but also a cutting-edge technical university. We’re a "Public Ivy" — one of only eight in the nation — offering a world-class education at an exceptional value.
        Our students are not only some of the smartest in the world, but passionate about serving others and serious about having fun. Our professors are teachers, scholars and research mentors, the cornerstone of a thriving intellectual community that produces experienced, engaged, successful graduates.
        Through their strengths, passions and knowledge, our faculty, students and staff are creating a new model of sustainability for higher education.
        We love our hometown of Williamsburg and the amazing Commonwealth of Virginia and we’re proud to be one of the reasons for their economic success.
        </p>
        <div className="container campuses-students">
            <div className="row">
                <Link to="/campuses" className="button">See Campuses</Link>
                <Link to="/students" className="button">See Students</Link>
                {/*<Link to="/campuses" className="btn-flat btn-large col s5">
                    See All Campuses
                </Link>
                <Link
                    to="/students"
                    className="btn-flat btn-large col s5 offset-s2"
                    onClick={this.navigateToBarkers}>
                    See All Students
                </Link>*/}
            </div>
      </div>
      </div>
    );
  }
}

export default About;