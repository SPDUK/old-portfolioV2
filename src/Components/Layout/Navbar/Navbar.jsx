import React, { Component } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import './Navbar.css';

import Drawer from './Drawer/Drawer';

class Navbar extends Component {
  state = {
    right: false
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open
    });
  };

  render() {
    return (
      <div className="nav">
        <div className="nav-icon">
          <a href="/">SP</a>
        </div>
        <div className="nav-menu">
          <Button>Projects</Button>
          <Button>Extras</Button>
          <Button>
            <strong>Contact</strong>
          </Button>
        </div>
        <Drawer right={this.state.right} toggleDrawer={this.toggleDrawer} />
        <IconButton
          onClick={this.toggleDrawer('right', true)}
          className="nav-burger"
        >
          <MenuIcon />
        </IconButton>
      </div>
    );
  }
}
export default Navbar;
