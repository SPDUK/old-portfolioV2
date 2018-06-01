import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ReactAux from '../../../hoc/ReactAux';

import './LearnedItem.css';

const styles = {
  root: {
    marginTop: 25,
    marginBottom: 5,
    marginLeft: 7
  },

  '@media (min-width: 600px)': {
    root: {
      marginTop: 45,
      marginLeft: 0,
      marginBottom: 1,
      display: 'flex',
      justifyContent: 'space-between'
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
        <Typography variant="title">{title}</Typography>
        <Typography variant="subheading">{skills}</Typography>
        <Typography variant="subheading">{date}</Typography>
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
      </div>
      <Divider light />
    </ReactAux>
  );
}

export default withStyles(styles)(LearnedItem);
