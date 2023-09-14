import React from 'react'
import Todo from './Todo'

export default class TodoList extends React.Component {
  render() {
    const { todos, toggleCompleted, showAll} = this.props
    const filtered = todos.filter(td => !td.completed || showAll)

    return (
      <div>
        <h2>Todos:</h2>
        {
          filtered.map((todo) => (<Todo key={todo.id} todo={todo} toggleCompleted={toggleCompleted} />))
        }
      </div>
    )
  }
}
