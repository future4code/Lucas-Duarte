import React from 'react';
import styled from 'styled-components'

import Form from './components/Form'
import PlannerGrid from './components/PlannerGrid'

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
`

function App() {
  return (
    <AppContainer>
     <Form/>
     <PlannerGrid/>
    </AppContainer>
  );
}

export default App;
