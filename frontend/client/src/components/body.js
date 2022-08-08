import React, { Component } from "react";
import Item from "./Item";
import "./body.css";

export default class body extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Data: [],
    };
  }

  validateData = (result) => {
    this.setState({
      Data: result,
    });
    console.log(this.state.Data);
  };

  performApicall = async () => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch("http://localhost:8082/jobs", requestOptions)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .then((result) => this.validateData(result))
      .catch((error) => console.log("error", error));
  };

  componentDidMount() {
    this.performApicall();
  }

  abc = () => {};
  render() {
    return (
      <div className="container">
        {this.state.Data.map((items) => {
          return (
            <Item
              key={items._id}
              cgpa={items.cgpa}
              companyLocation={items.companyLocation}
              companyName={items.companyName}
              ctc={items.ctc}
              jobType={items.jobType}
              lastDate={items.lastDate}
              link={items.link}
            />
          );
        })}
      </div>
    );
  }
}
