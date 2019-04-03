import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import GamesPage from "./components/GamesPage";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Link to="games">Games</Link>
        <Route path="/games" component={GamesPage} />
      </div>
    );
  }
}

export default App;
