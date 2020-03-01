import React, { Component } from "react";

import Result from "./Result";

export default class Results extends Component {
  render() {
    return (
      <div>
        {this.props.results.map((question, index) => {
          return <Result question={question.q} answer={question.a} />;
        })}
      </div>
    );
  }
}
