import React from 'react';
import styled from 'styled-components';
import { FaTimes, FaCheck } from 'react-icons/fa';


const Button = styled.button`
  display: flex;
  padding: 6px;
  border: none;
  font-size: 3em;
  color: var(--color-red);
  background-color: inherit;
  cursor: pointer;
  opacity: 0.2;
  transition: opacity 0.2s ease-in;
`;
const Div = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 64px;
  overflow-x: hidden;

  &:hover ${Button} { opacity: 1; }
`;
const Span = styled.span`
  position: relative;
  padding: 12px 0px;
  font-size: 2.4em;
  color: ${props => props.completed ? 'var(--color-gray)' : 'inherit'};
  text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  transition: color 0.2s ease-out 0.1s;
`
const Input = styled.input`
  position: absolute;
  top: 50%;
  left: 8px;
  width: 36px;
  height: 36px;
  border: 1px solid var(--color-darkgray-alpha);
  border-radius: 50%;
  transform: translateY(-50%);
  appearance: none;
`;
const StyledFaCheck = styled(FaCheck)`
  position: absolute;
  top: 50%;
  left: 16px;
  font-size: 2.4em;
  color: var(--color-green);
  opacity: ${props => props.checked ? 1 : 0};
  transform: translateY(-50%);
  transition: opacity 0.1s ease-out;
`;

const TodoItem = ({ item, dispatch, toggleTodo, deleteTodo }) => {
  return (
    <Div>
      <StyledFaCheck checked={item.completed ? true : false} />
      <Input
        type="checkbox"
        checked={item.completed ? true : false}
        onChange={() => dispatch(toggleTodo(item.id))}
      />
      <Span completed={item.completed}>
        {item.text}
      </Span>
      <Button
        type="button"
        onClick={() => dispatch(deleteTodo(item.id))}
      >
        <FaTimes />
      </Button>
    </Div>
  );
}

export default TodoItem;
