const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';
const INCREMENT_COUNT = 'INCREMENT_COUNT';
const DECREMENT_COUNT = 'DECREMENT_COUNT';
const CHANGE_COUNT = 'CHANGE_COUNT';

export const addItem = (itemId) => {
  return {
    type: ADD_ITEM,
    itemId
  }
}

export const removeItem = (itemId) => {
  return {
    type: REMOVE_ITEM,
    itemId
  }
}

export const incrementCount = (itemId) => {
  return {
    type: INCREMENT_COUNT,
    itemId
  }
}

export const decrementCount = (itemId) => {
  return {
    type: DECREMENT_COUNT,
    itemId
  }
}

export const changeCount = (itemId, newCount) => {
  return {
    type: CHANGE_COUNT,
    itemId,
    newCount
  }
}

export default function cartReducer(state = {}, action) {
  Object.freeze(state);
  const newState = {...state};

  switch (action.type) {
    case ADD_ITEM:
      newState[action.itemId] = {id: action.itemId, count: 1};
      return newState;
    case INCREMENT_COUNT:
      newState[action.itemId].count ++;
      return newState;
    case DECREMENT_COUNT:
      newState[action.itemId].count --;
      return newState;
    case CHANGE_COUNT:
      newState[action.itemId].count = action.newCount;
      return newState;
    case REMOVE_ITEM:
      delete newState[action.itemId];
      return newState;
    default:
      return state;
  }
}