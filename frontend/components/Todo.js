import React from 'react'

export default class Todo extends React.Component {
  render() { 
    const {id, name, completed, } = this.props.todo
    const { toggleCompleted} = this.props
    return (
      <div onClick={toggleCompleted(id)} key={id}>
        {name} {completed ? '✓' : ''}
      </div>
    )
  }
}
