import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Popover from './Popover/Popver';
import './Cards.css';

// TODO: a bit of a mess? maybe refactor later.

const styles = {
  cards: {
    marginTop: 60,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  divider: {
    marginBottom: 10
  },
  firstCard: {
    minWidth: 290,
    maxWidth: 400,
    height: 220,
    display: 'block'
  },
  headline: {
    fontSize: 18,
    marginBottom: 3
  },
  secondCard: {
    minWidth: 290,
    maxWidth: 400,
    height: 220,
    display: 'block',
    transform: 'scale(0.9)',
    backgroundColor: '#3F51B5',
    color: 'white',
    textAlign: 'center'
  },
  title: {
    marginBottom: 16,
    fontSize: 22,
    fontWeight: 500,
    textAlign: 'center'
  },
  // styles for cards bigger than mobile screens
  '@media (min-width: 720px)': {
    firstCard: {
      zIndex: 500
    },
    secondCard: {
      transform: 'translateX(-40px) scale(0.9)',
      zIndex: 200
    }
  },
  '@media (min-width: 1000px)': {
    firstCard: {
      zIndex: 500,
      height: 270,
      width: 500
    },
    divider: {
      marginBottom: 30
    },
    headline: {
      marginBottom: 5
    },
    title: {
      marginBottom: 16,
      fontSize: 28
    },
    secondCard: {
      transform: 'translateX(-20px) scale(0.9)',
      zIndex: 200,
      height: 255,
      width: 370
    }
  }
};

function SimpleCard(props) {
  const { classes } = props;

  return (
    <div className={classes.cards}>
      <Card elevation="8" className={classes.firstCard}>
        <CardContent>
          <Typography
            variant="headline"
            className={classes.title}
            color="primaryText"
          >
            What I do
          </Typography>
          <Divider className={classes.divider} />
          <div className="card-item">
            <Typography
              className={classes.headline}
              variant="headline"
              component="h2"
              style={{ display: 'flex' }}
            >
              <i
                style={{
                  fontSize: 24,
                  marginRight: `33%`,
                  display: 'inline-block'
                }}
                className="devicon-html5-plain colored"
              />
              <Popover
                popName="HTML5"
                popInfo="I use HTML5 to structure my websites, and use HTML inside of React components too."
              />
            </Typography>
          </div>

          <Typography
            className={classes.headline}
            variant="headline"
            component="h2"
            style={{ display: 'flex' }}
          >
            <i
              style={{ fontSize: 24, marginRight: `33%` }}
              className="devicon-sass-original colored"
            />
            <Popover
              popName="Sass"
              popInfo="I use Sass to take advantage of variables and CSS script functions, as well as basic CSS."
            />
          </Typography>
          <Typography
            className={classes.headline}
            variant="headline"
            component="h2"
            style={{ display: 'flex' }}
          >
            <i
              style={{ fontSize: 24, marginRight: `33%` }}
              className="devicon-javascript-plain colored"
            />
            <Popover
              popName="JavaScript"
              popInfo="I use JavaScipt to do many things, from simple things like adding a class when a button is clicked to intermediate level algorithms."
            />
          </Typography>
          <Typography
            className={classes.headline}
            variant="headline"
            component="h2"
            style={{ display: 'flex' }}
          >
            <i
              style={{ fontSize: 24, marginRight: `33%` }}
              className="devicon-react-original colored"
            />
            <Popover
              popName="React"
              popInfo="I use React to Compose the front-end of my apps, resulting in a fast website that is also easily scalable."
            />
          </Typography>
          <Typography
            className={classes.headline}
            variant="headline"
            component="h2"
            style={{
              display: 'flex'
            }}
          >
            {' '}
            <i
              style={{ fontSize: 24, marginRight: `33%` }}
              className="devicon-nodejs-plain colored"
            />
            <Popover
              popName="Node.js"
              popInfo="I use Node.js to do everything from simply installing NPM modules to an entire back-end with a database."
            />
          </Typography>
        </CardContent>
      </Card>
      <Card elevation="6" className={classes.secondCard}>
        <CardContent>
          <Typography color="primary" className={classes.title}>
            Who I am
          </Typography>
          <Divider className={classes.divider} />
          <Typography
            style={{ textAlign: 'center' }}
            color="primary"
            variant="subheading"
          >
            I am a 24 year-old self-taught React Developer, I have been learning
            since November of 2017
          </Typography>
        </CardContent>
        <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            id="card-button"
            variant="raised"
            color="primary"
            className={classes.button}
          >
            <a style={{ color: 'black' }} href="mailto:spdevuk@gmail.com">
              Contact Me
            </a>
            <i className="fas fa-arrow-right card-arrow" />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SimpleCard);
