import React, { Component } from 'react';
import './App.css';
import List from './components/List/List';
import Footer from './components/Footer/Footer';
import EmailMe from './components/EmailMe/EmailMe';
import Greeter from './components/Greeter/Greeter';

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
      return <div>
          <Greeter />
          <List projectsList={this.state.codingProjects} />
          <EmailMe />
          <Footer />
        </div>;
    }

    return null;
  }

  componentDidMount() {
    this.fetchProjectsList();
  }
}

export default App;
