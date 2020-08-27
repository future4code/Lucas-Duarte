import styled from 'styled-components'

// Style da página
export const AppContainer = styled.div`
    background-color: #282C34;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
`

export const Header = styled.header`
    display: flex;
    flex-direction: column;
    margin-top: 1em;
`

export const Logotype = styled.img`
    height: 7em;
`

export const Subtitle = styled.h2`
    color: #FFFFFF;
    font-weight: 200;
    text-align: center;
`

export const Highlight = styled.strong`
    font-weight: 400;
    color: #FFC850;
`

export const Footer = styled.footer`
    margin-top: 3em;
    padding-top: 1em;
    padding-bottom:1em;
    background-color: #282C34;
    /* border-top: 1px inset #818EA8; */
    width: 100%;
    color: #818EA8;

    display:flex;
    justify-content: center;
    align-items: center;
    
`
export const Credit = styled.p`
    color: #818EA8;
    font-size: 0.7em;
`

export const LabenuLogo = styled.img`
    height: 0.7em;
    margin-left: 0.5em;
`