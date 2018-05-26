import React, { Component } from 'react';
import './App.css';

import List from './components/List/List';
import Footer from './components/Footer/Footer';
import EmailMe from './components/EmailMe/EmailMe';
import Background from './components/Background/Background';
import NavBar from './components/NavBar/NavBar';
import AnimatedName from './components/AnimatedName/AnimatedName';

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
      <Background ref={this.state.compReferences[0]} />

      <NavBar refsList={this.state.compReferences} />
      <AnimatedName />

      <div style={{ height: '170vh' }}></div>
      <List ref={this.state.compReferences[1]} projectsList={this.state.projects} />
      <EmailMe ref={this.state.compReferences[2]} />

      <Footer />

      
    </div>;
  }
}

export default App;
