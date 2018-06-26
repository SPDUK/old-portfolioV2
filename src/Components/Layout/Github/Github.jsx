import React, { Component } from 'react';
import './Github.css';
import ChartistGraph from 'react-chartist';

export default class Github extends Component {
  render() {
    const lineChartData = {
      labels: [0, 2, 3, 4, 5, 6],
      series: [[0, 1, 2, 3, 4, 5]]
    };
    const lineChartOptions = {
      low: 0,
      showArea: true,
      fullWidth: true
    };

    return (
      <div className="container github">
        <h1>Github</h1>
        <ChartistGraph
          className="ct-octave"
          data={lineChartData}
          options={lineChartOptions}
          type="Line"
        />
      </div>
    );
  }
}
