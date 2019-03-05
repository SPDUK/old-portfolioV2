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
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1544748283/Portfolio/poe.jpg"
                title="Poewishlist"
                code="https://poewishlist.xyz/about"
                link="https://poewishlist.xyz"
                description="A complex app for a game, which tracks the price of thousands of items across multiple versions, decodes information from an unsupported 3rd party app to import directly into the site. Made with React and Elixir."
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FeaturedProject
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1535139951/Portfolio/crypto.jpg"
                title="CryptoTracker"
                code="https://github.com/SPDUK/Crypto"
                link="https://spduk-crypto.herokuapp.com/"
                description="A full stack app, uses coinmarketcap API to get the latest bitcoin prices. Made with React and Ruby on Rails using PostgreSQL (may load slow, hosted on heroku free tier)"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FeaturedProject
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1551743902/Portfolio/dgd_2.jpg"
                title="Dance Gavin Dance"
                code="https://github.com/SPDUK/dgd"
                link="https://spduk.github.io/dgd/"
                description="Fansite for the band dance gavin dance, made with React and custom CSS"
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <FeaturedProject
                image="https://res.cloudinary.com/dmjolhdaq/image/upload/v1529670340/Portfolio/startpage.jpg"
                title="Startpage"
                code="https://github.com/SPDUK/startpage"
                link="https://startpage-spduk.herokuapp.com/"
                description="A full-stack startpage with todos, weather, clock, bookmarks and a searchbar that has multiple options. Made with React and Node.js using MongoDB. (may load slow, hosted on heroku free tier)"
              />
            </Grid>
          </Grid>
        </LazyLoad>
      </div>
    </div>
  );
}

export default withStyles(styles)(Featured);
