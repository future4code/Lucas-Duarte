import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DAE0E6;
    min-height: 100vh;
` 

export const RedditIcon = styled.img`
    height: 5em;
    margin-bottom: 1em;
    transition: transform 2s;

    &:hover{
        transform: scale(1.1)
    }
`

export const Title = styled.h2`
    font-weight: 400;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #FFFF;
    border-radius: 0.5em;
    width: 20em;
    min-height: 40vh;
    padding-bottom: 1em;
`

export const Input = styled.input`
    border: 1px solid #E2E2E1;
    border-radius: 5px;
    background-color: #FCFCFB;
    height: 3em;
    width: 15em;
    margin-bottom: 1em;
    padding-left: 0.5em;

    &::placeholder{
        color: #A5A4A4;
        font-weight: 900;
        font-size: 0.8em;
        text-transform: uppercase;
    }
`

export const Button = styled.button`
    border:none;
    background-color: #137BD0;
    color: #FFFFFF;

    height: 3em;
    width: 15em;
    border-radius: 5px;

    font-weight: 900;
    text-transform: uppercase;

    &:hover {
        background-color: #3996DA;
        cursor:pointer;
    }
`

export const Link = styled.strong`
    color: #137BD0;
    
    &:hover {
        color: #3996DA;
        cursor: pointer;
    }
`