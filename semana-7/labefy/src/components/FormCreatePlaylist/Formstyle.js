import styled from 'styled-components'

export const FormContainer = styled.div`
    align-self: center;

    display: flex;
    flex-direction: column;
    text-align: center;

    width: 50%;

    
`

export const CallToAction = styled.h3 `
    font-family: Montserrat;
    font-weight: 300;
`

export const ContainerInputButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5em;
`

export const InputAddPlaylist = styled.input`
    border: none;
    height: 2em;
    width: 50%;
    border-radius: 7px;
    padding-left: 1em;
    margin-right: 1em;
`

export const ButtonAddPlaylist = styled.button`
    
    width: 10em;
    height: 2.5em;
    background-color: #FD9024;
    border-radius: 30px;
    border: none;

    color: #FFFFFF;
    font-weight: 900;
    font-family: Helvetica;



    transition: transform 3s;
    &:hover {
        cursor: pointer;
        transform: scale(1.06);
        background-color: #E87708;
    }

`

