import React, { Component } from 'react';
import Cards from './Cards/Cards';
import './Jumbotron.css';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbo">
        <div className="container">
          <div className="jumbo-text">
            <h1>
              I'm Steve Parker, a JavaScript{' '}
              <a href="https://github.com/SPDUK">Developer</a> Currently living
              in Peterborough, England
            </h1>
          </div>
          <div className="jumbo-cards">
            <Cards />
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
