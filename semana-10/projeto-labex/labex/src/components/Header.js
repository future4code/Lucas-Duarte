import React from 'react';
import styled from 'styled-components'

const HeaderContainer = styled.div`
  background-image: url(https://wallpapercave.com/wp/wp2742875.jpg);
  height: 15vh;
  display: flex;
`

function Header() {
    return (
    <HeaderContainer>
      pagina de login
    </HeaderContainer>
    );
  }



export default Header;