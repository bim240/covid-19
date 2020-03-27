import React, { Component } from "react";
import { Bar, Line, Pie, Doughnut } from "react-chartjs-2";

class Chart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: null,
      deathData: null,
      todayData: null,
      loader: true
    };
  }

  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: "right",
    location: "City"
  };

  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries")
      .then(res => res.json())
      .then(res => {
        const myData = {
          labels: [],
          datasets: [
            {
              label: "Cases",
              data: [],
              backgroundColor: []
            }
          ]
        };
        res.map(d => {
          if (d.cases > 900) {
            return myData.labels.push(d.country);
          }
          return d;
        });
        res.map(d => {
          if (d.cases > 900) {
            return myData.datasets.map(i => {
              i.backgroundColor.push(this.random_rgba());
              i.data.push(d.cases);
            });
          }
          return d;
        });
        console.log(myData);
        // this.setState({ myData });
        const deathData = {
          labels: [],
          datasets: [
            {
              label: "Deaths",
              data: [],
              backgroundColor: []
            }
          ]
        };

        res.map(d => {
          if (d.deaths > 30) {
            return deathData.labels.push(d.country);
          }
        });
        res.map(d => {
          if (d.deaths > 30) {
            return deathData.datasets.map(i => {
              i.backgroundColor.push(this.random_rgba());
              i.data.push(d.deaths);
            });
          }
        });

        const todayData = {
          labels: [],
          datasets: [
            {
              label: "Today Cases",
              data: [],
              backgroundColor: []
            }
          ]
        };
        res.map(d => {
          if (d.todayCases > 20) {
            return todayData.labels.push(d.country);
          }
          return d;
        });
        res.map(d => {
          if (d.todayCases > 20) {
            return todayData.datasets.map(i => {
              i.backgroundColor.push(this.random_rgba());
              i.data.push(d.todayCases);
            });
          }
          return d;
        });

        this.setState({
          chartData: myData,
          deathData,
          todayData,
          loader: false
        });
      });
  }

  random_rgba = () => {
    var o = Math.round,
      r = Math.random,
      s = 255;
    return (
      "rgba(" +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      o(r() * s) +
      "," +
      r().toFixed(1) +
      ")"
    );
  };

  render() {
    return (
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        {this.state.loader ? (
          <h1>Loading...</h1>
        ) : (
          <div className="chart">
            <Bar
              data={this.state.chartData && this.state.chartData}
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
              data={this.state.deathData && this.state.deathData}
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
              data={this.state.todayData && this.state.todayData}
              options={{
                title: {
                  display: this.props.displayTitle,
                  text: "Today's Cases",
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
          </div>
        )}
      </div>
    );
  }
}

export default Chart;
