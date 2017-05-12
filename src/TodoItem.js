import React from 'react';
import store from './store.js';

class TodoItem extends React.Component {

  delete() {
    store.dispatch({ type: 'DELETE_ITEM', id: this.props.item.id });
  }

  render() {
    return (
      <li>{this.props.item.text}
        <button onClick={() => this.delete()}>delete</button>
      </li>
    );
  }

}

module.exports = TodoItem;
