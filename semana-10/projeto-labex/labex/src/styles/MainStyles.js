import styled from 'styled-components'
import {SlideInBottom} from '../keyframes/animations'

export const Title = styled.h1`
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 2.2em;
    line-height: 1.5;

    /* animation: ${SlideInBottom} 2s; */
`

export const Subtitle = styled.h3`
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    font-size: 1.3em;
    line-height: 1.5;
    /* animation: ${SlideInBottom} 2s; */
`

export const Button = styled.button`
    border: 2px solid white;
    color: white;
    background-color: transparent;
    width: 13em;
    height: 3em;    

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
    margin-top: 1em;
    margin-bottom: 1.5em;
`

export const BackLink = styled.span`
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const TripInfoTitle = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    margin-right: 0.4em;
    color: #868686;

    font-size: 0.9em;
`
export const TripInfo = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    color: #FFFFFF;

    font-size: 1em;
`
export const Loading = styled.img`
    height: 6em;
    align-self: center;
    justify-content: center;
    
    position: absolute;
    top: 50%;
    left: 50%;
`