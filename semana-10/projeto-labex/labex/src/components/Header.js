import React from 'react';
import styled from 'styled-components'

//routes
import { useHistory } from "react-router-dom";
import {goToHomePage, goToLoginPage, goToSignUpPage, goToAdminPage} from '../router/goToPages'

import logo from '../img/logo.png'

const HeaderContainer = styled.div`
  width: 100vw;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  height: 2.5em;
  padding-left: 3.2em;
  padding-bottom: 1em;
  align-self: center;

  &:hover {
    cursor: pointer;
  }
`

const ButtonsContainer = styled.div`
  display: flex;
`

const HeaderButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border:none;
  color: white;
  font-weight: 600;
  font-size: 1em;
  font-family: 'Raleway', sans-serif;
  margin-right: 1em;
  line-height:1.5em;

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`

const Header = () => {

  const history = useHistory()
  const token = window.localStorage.getItem("token")

  const logOut = () => {
    localStorage.removeItem("token")
    goToHomePage(history)
  }

    return (
    <HeaderContainer>
      <Logo src={logo} onClick={() => goToHomePage(history)}/>
      
      {!token && 
      <ButtonsContainer>
        {/* <LoginButton onClick = {()=> goToSignUpPage(history)}>
          Cadastrar
        </LoginButton> */}
        <HeaderButton onClick={() => goToLoginPage(history)}>
          Fazer login<br/> (Área restrita)
        </HeaderButton>
      </ButtonsContainer>
      }

      {token &&
      <ButtonsContainer>
        <HeaderButton onClick={() => goToAdminPage(history)}> Painel de controle </HeaderButton>
        <HeaderButton onClick={logOut}> Log Out </HeaderButton>
      </ButtonsContainer>
      }
    </HeaderContainer>
    );
}
 
export default Header;