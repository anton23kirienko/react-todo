import React from 'react';
import styled from 'styled-components';
import { FaChevronDown } from 'react-icons/fa';

const StyledForm = styled.form`
  position: relative;
  width: 100%;
  border: 1px solid var(--color-gray);
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
`;
const Input = styled.input`
  min-width: 10px;
  width: 100%;
  padding: 12px 12px 12px 64px;
  border: none;
  font-size: 3em;
  color: var(--color-darkgray);
  appearance: none;
  &::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: var(--color-darkgray-alpha);
  }
  &::-moz-placeholder { /* Firefox 19+ */
    color: var(--color-darkgray-alpha);
  }
  &:-ms-input-placeholder { /* IE 10+ */
    color: var(--color-darkgray-alpha);
  }
  &:-moz-placeholder { /* Firefox 18- */
    color: var(--color-darkgray-alpha);
  }
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 8px;
  display: flex;
  padding: 6px;
  border: none;
  font-size: 2.4em;
  color: ${props => props.checked ? 'var(--color-darkgray)' : 'var(--color-darkgray-alpha)'};
  background-color: inherit;
  cursor: pointer;
  transform: translateY(-50%);
`;

const Form = ({ value, setValue, checked, todos, handleForm, handleButton }) => {
  return (
    <StyledForm onSubmit={handleForm}>
      {!!todos.length && (
        <Button
          type="button"
          checked={checked}
          onClick={handleButton}
        >
          <FaChevronDown />
        </Button>
      )}
      <Input
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="What to do?"
        type="text"
        required
      />
    </StyledForm>
  );
}

export default Form;
