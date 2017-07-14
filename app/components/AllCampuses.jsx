import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const AllCampuses = (props) => {

  const campuses = props.campuses;

  return (
    <div>
      <h3>Campuses</h3>
      <div className="row">
        {
          campuses && campuses.map(campus => (
            <div className="col-xs-4" key={campus.id} height="750px">
              <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                <div className="caption">
                  <h5>
                    <span>{campus.name}</span>
                    <img src={campus.imageURL} className="img-thumbnail" />
                  </h5>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
      <h4>
        <Link className="btn btn-primary btn-block" to="/new-campus">
          <span className="glyphicon glyphicon-plus" />
          ADD CAMPUS
          </Link>
      </h4>
    </div>
  );
};

export default AllCampuses;