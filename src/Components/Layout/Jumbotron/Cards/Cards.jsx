import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Modal from '@material-ui/core/Modal';

import ReactAux from '../../../hoc/ReactAux';
import Popover from './Popover/Popver';

import './Cards.css';

// TODO: a bit of a mess? maybe refactor later.

const styles = theme => ({
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
  button: {
    marginRight: 15
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
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4
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
});

// modal styles & functions

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

class SimpleCard extends Component {
  constructor() {
    super();
    this.state = {
      open: false
    };
  }
  toggleEmailModal = () => {
    this.setState({
      showEmailModal: true
    });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <ReactAux>
        {this.state.open ? (
          <Modal
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            open={this.state.open}
            onClose={this.handleClose}
          >
            <div style={getModalStyle()} className={classes.paper}>
              <Typography variant="title" id="modal-title">
                Text in a modal
              </Typography>
              <Typography variant="subheading" id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </div>
          </Modal>
        ) : (
          <div />
        )}
        <div className={classes.cards}>
          <Card elevation={6} className={classes.firstCard}>
            <CardContent>
              <Typography variant="headline" className={classes.title}>
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
                    popName="HTML"
                    popInfo="Using HTML I create responsive and accessible web pages and templates."
                  />
                </Typography>
              </div>
              <div className="card-item">
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
                    popInfo="With Sass I create clean code that is nested and easy to read to create maintainble code for the future."
                  />
                </Typography>
              </div>
              <div className="card-item">
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
                    popInfo="Using modern Javascript I'm able to do anything, from basic DOM manipulation to advanced algorithms with a focus on functionality and performance."
                  />
                </Typography>
              </div>
              <div className="card-item">
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
                    popInfo="With React I create modern, fast applications that can scale easily while being maintainable with reusable UI components"
                  />
                </Typography>
              </div>
              <div className="card-item">
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
                    popInfo="I've used Node.js to create multiple full-stack web applications that are fast and efficient, and it pairs perfectly with MongoDB as a database."
                  />
                </Typography>
              </div>
            </CardContent>
          </Card>
          <Card elevation={4} className={classes.secondCard}>
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
                I am a self-taught React Developer, with an interest in
                functional programming.
              </Typography>
            </CardContent>
            <CardActions
              style={{ display: 'flex', justifyContent: 'flex-end' }}
            >
              <Button
                id="card-button"
                variant="raised"
                color="primary"
                className={classes.button}
              >
                <a style={{ color: 'black' }} onClick={this.handleOpen}>
                  Contact Me
                </a>
                <i className="fas fa-arrow-right card-arrow" />
              </Button>
            </CardActions>
          </Card>
        </div>
      </ReactAux>
    );
  }
}

// const SimpleModalWrapped = withStyles(styles)(SimpleModal);
export default withStyles(styles)(SimpleCard);
