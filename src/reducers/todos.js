import * as CONSTANTS from './../constants';

export default (state = [], action) => {

  if (action.type === CONSTANTS.ADD_TODO) {
    return [
      ...state,
      {
        text: action.text,
        id: action.id,
        completed: false,
        unmount: false
      }
    ]
  }
  else if (action.type === CONSTANTS.ANIMATE_UNMOUNT_TODO) {
    return state.map(todo => {
      return todo.id === action.id
        ? {
          ...todo,
          unmount: true
         }
         : todo;
    });
  }
  else if (action.type === CONSTANTS.DELETE_TODO) {
    return state.filter(todo => todo.id !== action.id);
  }
  else if (action.type === CONSTANTS.ANIMATE_UNMOUNT_COMPLETED) {
    return state.map(todo => {
      return todo.completed
        ? {
          ...todo,
          unmount: true
        }
        : todo;
    });
  }
  else if (action.type === CONSTANTS.DELETE_COMPLETED) {
    return state.filter(todo => !todo.completed);
  }
  else if (action.type === CONSTANTS.TOGGLE_TODO) {
    return state.map(todo => {
      return todo.id === action.id
        ? {
          ...todo,
          completed: !todo.completed
        }
        : todo;
    });
  }
  else if (action.type === CONSTANTS.TOGGLE_ALL) {
    return state.map(todo => {
      return {
        ...todo,
        completed: action.checked
      }
    });
  }

  return state;
};
