import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Form from './../components/Form';

import { addTodo } from './../actions/todos';
import { deleteCompletedTodo } from './../actions/todos';
import { toggleAllTodo } from './../actions/todos';

const AddTodo = () => {
  const [value, setValue] = useState('');
  const [checked, setChecked] = useState(false);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleForm = e => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue('');

    if (checked) setChecked(!checked);
  }

  const handleButton = e => {
    dispatch(toggleAllTodo(!checked));
    setChecked(!checked);
  }

  const props = { value, setValue, checked, todos, handleForm, handleButton };

  return <Form {...props} />
}

export default AddTodo;
