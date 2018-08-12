import React from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';

// TODO: add icons beside links
// maybe style drawer

class Drawer extends React.Component {
  render() {
    const { toggleDrawer } = this.props;

    return (
      <div>
        <SwipeableDrawer
          anchor="right"
          open={this.props.right}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
          color="secondary"
        >
          <div
            tabIndex={0}
            role="button"
            onClick={toggleDrawer('right', false)}
            onKeyDown={toggleDrawer('right', false)}
          >
            <div style={{ width: '250px' }}>
              <div style={{ height: '50px' }} />
              <Button
                onClick={this.props.scrollToProjects}
                style={{ width: '250px', height: '40px' }}
              >
                Featured Projects
                <i style={{ marginLeft: '5px' }} className="fas fa-code" />
              </Button>
              <Button
                style={{ width: '250px', height: '40px' }}
                onClick={this.props.scrollToCourses}
              >
                Extra Projects
                <i style={{ marginLeft: '5px' }} className="fas fa-project-diagram" />
              </Button>
              <Button style={{ width: '250px', height: '40px' }}>
                <a style={{ color: 'black' }} href="https://github.com/SPDUK">
                  <strong>
                    Github
                    <i style={{ marginLeft: '5px' }} className="fab fa-github" />
                  </strong>
                </a>
              </Button>
            </div>
          </div>
        </SwipeableDrawer>
      </div>
    );
  }
}

export default Drawer;
