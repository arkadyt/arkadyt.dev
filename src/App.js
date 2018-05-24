import React, { Component } from 'react';
import './App.css';

import List from './components/List/List';
import Footer from './components/Footer/Footer';
import EmailMe from './components/EmailMe/EmailMe';
import Greeter from './components/Greeter/Greeter';
import NavBar from './components/NavBar/NavBar';

import dummyData from './misc/dummyData';

class App extends Component {
  state = {
    projects: dummyData,
    compReferences: new Array(3).fill().map(() => {
      return React.createRef()
    })
  }

  render() {
    return <div>
      <NavBar refsList={this.state.compReferences} />

      <Greeter ref={this.state.compReferences[0]} />
      <List ref={this.state.compReferences[1]} projectsList={this.state.projects} />
      <EmailMe ref={this.state.compReferences[2]} />

      <Footer />
    </div>;
  }
}

export default App;
