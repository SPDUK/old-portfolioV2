/* eslint-disable jsx-a11y/mouse-events-have-key-events */

import React from 'react';
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  paper: {
    padding: theme.spacing.unit
  },
  popover: {
    pointerEvents: 'none'
  },
  poptext: {
    fontSize: '1em',
    display: 'inline-block'
  },
  popperClose: {
    pointerEvents: 'none'
  }
});

class MouseOverPopover extends React.Component {
  state = {
    anchorEl: null,
    popperOpen: false
  };

  handlePopoverOpen = event => {
    this.setState({ anchorEl: event.target });
  };

  handlePopoverClose = () => {
    this.setState({ anchorEl: null });
  };

  handlePopperOpen = () => {
    this.setState({ popperOpen: true });
  };

  handlePopperClose = () => {
    this.setState({ popperOpen: false });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl, popperOpen } = this.state;
    const open = !!anchorEl;

    return (
      <div className="wrapper">
        <Typography
          onMouseOver={this.handlePopoverOpen}
          onMouseOut={this.handlePopoverClose}
          className={classes.poptext}
        >
          {this.props.popName}
        </Typography>
        <Popover
          className={classes.popover}
          classes={{
            paper: classes.paper
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left'
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left'
          }}
          onClose={this.handlePopoverClose}
          disableRestoreFocus
        >
          <Typography>{this.props.popInfo}</Typography>
        </Popover>
      </div>
    );
  }
}

export default withStyles(styles)(MouseOverPopover);
