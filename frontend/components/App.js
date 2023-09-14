import React from 'react'
import axios from 'axios'
import TodoList from './TodoList'
import Form from './Form'

const URL = 'http://localhost:9000/api/todos'

export default class App extends React.Component {
state = {
  todos: [],
  error:'',
  todoNameInput:'',
  showAll: true,
}

errorMessage = (err) => this.setState({ ...this.state, error: err.response.data.message })

onTodoNameInputChange = evt => {
  const { value } = evt.target
  this.setState({ ...this.state, todoNameINput: value})
}

postNewTodos = () => {
  axios.post(URL, {name: this.state.todoNameInput})
  .then(res => {
    this.setState({ ...this.state, quotes: this.state.quotes.concat(res.data.data)})
  })
  .catch(err => {
    this.errorMessage(err)
  })

}

onTodoFormSubmit = evt => {
  evt.preventDefautl()
  this.postNewTodos()
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

toggleCompleted = id => () => {
  axios.patch(`${URL}/${id}`)
  .then(res => {
    this.setState({
      ...this.state, todos: this.state.todos.map(td => {
        if(td.id !== id) return td
        return res.data.data
      })
    })
  })
  .catch(err => {
    this.errorMessage
  })
}

toggleShowAll = evt => {
  this.setState ({
    ...this.state,
    showAll: !this.state.showAll,
  })
}


componentDidMount() {
  this.fetchAllTodos()
}

  render() {
    return (
      <div>
        <div id="error">{this.state.error}</div>
        <TodoList todos={this.state.todos} toggleCompleted={this.toggleCompleted} showAll={this.state.showAll}/>
        <Form addTodo={this.onTodoFormSubmit} toggleShowAll={this.toggleShowAll}/>
      </div>
    )
  }
}
