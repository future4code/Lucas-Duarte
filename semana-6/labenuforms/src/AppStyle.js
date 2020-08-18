import styled from 'styled-components'

// Style da página
export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.header`
    background-color: #FEFDFD;
    display: flex;
    justify-content: center;
    padding-top: 1em;
    padding-bottom: 1em;
`

export const Body = styled.body`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    height: 100vh;
    padding: 1em;

    @media (max-width: 1200px) {
    width: 30%vw;
    }
    @media (max-width: 500px) {
    width: 100%vw;
    }

`

export const LogoStyle = styled.img`
    height: 2.3em;
`

export const Button = styled.button`
    padding: 15px;
    border-radius: 2px;
    font-weight: bold;
    font-size: 90%;
    display: flex;
    align-items: center;

    border: 0;
    background: #1D61DD;
    color: white;
    font-family: 'Montserrat', sans-serif;
    margin-top: 1em;
`

export const NextIcon = styled.img`
    margin-left: 0.4em;
    height: 0.7em;
`

// Style formulário

export const Titulo = styled.h2`
    text-align: center;
    color: #2D3031;
    font-weight: 500;
`

export const ContainerForm = styled.div`
    display: flex;
    flex-direction: column;
`

export const ContainerInput = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1em;
`

export const Label = styled.label`
    align-self: center;
    margin-bottom: 0.5em;
`

export const Input = styled.input`
    border: 1px solid #A8B0B2;
    align-self: center;
    height: 2em;
    width: 18em;
    padding-left: 0.5em;
`

export const Select = styled.select`
    border: 1px solid #A8B0B2;
    align-self: center;
    height: 2em;
    width: 18em;
    padding-left: 0.5em;
`

// Tela de sucesso

export const Paragraph = styled.p`
text-align:center;
`
export const SuccessImage = styled.img`
height: 8em;
`

