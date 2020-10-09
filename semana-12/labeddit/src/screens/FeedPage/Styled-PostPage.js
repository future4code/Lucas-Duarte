import styled from 'styled-components'

export const BottomContainer = styled.div`
    background-color: white;
    width: 40em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding-top: 2em;
`

export const NoCommentsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    
    background-color: white;
    height: 15em;
`

export const NoCommentsImg = styled.img`
    height: 2.5em;
    margin-top: 3em;
`

export const NoCommentsTitle = styled.h4`
    color: #B0B0B0;
    font-weight: 500;
`

export const NoCommentsText = styled.div`
    color: #B0B0B0;
    font-size: 0.9em;
    font-weight: 600;
    margin-bottom: 2em;
`

export const CommentsContainer = styled.div`
    width: 100%;
    margin-top: 1em;
    padding-bottom: 2em;
    word-wrap: break-word;
`