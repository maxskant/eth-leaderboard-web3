import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LeaderBoard from './components/LeaderBoard.jsx';

class App extends Component {
  render() {
    return (
      <div className="Application">
       <LeaderBoard />
      </div>
    );
  }
}

export default App;
