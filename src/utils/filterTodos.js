import * as CONSTANTS from './../constants';

export default (todos, filter) => {

  if (filter === CONSTANTS.FILTER_ALL) {
    return todos;
  }
  else if (filter === CONSTANTS.FILTER_ACTIVE) {
    return todos.filter(todo => !todo.completed);
  }
  else if (filter === CONSTANTS.FILTER_COMPLETED) {
    return todos.filter(todo => todo.completed);
  }
}
