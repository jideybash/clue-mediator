import React, { Component } from "react";
import { Link } from "react-router-dom";
export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar navbar-expand-lg navbar-dark bg-primary">
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link active">
              Clue Mediator <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/about" className="nav-link">
              About
            </Link>
          </li>
          <li className="nav-item ml-5">
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </li>
        </ul>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>
    );
  }
}
