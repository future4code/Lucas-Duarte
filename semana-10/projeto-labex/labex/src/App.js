import React from 'react';
import Router from './router/Router'

import Header from './components/Header'
import styled from 'styled-components'

const AppContainer = styled.div`
  background-image: url("https://blenderartists.org/uploads/default/original/4X/7/e/2/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg");
  background-position: center;
  background-size:cover;

  color: white;
`


function App() {

  return (
  <AppContainer>
    <Header/>
    <Router/>
  </AppContainer>
  );
}

export default App;
