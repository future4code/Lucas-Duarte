import styled from 'styled-components'

export const CarouselCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding-left: 1.2em;
    width: 20em;
    height: 17em;
`

export const CarouselTitle = styled.h4`
    font-family: 'Lato', sans-serif;
    font-weight: 600;
    font-size: 1.2em;
    text-align: left;
`

export const CarouselRow = styled.span`
    display: flex;
    align-self: flex-start;
    align-items: center;
`

export const CarouselDetails = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 0.8em;
    color: #868686;
    height: 2em;

    text-align: ${props => {
        if (props.type === "candidate") {
            return 'center'
        } else {
            return 'left'
        }
    }};
`

export const ArrowButton = styled.img`
    height: 2em;
    width: 2em;
    align-self: center;

    margin-right: ${props => {
        if (props.type === "back") {
            return "1.5em"
        }
    }};

    margin-left: ${props => {
        if (props.type === "next") {
            return "1.5em"
        }
    }};

    &:hover {
        cursor: pointer;
    }
`

export const InvisibleArrow = styled.div`
    height: 2em;
    width: 2em;

    margin-right: ${props => {
        if (props.type === "back") {
            return "1.5em"
        }
    }};

    margin-left: ${props => {
        if (props.type === "next") {
            return "1.5em"
        }
    }};
`