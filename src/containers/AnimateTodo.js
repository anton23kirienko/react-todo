import React, { useEffect, useState } from 'react';
import { useTransition, animated } from 'react-spring';
import styled from 'styled-components';

import TodoItem from './../components/TodoItem';
import { DURATION } from './../constants';

const ListItem = styled.li`
  margin: -1px 0px;
  border: 1px solid var(--color-gray);
  opacity: ${props => props.opacity};
  transition: opacity ${ DURATION } ease-out;
`;

const AnimateTodo = (props) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setOpacity(1);
  }, []);

  return (
    <ListItem
      opacity={props.item.unmount ? 0 : opacity}
    >
      <TodoItem {...props} />
    </ListItem>
  );
}

export default AnimateTodo;
