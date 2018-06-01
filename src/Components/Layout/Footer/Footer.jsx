import React from 'react';
import { Typography } from '@material-ui/core';
import './Footer.css';

const Footer = () => (
  <div className="footer container">
    <Typography variant="headline">
      Looking for a developer?{' '}
      <a href="mailto:spdevuk@gmail.com" className="footer-title-link">
        Get in touch
      </a>
    </Typography>
    <div className="footer-links">
      <Typography variant="subheading">
        <a href="mailto:spdevuk@gmail.com">Email</a>
      </Typography>
      <Typography variant="subheading">
        <a href="https://github.com/SPDUK">Github</a>
      </Typography>
    </div>
  </div>
);

export default Footer;