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

export const PlaylistTitle = styled.div`
    display: flex;
    align-items: center;
    margin-left: 1em;
`

export const OpenIcon = styled.img`
    height: 0.3em;
`

export const PlaylistName = styled.p`
    color: #B3B3B3;
    margin-left: 0.5em;
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
    height: 0.6em;

    transition: transform 3s;
    &:hover {
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


/// ESTILIZAÇÃO DA SEÇÃO 'DETALHES''

export const DetailsContainer = styled.div`
    align-self: center;
    width: 80%;
    padding-bottom: 1em;
`

export const EmptyPlaylistContainer = styled.div`
    display: flex;
    text-align: center;
    flex-direction:column;
    justify-content: center;
    margin-bottom: 1em;
`

export const AddTrackLabel = styled.strong`

    margin-left: 0.2em;
    color: #FD9024;
    
    &:hover {
        cursor: pointer;
        color: #E87708;
    }

`

export const TrackContainer = styled.div`
    display: flex;
    align-items: center;
`

export const TrackIcon = styled.img`
    height: 1em;
    margin-right: 0.8em;
`


export const Player = styled.audio`
    height: 2em;

`

// EDITOR DE ADICIONAR MÚSICA

export const EditorTitle = styled.p`
    font-family: Montserrat;
`

export const AddTrackEditor = styled.div`
    background-color: #282828;
    height: 19em;
    padding: 1.8em;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 0.5em;

    @media (max-width:900px) {
    width: 100%;
    height: 23em;
    word-wrap: break-word;
}
`

export const InputAndLabel = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    width: 60%;
    margin-bottom: 0.8em;
`

export const LabelAddTrack = styled.label `
    color: #B3B3B3;
    font-size: 0.8em;
    font-weight: 600;
    margin-bottom: 0.3em;
`

export const InputAddTrack = styled.input`
    border:none;
    height: 1.7em;
    border-radius: 3px;
    width: 100%;
    padding-left: 0.6em;
`

export const AddButton = styled.button`
    
    border: none;
    background-color: #FD9024;
    border-radius: 20px;

    color: #FFFFFF;
    font-weight: 900;

    padding: 1em;


    &:hover {
        background-color: #E87708;
        cursor:pointer
    }

`

export const Tip = styled.p`
    font-size: 0.7em;
`

//FOOTER

export const Footer = styled.footer`
    margin-top: 3em;
    padding-top: 1em;
    padding-bottom:1em;
    background-color: #1F1F1F;
    /* border-top: 1px inset #818EA8; */
    width: 100%;
    color: #818EA8;

    display:flex;
    justify-content: center;
    align-items: center;
    
`
export const Credit = styled.p`
    color: #818EA8;
    font-size: 0.7em;
`

export const LabenuLogo = styled.img`
    height: 0.7em;
    margin-left: 0.5em;
`