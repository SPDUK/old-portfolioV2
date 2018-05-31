import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import FeaturedProject from './FeaturedProject/FeaturedProject';
import './Featured.css';

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  }
});

function Featured(props) {
  const { classes } = props;
  return (
    <div className="featured container">
      <h1>Featured Projects</h1>
      <div className="featured-gutters">
        <Grid className={classes.root} container spacing={24}>
          <Grid item md={6} xs={12}>
            <FeaturedProject
              image="http://res.cloudinary.com/dmjolhdaq/image/upload/v1527779355/Portfolio/imacpngg.png"
              title="Coming soon"
              link="https://www.google.com"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FeaturedProject
              image="http://res.cloudinary.com/dmjolhdaq/image/upload/v1527779355/Portfolio/imacpngg.png"
              title="Coming soon"
              link="https://www.google.com"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FeaturedProject
              image="http://res.cloudinary.com/dmjolhdaq/image/upload/v1527779355/Portfolio/imacpngg.png"
              title="Coming soon"
              link="https://www.google.com"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FeaturedProject
              image="http://res.cloudinary.com/dmjolhdaq/image/upload/v1527779355/Portfolio/imacpngg.png"
              title="Coming soon"
              link="https://www.google.com"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Featured);
