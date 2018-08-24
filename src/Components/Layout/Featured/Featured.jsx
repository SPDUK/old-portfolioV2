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
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1535139951/Portfolio/CryptoMacbook.jpg"
                title="CryptoTracker"
                code="https://github.com/SPDUK/Crypto"
                link="https://spduk-crypto.herokuapp.com/"
                description="A full stack app, uses coinmarketcap API to get the latest bitcoin prices. Made with React and Ruby on Rails using PostgreSQL"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FeaturedProject
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1527838905/dgdmac.jpg"
                title="Dance Gavin Dance"
                code="https://github.com/SPDUK/dgd"
                link="https://spduk.github.io/dgd/"
                description="Fansite for the band dance gavin dance, made with React and custom CSS"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FeaturedProject
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1529670340/Portfolio/fira-minified.jpg"
                title="Startpage"
                code="https://github.com/SPDUK/startpage"
                link="https://startpage.fira.app"
                description="A full-stack startpage with todos, weather, clock, bookmarks and a searchbar that has multiple options. Made with React and Node.js using MongoDB."
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FeaturedProject
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1532426260/Portfolio/quickprojectsmac.jpg"
                title="Quick Projects"
                code="https://github.com/SPDUK/Quick-Projects"
                link="https://spduk.github.io/Quick-Projects/#/"
                description="A collection of quick things I've made that aren't big enough to deserve their own site, so I put them all in one, giving each project it's own page."
              />
            </Grid>
          </Grid>
        </LazyLoad>
      </div>
    </div>
  );
}

export default withStyles(styles)(Featured);
