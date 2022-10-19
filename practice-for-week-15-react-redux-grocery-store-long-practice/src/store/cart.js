const ADD_ITEM = 'ADD_ITEM';
const REMOVE_ITEM = 'REMOVE_ITEM';

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

export default function cartReducer(state = {}, action) {
  Object.freeze(state);
  const newState = {...state};

  switch (action.type) {
    case ADD_ITEM:
      newState[action.itemId] = {id: action.itemId, count: 1};
      return newState;
    case REMOVE_ITEM:
      delete newState[action.itemId];
      return newState;
    default:
      return state;
  }
}