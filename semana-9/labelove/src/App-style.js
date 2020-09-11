import styled from 'styled-components'

export const AppContainer = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #FFFDFD;
  display: flex;
  flex-direction: column;
  align-items: center;
`
// HEADER: 

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 0.5em;
`

export const LogoImage = styled.img`
  height: 2.5em;
  margin-top: 1em;
  &:hover {
    cursor: pointer;
  }
`

// TINDER CONTAINER

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
`

export const MatchesIcon = styled.img`
  height: 2em;
  align-self: flex-end;
  margin-bottom: 0.5em;
  transition: transform 0.3s;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
    transform: scale(1.06);
  }

  
  
`


// -------- BOTÃO DE RESET --------

export const ClearButton = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2em;
  transition: transform 2s;
  &:hover{
    cursor: pointer;
    transform: scale(0.98);
  }

`
export const ClearLabel = styled.label`
   color: #8F8F8F;
   margin-right: 0.5em;
  &:hover {
    cursor: pointer;
    color: #57656E;
    text-decoration: underline;
  }
`

export const ClearIcon = styled.img`
  height: 0.7em;
`
// ------- FOOTER ------

export const Footer = styled.footer`
  margin-top: 3em;
  padding-bottom: 1em;
  color: #8F8F8F;
  font-size: 0.7em;
`

// ------- LOADING ---------

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LoadingText = styled.p`
  color: #57656E; 
  margin-top: -1.6em;
`

export const LoadingGif = styled.img`
  width: 20%;
`
