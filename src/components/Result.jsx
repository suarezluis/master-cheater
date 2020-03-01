import React, { Component } from "react";

export default class Result extends Component {
  render() {
    return (
      <div>
        <p>
          Question: <br /> {this.props.question}
        </p>
        <p>
          Answer: <br /> {this.props.answer}
        </p>
      </div>
    );
  }
}
