import React, { Component } from 'react';
//import logo from './logo.svg';
import uuid from 'uuid'
import Projects from './Components/Projects';
import AddProject from './Components/AddProject'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    }
  }

  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuid.v4(),
          title: 'Business Website',
          category: 'Web Design'
        },
        {
          id: uuid.v4(),
          title: 'Social App',
          category: 'Mobile Development'
        },
        {
          id: uuid.v4(),
          title: 'OpenSource Projects',
          category: 'Low Level Programming'
        }
      ]
    })
  }

  handleAddProject(project) {
    console.log(project);
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects: projects});
  }

  handleDeleteProject(id) {
    console.log(id);
    let projects = this.state.projects;
    let idx = projects.findIndex(x => x.id === id);
    projects.splice(idx, 1);
    this.setState({projects: projects});
  }

  render() {
    return (
      <div className="App">
        <AddProject addProject={this.handleAddProject.bind(this)}/>
        <Projects projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
      </div>
    );
  }
}

export default App;
