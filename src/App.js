import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import Footer from './components/Footer/Footer';

class App extends Component {
  state = {
    codingProjects: undefined
  }

  fetchProjectsList() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.onload = () => {
      this.setState({ codingProjects: xhr.response });
    };
    xhr.open('GET', 'https://raw.githubusercontent.com/arkadyt/json-content/master/react-p.json')
    xhr.send();
  }

  render() {
    if (this.state.codingProjects) {
      return (
        <div>
          <List projectsList={this.state.codingProjects} />
          <Footer />
        </div>
      );
    }

    return null;
  }

  componentDidMount() {
    this.fetchProjectsList();
  }
}

export default App;
