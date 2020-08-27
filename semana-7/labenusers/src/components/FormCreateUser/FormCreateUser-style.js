import styled from 'styled-components'

export const FormContainer = styled.div`
display: flex;
flex-direction: column;
align-items:center;
width: 30%;


@media (max-width:900px) {
    width: 40%;
}

    @media (max-width:500px) {
    width: 80%;
}

`

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    border-top: 0.3em inset #818EA8;
    border-bottom: 0.3em outset #818EA8;
    padding-top: 1em;
    padding-bottom: 1em;
`

export const FormText = styled.div`
    color: #FFFF;
    text-align: center;
    font-weight: 300;
    margin-bottom: 1em;
    line-height:1.5em;
`

export const Input = styled.input `
    height: 2.8em;
    font-size: 1em;
    width: 70%;
    color: #282C34;

    padding-left: 0.8em;
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
    cursor:pointer;
    color: #FFF5E0;
    outline: 0; 
  }  
  &:active {
    transform: scale(0.90); 
    outline:0; 
  }

`