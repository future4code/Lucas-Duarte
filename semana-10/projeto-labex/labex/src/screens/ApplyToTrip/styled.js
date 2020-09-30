import styled from 'styled-components'
import {SlideInBottom} from '../../keyframes/animations'

export const ApplyToTripContainer = styled.div`
    background-image: url("https://www.spacex.com/static/images/backgrounds/careers_future.webp"); 
    background-position: center;
    background-size:cover;

    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 110vh; 
`

export const TitleContainer = styled.div`
    text-align: center;
    animation: ${SlideInBottom} 2s;
`

export const SelectedTripContainer = styled.div`
    background-color: #292929;
    padding: 1em;
    margin-bottom: 1.5em;
    animation: ${SlideInBottom} 2s;
`

