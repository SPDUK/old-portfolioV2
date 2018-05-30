import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

const styles = {
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
};

// TODO: add icons beside links
// maybe style drawer

class SwipeableTemporaryDrawer extends React.Component {
  render() {
    const { toggleDrawer } = this.props;

    return (
      <div>
        <SwipeableDrawer
          anchor="right"
          open={this.props.right}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer('right', false)}
            onKeyDown={toggleDrawer('right', false)}
          >
            <div style={{ width: '250px' }}>
              <div style={{ height: '50px' }} />
              <Button style={{ width: '250px', height: '40px' }}>
                Projects
              </Button>
              <Button style={{ width: '250px', height: '40px' }}>Extras</Button>
              <Button style={{ width: '250px', height: '40px' }}>
                Contact
              </Button>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default withStyles(styles)(SwipeableTemporaryDrawer);
