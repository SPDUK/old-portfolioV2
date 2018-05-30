import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

import './Navbar.css';

const Navbar = () => (
  <div className="nav">
    <div className="nav-icon">
      <span>
        <strong>SP</strong>
      </span>
    </div>
    <div className="nav-menu">
      <Button>Projects</Button>
      <Button>Extras</Button>
      <Button>
        <strong>Contact</strong>
      </Button>
    </div>
    <IconButton className="nav-burger">
      <MenuIcon />
    </IconButton>
  </div>
);
export default Navbar;
