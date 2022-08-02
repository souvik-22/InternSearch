import React, { Component } from "react";
import "../components/header.css";
import icon from "../components/menu-icon.png";

export default class header extends Component {
  render() {
    return (
      <div className="header-container">
        <div className="icon">
          <img src={icon} />
        </div>
        <div className="heading">InternSearch</div>
        {/* <div className="title">An initiative to never lose hope</div> */}
      </div>
    );
  }
}
