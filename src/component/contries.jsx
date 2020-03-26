import React from "react";
import Graph from "./graph";

import Country from "./country";

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesReport: null,
      myData: null,
      deathData: null,
      todayData: null,
      chartData: {
        labels: [
          "Boston",
          "Worcester",
          "Springfield",
          "Lowell",
          "Cambridge",
          "New Bedford"
        ],
        datasets: [
          {
            label: "Population",
            data: [617594, 181045, 153060, 106519, 105162, 95072],
            backgroundColor: [
              "rgba(255, 99, 132, 0.6)",
              "rgba(54, 162, 235, 0.6)",
              "rgba(255, 206, 86, 0.6)",
              "rgba(75, 192, 192, 0.6)",
              "rgba(153, 102, 255, 0.6)",
              "rgba(255, 159, 64, 0.6)",
              "rgba(255, 99, 132, 0.6)"
            ]
          }
        ]
      }
    };
  }

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
          if (d.todayCases > 100) {
            return todayData.labels.push(d.country);
          }
        });
        res.map(d => {
          if (d.todayCases > 100) {
            return todayData.datasets.map(i => {
              i.backgroundColor.push(this.random_rgba());
              i.data.push(d.todayCases);
            });
          }
        });

        this.setState({ countriesReport: res, myData, deathData, todayData });
      })
      .then(console.log(this.state.countriesReport));
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
    return this.state.countriesReport ? (
      <>
        {/* {console.log(this.state.countriesReport)} */}
        <section className="section">
          <div className="container">
            <h1 className="title">Country </h1>
            <h2 className="subtitle">
              A Real time report of all the <strong>COVID-19</strong> patient
              around the globe
            </h2>
            <table className="table is-bordered">
              <thead>
                <tr>
                  <th title="Country">Country</th>
                  <th title="Case">Total Case</th>
                  <th title="TodayCase">TodayCase</th>
                  <th title="Deaths">Total Deaths</th>
                  <th title="TodayDeaths">TodayDeaths</th>
                  <th title="Recovered">Recovered</th>
                  <th title="Acticve">Active</th>
                  <th title="Critical">Critical</th>
                  <th title="casePerMillion">CasePerOneMillion</th>
                  <th title="deathPerMillion">DeathPerOneMillion</th>
                </tr>
              </thead>
              {this.state.countriesReport.map((country, id) => (
                <Country key={id} info={country} />
              ))}
            </table>{" "}
          </div>{" "}
        </section>
        <div
          style={{
            width: "800px",
            margin: "0 auto",
            textAlign: "center"
          }}
        >
          <Graph
            chartData={this.state.myData && this.state.myData}
            deathData={this.state.deathData && this.state.deathData}
            todayData={this.state.todayData && this.state.todayData}
          />
        </div>
      </>
    ) : (
      <>loading</>
    );
  }
}

export default Countries;
