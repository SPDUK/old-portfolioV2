import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import LearnedItem from './LearnedItem/LearnedItem';

class Learned extends Component {
  state = {
    showFrontEnd: true,
    showFullStack: true
  };

  showFrontEnd() {
    this.setState({
      showFrontEnd: true,
      showFullStack: false
    });
  }

  render() {
    // basic functions to change which LearnedItem will show basic on conditional rendering below
    const showFullStack = () => {
      this.setState({
        showFrontEnd: false,
        showFullStack: true
      });
    };
    const showFrontEnd = () => {
      this.setState({
        showFrontEnd: true,
        showFullStack: false
      });
    };
    const showAllStacks = () => {
      this.setState({
        showFrontEnd: true,
        showFullStack: true
      });
    };
    // can't map over LearnedItem because I want to conditionally render each one.
    return (
      <div style={{ marginTop: 100 }}>
        <div className="container">
          <h1>What I've Learned</h1>
          <Button onClick={showFrontEnd}>Front-End</Button>
          <Button onClick={showFullStack}>Full-Stack</Button>
          <Button onClick={showAllStacks}>Show All</Button>

          {this.state.showFullStack ? (
            <LearnedItem
              title="Web Developer Bootcamp"
              skills="CSS, JavaScript, Express, MongoDB"
              date="Nov 2017"
              link="https://github.com/SPDUK/webdevbootcamp"
            />
          ) : null}
          {this.state.showFrontEnd ? (
            <LearnedItem
              title="Git a Web Developer Job"
              skills="Sass, JavaScript, Gulp"
              date="Nov 2017"
              link="https://github.com/SPDUK/travel-site"
            />
          ) : null}

          {this.state.showFrontEnd ? (
            <LearnedItem
              title="React for Beginners"
              skills="React, Firebase"
              date="Feb 2018"
              link="https://github.com/SPDUK/store-app"
            />
          ) : null}
          {this.state.showFullStack ? (
            <LearnedItem
              title="Node with React"
              skills="React, Redux, Express, MongoDB"
              date="Apr 2018"
              link="https://github.com/SPDUK/emailserver"
            />
          ) : null}
          {this.state.showFullStack ? (
            <LearnedItem
              title="Learn Node"
              skills="Node.js, Express, MongoDB"
              date="May 2018"
              link="https://github.com/SPDUK/learnnode"
            />
          ) : null}
          {this.state.showFullStack ? (
            <LearnedItem
              title="MERN Front to back"
              skills="React, Redux, Express, MongoDB"
              date="May 2018"
              link="https://github.com/SPDUK/devconnector"
            />
          ) : null}
        </div>
      </div>
    );
  }
}

export default Learned;
