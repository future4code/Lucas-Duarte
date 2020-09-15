import React, { useState } from 'react';
import axios from 'axios';

//Componentes
import AllMatches from './assets/components/AllMatches'
import ProfileCard from './assets/components/ProfileCard'

// style
import {AppContainer} from './App-style'
import {Header, LogoImage, PageContainer, Footer} from './App-style'
import {ClearButton, ClearLabel, ClearIcon} from './App-style'

//images
import logo from './assets/img/labelove.svg'
import resetIcon from './assets/img/reset.svg'

//Animation imports:
import loadingAnimation from './assets/img/heartbeating.json'


function App() {

  // ferramentas pra conectar com a API:

  const baseUrl = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/"

  const id = "lucsduart"

  // Hook e funções de trocar de página:

  const [currentPage, setCurrentPage] = useState('App')

  const goToMatches = () => {
    setCurrentPage("Matches")
  }

  const goToApp = () => {
    setCurrentPage("App")
}

  // Função de limpar matches:

  const clearAll = async () => {

    try {
      const response = await axios.put(`${baseUrl}${id}/clear`)

      alert("Seu histórico de matches foi limpo!")
    }
    catch (error){
      console.log("Erro na limpeza:", error)
    }
  }


  return (
    <AppContainer>
      <Header>
        <LogoImage onClick={goToApp} src={logo}/>
      </Header>
      {currentPage == "App" && 

      <PageContainer>

        <ProfileCard
        baseUrl={baseUrl}
        id={id}
        goToMatches={goToMatches}
        />

        <ClearButton onClick={clearAll}>
          <ClearLabel>Limpar matches</ClearLabel>
          <ClearIcon src={resetIcon}/>
        </ClearButton>
        
      </PageContainer>


      }

      {currentPage == "Matches" && 
      <PageContainer>
      <AllMatches
      baseUrl={baseUrl}
      id={id}
      goToApp={goToApp}
      />
      </PageContainer>
      }
    
      <Footer>
      Criado por <strong>@dolucasduarte</strong> na semana de  7/set/2020. 
      </Footer>
    </AppContainer>
  );
}

export default App;