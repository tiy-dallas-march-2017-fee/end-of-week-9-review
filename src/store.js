import { createStore } from 'redux';

const initialState = {
  counterNumber: 0
};

const reducer = (state = initialState, action) => {
  console.log('reducer', action);

  switch (action.type) {
    case 'COUNTER_INCREMENT':

      //copy it
      const copy = Object.assign({}, state);

      //change it
      const changedCopy = Object.assign(copy,  {
        counterNumber: state.counterNumber + 1
      });

      console.log('what is the new state?', changedCopy);

      return changedCopy;

      //or do it in one step
      /*
      const oneStepCopy = Object.assign({}, state,  {
        counterNumber: state.counterNumber + 1
      });
      */
    default:
      return state;

  }
};

const store = createStore(reducer);

module.exports = store;
