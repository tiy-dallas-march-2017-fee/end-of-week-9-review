import React from 'react';
import store from './store.js';
import TodoItem from './TodoItem.js';

class TodoList extends React.Component {

  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }


  render() {

    const items = this.state.items.map((x) => <TodoItem item={x} key={x.text} />)

    return (
      <div className="todo-list">
        <ol>
        {items}
        </ol>
      </div>
    );
  }


}

module.exports = TodoList;
