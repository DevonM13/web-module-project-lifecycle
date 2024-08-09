import React from 'react';

export default class Todo extends React.Component {
  render() {
    const { id, name, completed } = this.props.todo
    const { onClick } = this.props
    return (
      <div onClick={() => onClick(id)}>
        {name} {completed && '✓'}
      </div>
    )
  }
}
