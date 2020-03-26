import React from "react";
class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worldReport: null
    };
  }
  componentDidMount() {
    console.log("hello");
    fetch("https://corona.lmao.ninja/all")
      .then(res => res.json())
      .then(res => this.setState({ worldReport: res }));
  }

  render() {
    return this.state.worldReport ? (
      <>
        <section className="section">
          <div className="container">
            <h1 className="title">World Report</h1>
            <h2 className="subtitle">
              A Real time report of all the <strong>COVID-19</strong> patient
              around the globe
            </h2>
            <table className="table">
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
