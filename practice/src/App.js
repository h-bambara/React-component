import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CreateButton from './compornents/CreateButton'

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateButton />
      </div>
    );
  }
}

export default App;
