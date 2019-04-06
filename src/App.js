import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./App.css";
import GamesPage from "./components/GamesPage";
import GameForm from "./components/GameForm";

class App extends Component {
  render() {
    return (

      <div class="ui container">
        <div class="ui three item menu" >
          <Link className="item" activeClassName="active" exact to="/">Home</Link>
          <Link className="item" activeClassName="active" exact to="/games">Games</Link>
          <Link className="item" activeClassName="active" exact to="/games/new">Add New Game</Link>
        </div>
        <Route exact path="/games/new" component={GameForm} />
        <Route exact path="/games" component={GamesPage} />
      </div>
      
    );
  }
}

export default App;
