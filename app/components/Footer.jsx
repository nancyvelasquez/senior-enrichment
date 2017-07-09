import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <footer className="text-center">
        <a className="up-arrow" data-toggle="tooltip" title="TO TOP">
        <span className="glyphicon glyphicon-chevron-up"></span>
        </a>
        <br></br>
        <p>Project by Nancy Velasquez</p> 
    </footer>
  );
}

export default Footer;