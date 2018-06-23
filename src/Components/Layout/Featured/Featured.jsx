import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import FeaturedProject from './FeaturedProject/FeaturedProject';
import './Featured.css';

const styles = {
  root: {
    flexGrow: 1,
    justifyContent: 'center'
  }
};

function Featured(props) {
  const { classes } = props;
  return (
    <div className="featured">
      <div className="container">
        <h1>Featured Projects</h1>
        <Grid className={classes.root} container spacing={24}>
          <Grid item md={6} xs={12}>
            <FeaturedProject
              image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1527838905/dgdmac.jpg"
              title="Dance Gavin Dance"
              link="https://spduk.github.io/dgd/"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <FeaturedProject
              image="http://res.cloudinary.com/dmjolhdaq/image/upload/v1529670340/Portfolio/fira-minified.jpg"
              title="Fira | Startpage"
              link="https://startpage.fira.app"
            />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default withStyles(styles)(Featured);
