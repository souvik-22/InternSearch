import React, { Component } from "react";
import "../components/Item.css";

export default class Item extends Component {
  render() {
    return (
      <div className="item-container">
        <h2>{this.props.companyName}</h2>
        <p>{this.props.companyLocation}</p>
        <p>CTC: {this.props.ctc}</p>
        <p>CGPA: {this.props.cgpa}</p>
        <p>Type[Internship/Placement]: {this.props.jobType}</p>
        <p style={{ color: "#F42121" }}>
          Last Date to Apply: {this.props.lastDate}
        </p>
        <div className="button-container">
          <a href={this.props.link} title={this.props.link} target="_blank">
            Link to apply
          </a>
        </div>
      </div>
    );
  }
}
