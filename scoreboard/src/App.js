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
    const { balls } = this.state;
    if (balls < 3) {
      this.setState({ balls: this.state.balls + 1 })
    } else {
      this.setState({ balls: 0 })
    }
  }

  strikeHandler = () => {
    const { strikes } = this.state;
    if (strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 })
    } else {
      this.setState({ strikes: 0 })
    }
  }

  foulHandler = () => {
    const { strikes } = this.state;
    if (strikes < 2) {
      this.setState({ strikes: this.state.strikes + 1 })
    }
  }

  hitHandler = () => {
    this.setState({ balls: 0, strikes: 0 })
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
