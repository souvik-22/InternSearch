import React, { Component } from "react";
import "../component/header.css";

export default class header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="heading">InternSearch Admin</div>
        <div className="title">An initiative to never lose hope</div>
      </div>
    );
  }
}
