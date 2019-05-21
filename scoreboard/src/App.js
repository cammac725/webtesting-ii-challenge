import React, { Component } from 'react';

import Dashboard from './dashboard/Dashboard';
import Display from './display/Display';
import './App.css';

class App extends Component {
  state = {
    balls: 0,
    strikes: 0
  }

  ballHandler = () => {

  }

  strikeHandler = () => {

  }

  foulHandler = () => {

  }

  hitHandler = () => {

  }

  render() {
    return (
      <div className="App">
        <h1>Scoreboard</h1>

        <Display
          balls={this.state.balls}
          strikes={this.state.strikes}
        />

        <Dashboard
          ballHandler={this.ballHandler}
          strikeHandler={this.strikeHandler}
          foulHandler={this.foulHandler}
          hitHandler={this.hitHandler}
        />
      </div>
    );
  }

}

export default App;
