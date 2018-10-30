import React, { Component } from 'react';
import Layout from './components/Layout/Layout.jsx';
import './App.css';

class App extends Component {
  render() {
    return <div className="App-container">
      <Layout />
      <div className="blinds" />
    </div>;
  }
}

export default App;
