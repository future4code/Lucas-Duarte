import styled from 'styled-components'

export const AllMatchesContainer = styled.div`
    border-radius: 10px 10px 10px 10px;

  min-height: 20em;
  border: 1px solid #E2E4E3;


  width: 20em;
}
`

export const MatchesTitle = styled.h4`
    color: #FD6B6B;
    text-align: center;
`

export const NoMatchesContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 0.5em;
`

export const NoMatchesAnimation = styled.img`
    width: 50%;
    align-self: center;
`

export const NoMatchesIcon = styled.img`
    height: 9em;
    align-self: center;
    margin-top: 2em;
`

export const MatchesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr; 
`

// == CADA MATCH == 

export const MatchIcon = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 1em;
    padding:0.2em;
    transition: transform 1s;

    &:hover {
        cursor: pointer;
        background-color: #F0F2F1;
    }

    &:active {
        transform: scale(0.95);
    }
`

export const CircleSpark = styled.div`
    align-self: center;
    /* pointer-events: none; */
`

export const AvatarIcon = styled.div`
    background-image: url(${props=> props.src});
    background-size: cover;
    border-radius: 50px 50px 50px 50px;
    height: 3em;
    width: 3em;

    display: flex;
    justify-content: center;
`

export const MatchName = styled.label`
    color: #8F8F8F;
    font-size: 0.8em;
    font-weight: 500;
    margin-top: 0.4em;

    &:hover {
        cursor: pointer;
    }
`