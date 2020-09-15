import React from 'react';
import styled from 'styled-components'

//routes
import { useHistory } from "react-router-dom";
import {goToLoginPage} from '../router/goToPages'

import logo from '../img/logo.png'

const HeaderContainer = styled.div`
  /* background-image: url("https://blenderartists.org/uploads/default/original/4X/7/e/2/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg");
  background-position: center;
  background-size:cover; */

  height: 15vh;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled.img`
  height: 2.5em;
  margin-left: 1em;
  align-self: center;
`

const Button = styled.p`
  display: flex;
  align-items: center;
  /* height: 2.5em;
  width: 10em;
  background-color: #C3B0C1;
  border: none;
  border-radius: 3em; */

  background-color: transparent;
  border:none;


  color: white;
  font-weight: 600;
  font-size: 1em;
  font-family: 'Raleway', sans-serif;
  margin-right: 1em;

  &:hover {
    cursor: pointer;
  }
`

const Header = () => {

  const history = useHistory()

    return (
    <HeaderContainer>
      <Logo src={logo}/>
      <Button>
      {/* onClick={() => goToLoginPage(history)}> */}
        <p>Fazer login</p>
      </Button>
    </HeaderContainer>
    );
  }



export default Header;