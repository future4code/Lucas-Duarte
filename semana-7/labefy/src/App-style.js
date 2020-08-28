import styled from 'styled-components'

export const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: white;
    background-color: #1F1F1F;
`

export const Header = styled.header`
    display: flex;
    justify-content: center;
    padding-top: 2em;
    padding-bottom: 3em;
`

export const Logo = styled.img`
    height: 3em;
`


export const PlaylistsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

// lista de playlists

export const Title = styled.h3`
    font-family: Montserrat;
    font-weight: 500;
    text-align: center;
`

// PLAYLIST

export const SinglePlaylist = styled.div`
    display: flex;
    flex-direction: column;
    align-self: center;

    margin-bottom: 1em;
    width: 50%;

    border-top: 1px solid #282828;
    border-bottom: 1px solid #282828;

   
`

export const PlaylistClosed = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    &:hover {
            background-color:#282828;
            cursor: pointer;
        }
`


export const PlaylistName = styled.p`
    color: #B3B3B3;
    margin-left: 1em;
    font-weight: 700;
`

export const OpenDetailsButton = styled.p`
    color: #B3B3B3;
    font-size: 0.8em;
    align-self: center;
`

// 

export const DeleteContainer = styled.div`
    display: flex;
    align-items: center;
    width: 7em;
    justify-content: space-evenly;
`

export const DeleteIcon = styled.img`
    height: 0.8em;

    transition: transform 3s;
    &:hover {
        transform: scale(1.2);
        cursor: pointer;
    }
`

export const DeleteLabel = styled.label`
    color: #B3B3B3;
    font-size: 0.6em;
    font-weight: 600;
    margin-left: 0.4em;

    transition: transform 3s;
    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`