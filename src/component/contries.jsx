import React from "react";

import Country from "./country";

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesReport: null
    };
  }
  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries")
      .then(res => res.json())
      .then(res => this.setState({ countriesReport: res }))
      .then(console.log(this.state.countriesReport));
  }
  render() {
    return this.state.countriesReport ? (
      <>
        {/* {console.log(this.state.countriesReport)} */}
        <section class="section">
          <div class="container">
            <h1 class="title">Country </h1>
            <h2 class="subtitle">
              A Real time report of all the <strong>COVID-19</strong> patient
              around the globe
            </h2>
            <table class="table is-bordered">
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
              {this.state.countriesReport.map(country => (
                <Country info={country} />
              ))}
            </table>{" "}
          </div>{" "}
        </section>
      </>
    ) : (
      <>loading</>
    );
  }
}

export default Countries;
