import { v4 } from 'node-uuid';

import * as CONSTANTS from './../constants';

export const addTodo = text => dispatch => {
  dispatch({
    type: CONSTANTS.ADD_TODO,
    id: v4(),
    text
  });
}

export const deleteTodo = id => dispatch => {
  dispatch({
    type: CONSTANTS.ANIMATE_UNMOUNT_TODO,
    id
  });
  setTimeout(() => {
    dispatch({
      type: CONSTANTS.DELETE_TODO,
      id
    });
  }, CONSTANTS.DELAY);
}

export const toggleTodo = id => dispatch => {
  dispatch({
    type: CONSTANTS.TOGGLE_TODO,
    id
  });
}

export const deleteCompletedTodo = () => dispatch => {
  dispatch({ type: CONSTANTS.ANIMATE_UNMOUNT_COMPLETED });
  setTimeout(() => {
    dispatch({ type: CONSTANTS.DELETE_COMPLETED });
  }, CONSTANTS.DELAY);
}

export const toggleAllTodo = checked => dispatch => {
  dispatch({
     type: CONSTANTS.TOGGLE_ALL,
     checked
  });
}
