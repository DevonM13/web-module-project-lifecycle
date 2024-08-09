import React from 'react';
import axios from 'axios';
import TodoList from './TodoList';

const URL = () => {
  return axios.get('http://localhost:9000/api/todos').then(res => res).catch(err => console.err(err));
}

let id = 0;
const getId = () => id++;

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    URL(this.state.name).then(res => {
      this.setState({ ...this.state, todos: res.data.data })
    })
  }

  add = (name) => {
    this.setState({
      ...this.state, todos: this.state.todos.concat({ id: getId(), completed: false, name })
    })
  }

  onClick = (itemId) => {
    this.setState({
      ...this.state, todos: this.state.todos.map(todo => {
        if (itemId === todo.id) return {...todo, completed: !todo.completed}
        return todo
      })
    })
  }
  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} add={this.add} onClick={this.onClick}/> 
      </div>
    )
  }
}
