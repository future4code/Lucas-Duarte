import styled from 'styled-components'
import {SlideInLeft} from '../../keyframes/animations'

export const AdminPageContainer = styled.div`

    background-image: ${props => {
        if (props.page === "tripdetails") {
            return 'black'
        } else {
            return `url("https://www.spacex.com/static/images/mission/mission-slider-01.webp");`
        }
    }};
    
    background-position: center;
    background-size:cover; 

    display: flex;
    flex-direction: column;
    align-items: left;
    min-height: 100vh;

    position: relative;
`

export const AdminPanelContainer = styled.div`
    margin-left: 3.5em;
    animation: ${SlideInLeft} 1s;
`

export const BigSelect = styled.select`
    border: none;
    color: white;
    background-color: #292929;
    width: 25em;
    height: 3em;   
    padding-right: 1em;
    padding-left: 0.4em; 

    &:hover {
        background-color: white;
        color: black;
        cursor: pointer;
    }
`

// ------------ TRIP DETAILS ------------ //

export const CandidatesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;

    @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 600px) {
    grid-template-columns: 1fr;
    }
`

export const CandidateContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 2em;
    margin-bottom: 2em;
    padding: 1em;
    border: 3px solid #292929;

    max-width: 20em;
`

export const ProfileImg = styled.img`
    height: 4em;
`

export const DecideContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 1.5em;
`
export const DecideButton = styled.span`
    display: flex;
    width: 7em;
`

export const DecideImg = styled.img`
    height: 1em;
    margin-right: 0.5em;
    &:hover {
        cursor: pointer;
    }
`

export const DecideLabel = styled.figcaption`
    font-size: 0.9em;

    &:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`

