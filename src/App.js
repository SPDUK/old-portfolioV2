import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import ReactAux from './Components/hoc/ReactAux';
import './styles/app.css';

class App extends Component {
  render() {
    return (
      <ReactAux>
        <CssBaseline />
        <p> hi</p>
      </ReactAux>
    );
  }
}

export default App;
