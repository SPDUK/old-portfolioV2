import React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ReactAux from '../../../hoc/ReactAux';

import './LearnedItem.css';

const styles = {
  root: {
    marginTop: 25,
    marginBottom: 5
  },

  '@media (min-width: 600px)': {
    root: {
      marginTop: 30,
      marginBottom: 5,
      textAlign: 'center'
    },
    title: {
      textAlign: 'left'
    }
  }
};
function LearnedItem(props) {
  function openLearnedLink() {
    console.log('works');
  }

  const { title, skills, date, link, classes } = props;
  return (
    <ReactAux>
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={5}>
            <Typography className={classes.title} variant="title">
              {title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subheading">{skills}</Typography>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Typography variant="subheading">{date}</Typography>
          </Grid>
          <Grid item xs={12} sm={1}>
            <Typography
              className="learneditem-button"
              style={{ cursor: 'pointer' }}
              variant="button"
              onClick={openLearnedLink}
            >
              <strong>
                <a style={{ color: 'black' }} href={link}>
                  Code
                </a>
              </strong>
            </Typography>
          </Grid>
        </Grid>
      </div>
      <Divider light />
    </ReactAux>
  );
}

export default withStyles(styles)(LearnedItem);
