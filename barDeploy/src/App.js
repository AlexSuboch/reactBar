import React from 'react';
import Header from './components/Header'
import Main from './components/Main'
import styled from 'styled-components'

function App() {
  return (
    <Wrapper>
      <Header />
      <Main />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
    display: flex;
    flex-flow: column nowrap;
    padding: 5rem;
`;