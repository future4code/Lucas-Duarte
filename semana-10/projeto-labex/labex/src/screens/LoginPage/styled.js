import styled from 'styled-components'
import {FadeIn, SlideInBottom} from '../../keyframes/animations'

export const LoginPageContainer = styled.div`
    background-image: url("https://www.spacex.com/static/images/backgrounds/human_spaceflight_mars.jpg"); 
    background-position: center;
    background-size:cover; 

    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;

    animation: ${FadeIn} 1s;
`
export const TitleContainer = styled.div`
    animation: ${SlideInBottom} 2s;
`

export const TipContainer = styled.div`
    color: white;
    font-size:0.8em;
    animation: ${FadeIn} 5s;
`

