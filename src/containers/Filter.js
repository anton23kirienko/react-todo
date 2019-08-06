import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TodoList from './../components/TodoList';

import { toggleTodo, deleteTodo } from './../actions/todos';
import { applyFilter } from './../actions/filter';

import filterTodos from './../utils/filterTodos';

const Filter = () => {
  const dispatch = useDispatch();
  const { todos, filter } = useSelector(state => state);
  const filteredTodos = filterTodos(todos, filter.appliedFilter);
  const props = { filteredTodos, dispatch, toggleTodo, deleteTodo };

  return <TodoList {...props} />
}

export default Filter;
