import styled from 'styled-components'
import {keyframes} from 'styled-components'

const heartbeat = keyframes`
  0% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    -webkit-transform: scale(0.9);
            transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
`

export const LoadingImg = styled.img`
    height: 3em;
    animation: ${heartbeat} 1s infinite;
`

export const LoadingText = styled.div`
    color: #FD9024;
    font-weight: 600;
    font-size: 0.8em;
    margin-top: 1em;
    text-align: center;
    animation: ${heartbeat} 1s infinite;
`

export const PostContainer = styled.div`
    width: 50em;
    display: flex;
    min-height: 10em;
    margin-bottom: 1em;
`

export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 1em 0 0 1em;
    background-color: #F8F9FA;
    min-width: 2.5em;
    border-left: 1px solid #CCCCCC;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;

`

export const ArrowImg = styled.img`
    height: 1em;
    margin-bottom: 0.3em;
    margin-top: 0.3em;

    &:hover {
        cursor: pointer;
    }
`

export const VotesCounter = styled.div`

`

export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
    padding-left: 1em;
    min-width: 100%;
    border-radius: 0em 1em 1em 0;
    border-top: 1px solid #CCCCCC;
    border-bottom: 1px solid #CCCCCC;
    border-right: 1px solid #CCCCCC;

`