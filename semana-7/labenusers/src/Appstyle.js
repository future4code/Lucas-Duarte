import styled from 'styled-components'

// Style da página
export const AppContainer = styled.div`
    background-color: #282C34;
    display: flex;
    flex-direction: column;
    align-items: center;
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

// Style do form

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    border-top: 0.3em inset #818EA8;
    border-bottom: 0.3em outset #818EA8;
    padding-top: 1em;
    padding-bottom: 1em;

    width: 30%;

    @media (max-width:900px) {
    width: 40%;
}

    @media (max-width:500px) {
    width: 80%;
}
    
`

export const FormText = styled.div`
    color: #FFFF;
    text-align: center;
    font-weight: 300;
    margin-bottom: 1em;
    line-height:1.5em;
`

export const Input = styled.input `
    height: 2.3em;
    width: 50%;

    padding-left: 0.3em;
    margin-bottom: 1em;
    border:none;
`

export const SendButton = styled.button `
    background-color: #FFAF00; 
    height: 3em;
    width: 10em;
    border: none;
    border-radius: 0.4em;

    color: #FFF5E0;
    font-weight: 800;
    font-size: 0.9em;
    outline: 0; 
    transition: transform 3s;

  &:hover {
    background-color: #CB8B00;
    color: #FFF5E0;
    outline: 0; 
  }  
  &:active {
    transform: scale(0.90); 
    outline:0; 
  }

`
// Style da lista

export const ListContainer = styled.div `
    padding-bottom: 2em;
`

export const ListItem = styled.div `
    display: flex;
    align-items: center;
`

export const UserIcon = styled.img`
    height:1em;
    margin-right: 0.5em;
`

export const UserName = styled.strong`
    color: #FFFF;
`
export const DeleteButton = styled.p`
    color: #818EA8;
    font-size: 0.7em;
    margin-left: 0.8em;

&:hover {
    text-decoration: underline;
    cursor:pointer;
}
`