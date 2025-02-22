import React from 'react'

export default class Form extends React.Component {
  state = {
    input: '',
  }

  onSubmit = evt => {
    evt.preventDefault()
    this.props.addTodo(this.state.input)
    this.setState({
      ...this.state,
      input:''
    })
  }
  onChange = evt => {
    const {value} = evt.target
    this.setState({
      ...this.state,
      input: value
    })
  }

  render() {
    const { toggleShowAll } = this.props
    
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <input type="text" value={this.state.input} onChange={this.onChange} />
        <input type = "submit" />
      </form>
      <button onClick={toggleShowAll}>Clear Completed</button>
      </div>
    )
  }
}
