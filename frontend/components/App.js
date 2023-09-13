import React from 'react'
import axios from 'axios'
import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
state = {
  todos: [],
  error:'',
}

errorMessage = (err) => this.setState({ ...this.state, error: err.response.data.message })

postNewTodos = (input) => {
  axios.post(URL, {name: input})
  .then(res => {
    this.fetchAllTodos()
  })
  .catch(err => {
    this.errorMessage(err)
  })

}

fetchAllTodos = () => {
 axios.get(URL)
 .then(res=> {
  this.setState({
    ...this.state, 
    todos: res.data.data
  })
 })
 .catch(err => {
  this.errorMessage(err)
 })
}


componentDidMount() {
  this.fetchAllTodos()
}

  render() {
    return (
      <div>
        <div id="error">{this.state.error}</div>
        <TodoList todos={this.state.todos} />
        <Form addTodo={this.postNewTodos} />
      </div>
    )
  }
}
