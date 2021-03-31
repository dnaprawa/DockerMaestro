import React from 'react'
import './App.css'

import projectService from './services/projects'

import ProjectsTable from './components/ProjectsTable'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      isLoading: true,
      hasErrors: false,
      error: null,
      projects: null,
      project: null
    }
  }

  async componentDidMount() {

    this.setState({
      isLoading: true,
      hasErrors: false,
      error: null,
      projects: null,
      project: null
    })

    try {
      const projects = await projectService.getAll()

      this.setState({
        isLoading: false,
        hasErrors: false,
        error: null,
        projects: projects,
        project: null
      })
    } catch( reason ) {
      this.setState({
        isLoading: false,
        hasErrors: true,
        error: reason,
        projects: null,
        project: null
      })
    }

  }

  handleSelect = (project) => {
    this.setState({
      project: project
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Zmienilem cos</h1>
        <div className="project-list">
          { this.state.isLoading
            ? <span>Loading...</span>
            : this.state.hasErrors
              ? (<div><p>{this.state.error.message}</p><p>Make sure the services and running and try again.</p></div>)
              : <ProjectsTable projects={this.state.projects} onSelect={ this.handleSelect }/>
          }

        </div>
        <div className="project-details">
          { !this.state.project 
            ? (
              <span></span>
            ) : (
              <div className="project-details">
                <h3>Project: {this.state.project.projectId}</h3>
                <form>
                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                      <input type="text" autoComplete="username" className="form-control" value={this.state.project.name}></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Description</label>
                    <div className="col-sm-10">
                      <input type="text" autoComplete="username" className="form-control" value={this.state.project.description}></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Start Date</label>
                    <div className="col-sm-10">
                      <input type="text" autoComplete="username" className="form-control" value={this.state.project.startDate}></input>
                    </div>
                  </div>

                  <div className="form-group row">
                    <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Due Date</label>
                    <div className="col-sm-10">
                      <input type="text" autoComplete="username" className="form-control" value={this.state.project.dueDate}></input>
                    </div>
                  </div>
                </form>
              </div>
            )
          }
        </div>
      </div>
    );
  }
  
}

export default App;
