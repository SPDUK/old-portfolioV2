import React, { Component } from 'react';

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
        </div>
      </div>
    );
  }
}

export default Jumbotron;
