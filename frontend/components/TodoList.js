import React from 'react';
import Todo from './Todo';
import Form from './Form';

export default class TodoList extends React.Component {
  state = {
    showAll: true
  }

  toggleShowAll = () => {
    this.setState({
      ...this.state, showAll: !this.state.showAll
    })
  }

  render() {
    const {todos, add, onClick} = this.props;
    const filtered = todos.filter(todo => !todo.completed || this.state.showAll)
    return (
      <div>
        <h2>Todos:</h2>
        {
          filtered.map(todo => (<Todo key={todo.id} todo={todo} onClick={onClick}/>)
          )
        }
        <Form add={add}/>
        <button onClick={this.toggleShowAll}>{this.state.showAll ? 'Hide Completed' : 'Show Completed'}</button>
      </div>
    )
  }
}
