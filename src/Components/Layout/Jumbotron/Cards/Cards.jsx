import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import zIndex from '@material-ui/core/styles/zIndex';
import Divider from '@material-ui/core/Divider';

import './Cards.css';

const styles = {
  cards: {
    marginTop: 50,
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  divider: {
    marginBottom: 20
  },
  firstCard: {
    minWidth: 290,
    maxWidth: 400,
    display: 'block'
  },
  secondCard: {
    minWidth: 290,
    maxWidth: 400,
    display: 'block',
    transform: 'scale(0.9)'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    marginBottom: 16,
    textAlign: 'center',
    fontWeight: 500
  },
  pos: {
    marginBottom: 12
  },
  // styles for cards bigger than mobile screens
  '@media (min-width: 614px)': {
    cards: {
      marginTop: 60
    },
    firstCard: {
      zIndex: 500
    },
    secondCard: {
      transform: 'translateX(-14px) scale(0.9)',
      zIndex: 200
    }
  },
  '@media (min-width: 1000px)': {
    firstCard: {
      zIndex: 500,
      height: 300,
      width: 500
    },
    secondCard: {
      transform: 'translateX(-20px) scale(0.9)',
      zIndex: 200,
      height: 300,
      width: 500
    }
  }
};

function SimpleCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <div className={classes.cards}>
      <Card elevation="8" className={classes.firstCard}>
        <CardContent>
          <Typography
            variant="headline"
            className={classes.title}
            color="secondary"
          >
            What I do
          </Typography>
          <Divider className={classes.divider} />
          <Typography variant="headline" component="h2">
            SCSS
          </Typography>
          <Typography variant="headline" component="h2">
            React
          </Typography>
          <Typography variant="headline" component="h2">
            React
          </Typography>
          <Typography variant="headline" component="h2">
            React
          </Typography>
          <Typography variant="headline" component="h2">
            React
          </Typography>
          <Typography variant="headline" component="h2">
            React
          </Typography>
        </CardContent>
      </Card>
      <Card elevation="8" className={classes.secondCard}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            Word of the Day
          </Typography>
          <Typography variant="headline" component="h2">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography className={classes.pos} color="textSecondary">
            adjective
          </Typography>
          <Typography component="p">
            well meaning and kindly.<br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withStyles(styles)(SimpleCard);
