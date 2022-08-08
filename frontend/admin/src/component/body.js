import React, { Component } from "react";
import { Input, DatePicker, Button } from "antd";
import "antd/dist/antd.css";
import "../component/body.css";

export default class body extends Component {
  constructor() {
    super();
    this.state = {
      companyName: "",
      companyLocation: "",
      ctc: "",
      cgpa: "",
      jobType: "",
      lastDate: "",
      link: "",
    };
  }

  onChange = (date, dateString) => {
    this.setState({
      lastDate: dateString,
    });
  };

  performAPICall = async () => {
    try {
      var myHeaders = new Headers();
      myHeaders.append("Accept", "application/json");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        companyName: `${this.state.companyName}`,
        companyLocation: `${this.state.companyLocation}`,
        ctc: `${this.state.ctc}`,
        cgpa: `${this.state.cgpa}`,
        jobType: `${this.state.jobType}`,
        lastDate: `${this.state.lastDate}`,
        link: `${this.state.link}`,
      });

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch("http://localhost:8082/jobs", requestOptions)
        .then((response) => response.text())
        .then((result) => JSON.parse(result))
        .catch((error) => console.log("error", error));
    } catch (error) {
      console.log(error);
    }
  };

  submit = async () => {
    try {
      await this.performAPICall();
      this.setState({
        companyName: "",
        companyLocation: "",
        ctc: "",
        cgpa: "",
        jobType: "",
        lastDate: "",
        link: "",
      });
      window.alert("Data Submitted Successfully!");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div className="body-container">
        <div className="item">
          <div className="label">Company Name</div>
          <Input
            placeholder="company name"
            className="input"
            value={this.state.companyName}
            onChange={(e) => {
              this.setState({
                companyName: e.target.value,
              });
            }}
          />
        </div>
        <div className="item">
          <div className="label">Company Location</div>
          <Input
            placeholder="remote"
            className="input"
            value={this.state.companyLocation}
            onChange={(e) => {
              this.setState({
                companyLocation: e.target.value,
              });
            }}
          />
        </div>
        <div className="item">
          <div className="label">CTC Per Year</div>
          <Input
            placeholder="cost per annum"
            className="input"
            value={this.state.ctc}
            onChange={(e) => {
              this.setState({
                ctc: e.target.value,
              });
            }}
          />
        </div>
        <div className="item">
          <div className="label">CGPA Cut off</div>
          <Input
            placeholder="ex:- 8 CGPA"
            className="input"
            value={this.state.cgpa}
            onChange={(e) => {
              this.setState({
                cgpa: e.target.value,
              });
            }}
          />
        </div>
        <div className="item">
          <div className="label">Type</div>
          <Input
            placeholder="Intership/Placement"
            className="input"
            value={this.state.jobType}
            onChange={(e) => {
              this.setState({
                jobType: e.target.value,
              });
            }}
          />
        </div>
        <div className="item">
          <div className="label">Last Date To Apply</div>
          <DatePicker onChange={this.onChange} />
        </div>
        <div className="item">
          <div className="label">Link To Apply</div>
          <Input
            placeholder="Additional Information if any"
            className="input"
            value={this.state.link}
            onChange={(e) => {
              this.setState({
                link: e.target.value,
              });
            }}
          />
        </div>
        <Button type="primary" onClick={this.submit}>
          Submit
        </Button>
      </div>
    );
  }
}
