import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core';
import LearnedItem from './LearnedItem/LearnedItem';

class Learned extends Component {
  render() {
    return (
      <div style={{ marginTop: 100 }}>
        <div className="container">
          <h1>What I've Learned</h1>
          <Button size="small">Front-End</Button>
          <Button> Back-End</Button>
          <Button> Extras</Button>
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
          <LearnedItem
            title="Web Developer Bootcamp"
            skills="HTML, CSS, JavaScript"
            date="Nov 2017"
            link="https://github.com/SPDUK/webdevbootcamp"
          />
        </div>
      </div>
    );
  }
}

export default Learned;
