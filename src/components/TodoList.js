import React from 'react';
import styled from 'styled-components';

import AnimateTodo from './../containers/AnimateTodo';

const List = styled.ul`
  width: 100%;
  list-style-type: none;
`;

const TodoList = ({ filteredTodos, dispatch, toggleTodo, deleteTodo }) => {
  return (
    <List>
      {filteredTodos.map(item => {
        const props = { item, dispatch, toggleTodo, deleteTodo };
        return <AnimateTodo {...props} key={item.id} />
      })}
    </List>
  );
}

export default TodoList;
