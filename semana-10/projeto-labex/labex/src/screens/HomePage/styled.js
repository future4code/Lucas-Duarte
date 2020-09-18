import styled from 'styled-components'
import {FadeIn, SlideInBottom} from '../../keyframes/animations'

export const HomePageContainer = styled.div`
    background-image: url("https://www.spacex.com/static/images/backgrounds/careers_future.webp"); 
    background-position: center;
    background-size:cover;

    display: flex;
    flex-direction: column;
    min-height: 100vh;
    text-align: center;

    position: relative;
    animation: ${FadeIn} 3s;
` 
export const TitleContainer = styled.div`
    animation: ${SlideInBottom} 2s;
`

export const TripSession = styled.div`
    display: flex;
    justify-content: center;
    animation: ${SlideInBottom} 3s;
`