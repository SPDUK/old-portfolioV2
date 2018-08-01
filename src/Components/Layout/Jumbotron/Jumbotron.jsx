import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

import Cards from './Cards/Cards';

class Jumbotron extends Component {
  render() {
    return (
      <LazyLoad height={600}>
        <div className="jumbo">
          <div className="container">
            <div className="jumbo-text">
              <h1>
                I'm Steve Parker, a JavaScript{' '}
                <a href="https://github.com/SPDUK">Developer</a> Currently
                living in Peterborough, England
              </h1>
            </div>
            <div className="jumbo-cards">
              <Cards />
            </div>
          </div>
        </div>
      </LazyLoad>
    );
  }
}

export default Jumbotron;
