const ADD_ITEM = 'ADD_ITEM';

export const addItem = (itemId) => {
  return {
    type: ADD_ITEM,
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
    default:
      return state;
  }
}