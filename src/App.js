import "./App.css";
import React, { Component } from "react";

import Search from "./components/Search";

import { questions } from "./data/questions";
import Results from "./components/Results";

export default class App extends Component {
  state = { search: "", questions: questions, matches: [] };

  updateSearch = term => {
    this.setState({ search: term.toLowerCase() });
    this.compareAndFilter(term);
  };

  compareAndFilter = term => {
    this.setState({
      matches: this.state.questions.filter(question => {
        return question.q.toLocaleLowerCase().includes(term);
      })
    });
  };

  render() {
    return (
      <div className="App">
        <Search updateSearch={this.updateSearch} />
        <Results results={this.state.matches} />
      </div>
    );
  }
}
