import React from 'react'

function ProjectsTable( props ) {
  const projects = props.projects || []

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Description</th>
          <th scope="col">Start Date</th>
          <th scope="col">Due Date</th>
        </tr>
      </thead>
      <tbody>
        { projects.map( (p, i) => (
          <tr key={i} onClick={ () => props.onSelect( p ) }>
            <td>{p.projectId}</td>
            <td>{p.name}</td>
            <td>{p.description}</td>
            <td>{p.startDate}</td>
            <td>{p.dueDate}</td>
          </tr>
        )) }
      </tbody>
    </table>
  )
}

export default ProjectsTable