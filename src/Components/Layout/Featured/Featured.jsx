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
    <div className="featured">
      <div className="featured-gutters">
        <h1>Featured Projects</h1>
        <Grid className={classes.root} container spacing={24}>
          <Grid item md={6} xs={12}>
            <FeaturedProject
              image="http://res.cloudinary.com/dmjolhdaq/image/upload/v1527838905/dgdmac.jpg"
              title="Dance Gavin Dance"
              link="https://spduk.github.io/dgd/"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FeaturedProject
              image="http://res.cloudinary.com/dmjolhdaq/image/upload/v1527838893/tradingpostmac.jpg"
              title="Trading Post"
              link="https://spduk.github.io/tradingpost/"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Featured);
