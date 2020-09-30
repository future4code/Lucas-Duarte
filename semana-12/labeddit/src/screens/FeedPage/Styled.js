import styled from 'styled-components'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DAE0E6;

    min-height: 100vh;
    width: 100vw;
`

export const PostContainer = styled.div`
    display: flex;
    width: 40em;
    min-height: 10em;
    margin-bottom: 1em;

    border-radius: 0.5em 0.5em 0.5em 0.5em; 
    border: 1px solid #CCCCCC;

    @media(max-width:500px){
      width: 100vw;
      align-self: center;
    }

    &:hover {
      border: 1px solid #898989;
      cursor: pointer;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #F8F9FA;
    min-width: 2.5em;
    
    border-radius: 0.5em 0 0 0.5em;
    border: none;

`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    background-color: #FFFFFF;
    padding-left: 1em;
    padding-right: 0.5em;
    border-radius: 0em 0.5em 0.5em 0; 
    border: none;
`

export const CreditText = styled.div`
  margin-top: 0.7em;
  color: #787C7E;
  font-weight: 300;
  font-size:0.8em;
`

export const PostTitle = styled.h3`
  font-weight: 600;
  margin-bottom: 0;
`

export const PostText = styled.p`
  font-weight: 400;
`

export const CommentsContainer = styled.div`
  display: flex;
  align-items: center;

  width: fit-content;
  padding: 0.2em;

  margin-bottom:0.5em;

  &:hover{
    background-color: #E8E8E8;
    cursor: pointer;
  }
`

export const CommentsImg = styled.img`
  height: 0.8em;
  margin-right: 0.5em;
`

export const CommentsLabel = styled.figcaption`
  color: #878A8C;
  font-weight: 800;
  font-size:0.8em;

  &:hover{
    cursor: pointer;
  }
`


export const ArrowImg = styled.img`
    height: 1em;
    margin-bottom: 0.3em;
    margin-top: 0.3em;

    padding: 0.5em;

    &:hover {
      cursor: pointer;
      background-color: #E8E8E8;
    }
`

export const VotesCounter = styled.div`
  font-weight: 600;
`

