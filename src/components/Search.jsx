import React, { Component } from "react";

export default class Search extends Component {
  render() {
    return (
      <div>
        <br />
        <label htmlFor="">Search</label>
        <br />
        <input
          type="text"
          name="search"
          id="search"
          onChange={event => {
            this.props.updateSearch(event.target.value);
          }}
        />
      </div>
    );
  }
}
