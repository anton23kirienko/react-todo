import React from 'react';
import styled from 'styled-components';

import Button from './Button';

import * as CONSTANTS from './../constants';

const Div = styled.div`
  display: flex;
  width: 100%;
  padding: 24px 0px;

  @media (max-width: 310px) { flex-direction: column; }
`;

const Footer = ({ filter, dispatch, changeFilter, deleteCompletedTodo }) => {
  return (
    <Div>
      <Button
        text="All"
        active={filter.appliedFilter === CONSTANTS.FILTER_ALL}
        onClick={() => dispatch(changeFilter(CONSTANTS.FILTER_ALL))}
      />
      <Button
        text="Active"
        active={filter.appliedFilter === CONSTANTS.FILTER_ACTIVE}
        onClick={() => dispatch(changeFilter(CONSTANTS.FILTER_ACTIVE))}
      />
      <Button
        text="Completed"
        active={filter.appliedFilter === CONSTANTS.FILTER_COMPLETED}
        onClick={() => dispatch(changeFilter(CONSTANTS.FILTER_COMPLETED))}
      />
      <Button
        text="Delete Completed"
        active={false}
        onClick={() => dispatch(deleteCompletedTodo())}
      />
    </Div>
  );
}

export default Footer;
