import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Footer from './../components/Footer';

import { changeFilter } from './../actions/filter';
import { deleteCompletedTodo } from './../actions/todos';

const ChangeFilter = () => {
  const { todos, filter } = useSelector(state => state);
  const dispatch = useDispatch();

  const props = { filter, dispatch, changeFilter, deleteCompletedTodo };

  return !!todos.length && <Footer {...props} />
}

export default ChangeFilter;
