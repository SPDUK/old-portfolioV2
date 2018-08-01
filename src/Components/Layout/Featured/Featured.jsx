import React from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import LazyLoad from 'react-lazyload';

import FeaturedProject from './FeaturedProject/FeaturedProject';

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
        <h1>Featured Personal Projects</h1>
        <LazyLoad height={500}>
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
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1529670340/Portfolio/fira-minified.jpg"
                title="Startpage"
                link="https://startpage.fira.app"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FeaturedProject
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1532426260/Portfolio/quickprojectsmac.jpg"
                title="Quick Projects"
                link="https://spduk.github.io/Quick-Projects/#/"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FeaturedProject
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1532426260/Portfolio/tradingpostmac.jpg"
                title="Trading Post"
                link="https://spduk.github.io/tradingpost/#/"
              />
            </Grid>
          </Grid>
        </LazyLoad>
      </div>
    </div>
  );
}

export default withStyles(styles)(Featured);
