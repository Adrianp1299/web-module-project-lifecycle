import React from 'react'

export default class TodoList extends React.Component {
  render() {
    const { todos } = this.props
    return (
      <div>
        <h2>Todos:</h2>
        {
          todos.map(td => {
            return <div key={td.id}>{td.name}</div>
          })
        }
      </div>
    )
  }
}
