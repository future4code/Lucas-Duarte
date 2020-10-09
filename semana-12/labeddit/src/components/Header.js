import React from 'react'
import styled from 'styled-components'

// ROUTER:
import { useHistory } from "react-router-dom";
import { goToFeed, goToLogin } from '../routes/Coordinator'

import logo from '../assets/img/labeddit-logo.svg'
import profileIcon from '../assets/img/profile-icon.svg'

const HeaderContainer = styled.div`
    background-color: #FFFFFF;
    width: 100%;
    max-width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: fixed;
`

const LogoImg = styled.img`
    height: 2em;
    margin-left: 2em;

    &:hover {
        cursor: pointer;
    }
`

const ProfileContainer = styled.div`
    display: flex;
    margin-right: 4em;

`

const ProfileIcon = styled.img`
    height: 1.6em;
    margin-right: 0.5em;
` 

const VerticalContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 1.6em;

`

const UserName = styled.div`
    font-size: 0.8em;
    font-weight: 600;
`

const LogoutLabel = styled.div`
    font-size: 0.8em;
    font-weight: 600;
    color: #A8AAAB;

    &:hover{
        cursor: pointer;
        color: #797B7C;
    }
`


function Header() {

    const history = useHistory()
    const username = localStorage.getItem('username')

    const logOut = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("username")
        goToLogin(history)
    }

    return (
        <HeaderContainer>
            <LogoImg src={logo} onClick={() => goToFeed(history)}/>
        
        <ProfileContainer>
        <ProfileIcon src={profileIcon}/>

        <VerticalContainer>
            <UserName>{username}</UserName>
            <LogoutLabel onClick={() => logOut()}>Logout</LogoutLabel>
        </VerticalContainer>

        </ProfileContainer>

        </HeaderContainer>
    )

}

export default Header