import React from "react";

import Country from "./country";

class Countries extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesReport: null,
      searchedCountry: null
    };
    this.searchCountryName = React.createRef(null);
  }
  handleSearch = () => {
    var temp = this.state.countriesReport.filter(country =>
      country.country
        .toLowerCase()
        .includes(this.searchCountryName.current.value.toLowerCase())
    );
    this.setState({ searchedCountry: temp });
    // console.log(temp);
  };
  handleSearchBox = () => {
    this.searchCountryName.current.value = null;
    this.setState({ searchedCountry: null });
  };
  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries")
      .then(res => res.json())
      .then(res => this.setState({ countriesReport: res }));
    // .then(console.log(this.state.countriesReport));
  }
  render() {
    return this.state.countriesReport ? (
      <>
        {/* {console.log(this.state.countriesReport[0])} */}
        {/* {console.log(this.state.searchedCountry)} */}
        <section class="section">
          <div class="container">
            <h1 class="title">Country </h1>
            <h2 class="subtitle">
              A Real time report of all the <strong>COVID-19</strong> patient
              around the globe
            </h2>
            <div class="field has-addons">
              <div class="control">
                <input
                  class="input"
                  onChange={this.handleSearch}
                  ref={this.searchCountryName}
                  type="text"
                  placeholder="Find a country"
                />
              </div>
              <div class="control">
                <a class="button is-info" onClick={this.handleSearch}>
                  Search
                </a>
              </div>
              {this.state.searchedCountry ? (
                <div class="control margin-left">
                  <a class="button is-info" onClick={this.handleSearchBox}>
                    Show All
                  </a>
                </div>
              ) : (
                ""
              )}
            </div>
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
              {this.state.searchedCountry
                ? this.state.searchedCountry.map(country => (
                    <Country info={country} />
                  ))
                : this.state.countriesReport.map(country => (
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
