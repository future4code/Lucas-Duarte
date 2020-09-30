import React from 'react';
import Router from './router/Router'
import styled from 'styled-components'


const AppContainer = styled.div`

  /* background-image: url("https://www.spacex.com/static/images/backgrounds/home_humans-mobile.webp"); 
  background-position: center;
  background-size:cover; */

  background-color: #000000;

  color: white;
  
  display: flex;
  flex-direction: column;

`


function App() {

  return (
  <AppContainer>
    <Router/>
  </AppContainer>
  );
}

export default App;
