import React, { Component } from 'react';
//import logo from './logo.svg';
import Projects from './Components/Projects';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: [
        {
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          title: 'OpenSource Projects',
          category: 'Low Level Programming'
        }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        My App
        <Projects projects={this.state.projects}/>
      </div>
    );
  }
}

export default App;
