import React, { Component } from "react";
import { Link } from 'react-router-dom';

class About extends Component {
  render() {
    return (
      <div>
        <div className="about_container">
          <img src={`https://s-media-cache-ak0.pinimg.com/736x/ab/a3/80/aba3807a2d3a92bdec69a8b96cb8039a--christopher-wren-go-places.jpg`} className="img-thumbnail" />
        </div>
        <h3>About the Hamilton Academy of Javascript</h3>
        <br></br>
        <p>Hamilton Academy is unlike any other academy in the world.</p>
        <p>We’re an original "Tech Ivy" — one of only a few in the nation — offering a world-class tech education at an exceptional value.
        Our students are not only some of the smartest in the world, but passionate about serving others and serious about having fun. Our professors are teachers, scholars and research mentors, the cornerstone of a thriving intellectual community that produces experienced, engaged, successful graduates.
        Through their strengths, passions and knowledge, our faculty, students and staff are creating a new model of sustainability for higher education.
        Text credit to William and Mary.
        </p>
      </div>
    );
  }
}

export default About;