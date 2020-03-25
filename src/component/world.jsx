import React from "react";
class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worldReport: null
    };
  }
  componentDidMount() {
    fetch("https://corona.lmao.ninja/all")
      .then(res => res.json())
      .then(res => this.setState({ worldReport: res }));
  }

  render() {
    return this.state.worldReport ? (
      <>
        <section class="section">
          <div class="container">
            <h1 class="title">World Report</h1>
            <h2 class="subtitle">
              A Real time report of all the <strong>COVID-19</strong> patient
              around globe
            </h2>
            <table class="table">
              <thead>
                <tr>
                  <th title="">Table</th>

                  <th title="Total Case">
                    Total Case
                    {/* <abbr title="Total Case">Total Case</abbr> */}
                  </th>
                  <th title="Recovered">Recovered</th>
                  <th title="Death">Death</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th>World</th>
                  <td>{this.state.worldReport.cases}</td>
                  <td>{this.state.worldReport.recovered}</td>
                  <td>{this.state.worldReport.deaths}</td>
                </tr>
              </tbody>
            </table>{" "}
          </div>{" "}
        </section>
      </>
    ) : (
      <>loading</>
    );
  }
}

export default World;
