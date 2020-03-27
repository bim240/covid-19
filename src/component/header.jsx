import React from "react";
import { Link } from "react-router-dom";
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <nav
          className="navbar is-dark"
          role="navigation"
          aria-label="main navigation"
        >
          <div className="container">
            <div className="navbar-brand">
              <a className="navbar-item" href="/">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSuMuLifa-LpG6gmhsXYsQ5Ha9NF0EZbOF8EyVbkxoNqAoCvjo0"
                  width="112"
                  height="28"
                />
              </a>

              <a
                role="button"
                className="navbar-burger burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
              >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
              </a>
            </div>

            <div id="navbarBasicExample" className="navbar-menu">
              <div className="navbar-start">
                {/* <div className="navbar-item has-dropdown is-hoverable">
                  <a className="navbar-link">Country</a>

                  <div className="navbar-dropdown">
                    <a className="navbar-item">About</a>
                    <a className="navbar-item">Jobs</a>
                    <a className="navbar-item">Contact</a>
                    <hr className="navbar-divider" />
                    <a className="navbar-item">Report an issue</a>
                  </div>
                </div> */}
              </div>

              <div className="navbar-end">
                <Link to="/" className="navbar-item">
                  Home
                </Link>
                <Link to="/graphs" className="navbar-item">
                  Graphs
                </Link>

                {/* <a className="navbar-item">World</a>
                <a className="navbar-item">Country</a>
                <a className="navbar-item">COVID-19</a> */}
                <div className="navbar-item"></div>
              </div>
            </div>
          </div>
        </nav>
      </>
    );
  }
}

export default Header;
