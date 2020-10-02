import React from 'react';
import styled from 'styled-components'
import Router from './routes/Router'
import {BrowserRouter} from 'react-router-dom'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;  
  max-width: 100vw;
`


function App() {
  return (
    <AppContainer>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </AppContainer>
  );
}

export default App;
