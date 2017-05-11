import React from 'react';
import store from './store.js';

class Counter extends React.Component {

  constructor() {
    super();

    this.state = store.getState();
  }

  componentDidMount() {
    store.subscribe(() => {
      this.setState(store.getState());
    });
  }

  handleClick() {
    const action = { type: 'COUNTER_INCREMENT' };
    store.dispatch(action);
  }

  render() {
    return (
      <div onClick={() => this.handleClick()}>
        {this.state.counterNumber}
      </div>
    );
  }
}

module.exports = Counter;
