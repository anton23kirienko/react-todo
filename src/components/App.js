import React from 'react';
import styled from 'styled-components';

import AddTodo from './../containers/AddTodo';
import Filter from './../containers/Filter';
import ChangeFilter from './../containers/ChangeFilter';

import { GlobalStyle } from './../utils/GlobalStyle';
import { setState } from './../utils/localStorage';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  padding: 88px 12px;
  margin: 0 auto;

  @media (max-width: 510px) {
    width: 100%;
  }
`;
const H1 = styled.h1`
  font-size: 10em;
  color: var(--color-red-alpha);

  @media (max-width: 500px) {
    font-size: 6em;
  }
`;

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <Section>
        <H1>todos</H1>
        <AddTodo />
        <Filter />
        <ChangeFilter />
      </Section>
    </React.Fragment>
  );
}

export default App;
