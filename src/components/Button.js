import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: 3px 4px;
  margin: 2px;
  border: 1px solid transparent;
  border-color: ${props => props.active ? 'var(--color-red)' : 'transparent'};
  border-radius: 3px;
  color: var(--color-black);
  background-color: inherit;
  transition: border-color 0.1s ease-in;

  &:hover { border-color: var(--color-red); }

  &:last-child { margin-left: auto; }

  @media (max-width: 310px) {
    &:last-child { margin-left: 2px; }
  }
`;

const Button = ({ text, active, onClick }) => {
  return (
    <StyledButton
      type="button"
      active={active}
      onClick={onClick}
    >
      {text}
    </StyledButton>
  );
}

export default Button;
