import { createStore } from 'redux';

const initialState = {
  counterNumber: 0,
  items: [
    { id: 1009, text: 'sleep' },
    { id: 2, text: 'go to the movies' },
    { id: 90, text: 'eat steak' }
  ]
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
    case 'DELETE_ITEM':

      let copyOfArray = state.items.slice();
      let index;
      for (let i = 0; i < copyOfArray.length; i++) {
        if (copyOfArray[i].id == action.id) {
          index = i;
          break;
        }
      }
      copyOfArray.splice(index, 1);

      let newState = Object.assign({}, state, { items: copyOfArray });
      console.log('new state', newState);
      return newState;
    default:
      return state;

  }
};

const store = createStore(reducer);

module.exports = store;
