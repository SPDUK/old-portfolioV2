import React, { Component } from 'react';
import './Github.css';
import Popover from '@material-ui/core/Popover';
import ChartistGraph from 'react-chartist';

export default class Github extends Component {
  render() {
    const lineChartData = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      series: [[37, 151, 126, 264, 338, 291]]
    };
    const lineChartOptions = {
      low: 0,
      showArea: true,
      fullWidth: true,
      showPoint: false
    };

    return (
      <div className="container github">
        <h1>Github Commits in the last 6 months</h1>
        <ChartistGraph
          className="ct-major-twelfth"
          data={lineChartData}
          options={lineChartOptions}
          type="Line"
        />
      </div>
    );
  }
}
