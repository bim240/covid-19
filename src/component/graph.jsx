import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: props.chartData,
      deathData: props.deathData,
      todayData: props.todayData
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  render() {
    return (
      <div className="chart">
        <Bar
          data={this.state.chartData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Countries with most cases ",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        <Line
          data={this.state.deathData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Countries with most Deaths",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        <Pie
          data={this.state.todayData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Today Cases",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }}
        />
        {/* <Doughnut
          data={this.state.todayData}
          options={{
            title: {
              display: this.props.displayTitle,
              text: "Today Cases",
              fontSize: 25
            },
            legend: {
              display: this.props.displayLegend,
              position: this.props.legendPosition
            }
          }} */}
        />
      </div>
    );
  }
}

export default Chart;
