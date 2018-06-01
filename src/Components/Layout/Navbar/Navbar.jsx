import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { animateScroll as scroll, scroller } from 'react-scroll';

import './Navbar.css';

import Drawer from './Drawer/Drawer';

class Navbar extends Component {
  state = {
    right: false
  };

  scrollToProjects = () => {
    scroller.scrollTo('featured', {
      duration: 400,
      offset: -70,
      smooth: 'easeIn'
    });
  };
  scrollToCourses = () => {
    scroller.scrollTo('learned', {
      duration: 400,
      offset: -70,
      smooth: 'easeIn'
    });
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    return (
      <div className="nav container">
        <div className="nav-icon">
          <a href="/">SP</a>
        </div>
        <div className="nav-menu">
          <Button onClick={this.scrollToProjects} className="nav-menu-item">
            Projects
          </Button>
          <Button onClick={this.scrollToCourses} className="nav-menu-item">
            Courses
          </Button>
          <a href="mailto:spdevuk@gmail.com">
            <Button className="nav-menu-item">
              <strong>Contact</strong>
            </Button>
          </a>
          <Drawer
            scrollToCourses={this.scrollToCourses}
            scrollToProjects={this.scrollToProjects}
            right={this.state.right}
            toggleDrawer={this.toggleDrawer}
          />
          <IconButton
            onClick={this.toggleDrawer('right', true)}
            className="nav-menu-burger"
          >
            <MenuIcon />
          </IconButton>
        </div>
      </div>
    );
  }
}
export default Navbar;