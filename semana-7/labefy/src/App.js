import React from 'react';
import axios from 'axios';

// style
import {AppContainer, Header, Logo, PlaylistsContainer} from './App-style'
import {PlaylistsList, Title, PlaylistName} from './App-style'

//
import {SinglePlaylist, PlaylistClosed, OpenDetailsButton} from './App-style'

import {DeleteContainer, DeleteIcon, DeleteLabel} from './App-style'

// componentes
import FormCreatePlaylist from './components/FormCreatePlaylist/FormCreatePlaylist'

// images
import labefy from './components/img/labefy.png'
import deleteicon from './components/img/trash.svg'

const axiosConfig = {
  headers: {
    Authorization: "lucas-duarte-jackson"
  }
};

export class App extends React.Component {

  state={
    allPlaylists:[],
    showPlaylistDetails: false,
    numberOfTracks: "",
    tracks: [],
    showPlaylistEditor: false,
    selectedPlaylistId: "",
    addTrackName: "",
    addTrackArtist: "",
    addTrackURL: "",
}

getAllPlaylists = () => {
        
  axios
  .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
  .then ((response) => {
      this.setState({allPlaylists:response.data.result.list})
  })
  .catch ((error) => {
      console.log("Erro no getAllPlaylists", error)
  })
}

componentDidMount = () => {
  this.getAllPlaylists()
}

componentDidUpdate = () => {
  this.getAllPlaylists()
}

getPlaylistTracks = (playlistId) => {

  axios
  .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, axiosConfig)
  .then ( (response) => {
      console.log(response.data.result.quantity)
      console.log(response.data.result.tracks)
      this.setState({
          showPlaylistDetails:true,
          selectedPlaylistId: playlistId,
          numberOfTracks: response.data.result.quantity,
          tracks: response.data.result.tracks,
      })
  })
  .catch ( (error) => {
      console.log("Erro no getPlaylistTracks", error)
  })
}

addTrackToPlaylist = (playlistId) => {

  const body = {
      name: this.state.addTrackName,
      artist: this.state.addTrackArtist ,
      url: this.state.addTrackURL, 
  }

  axios
  .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, axiosConfig)
  .then ( (response) => {
      this.setState({
        showAddTrackEditor:true,
        selectedPlaylistId: playlistId,
      })
      this.getPlaylistTracks()
  })
  .catch ( (error) => {
      console.log("erro na addTracktoPlaylist", error)
  })
}

deletePlaylist = (playlistId) => {

  const confirmation = prompt(`Para deletar essa playlist, digite: DELETAR`)

    if (confirmation === "DELETAR" || confirmation === "deletar") {
      axios
      .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, axiosConfig)
      .then( (response) => {
          this.getAllPlaylists()
      })
      .catch ( (error) => {
          console.log(error)
      })
  }

}


  render() {

    const playListDetails = () => {
      if (this.state.showPlaylistDetails)  {
          return (
              <div>
                  <p>{this.state.numberOfTracks} músicas</p>
                  <button onClick = {() => showAddTrackEditor(this.state.selectedPlaylistId)}>Adicionar música</button>
                  {addTrackEditor()}
                  <p>Músicas: {this.state.tracks.map ( (track) => {
                      return (
                          <div>
                          <p>{track.artist} - {track.name}</p>
                          <audio controls>
                              <source src={track.url} type="audio/ogg"/>
                          Your browser does not support the audio element.
                          </audio>
                          </div>
                      )
                  })}</p>
              </div>
          )
      }
      } 

  const onChangeAddName = (e) => {
      this.setState({addTrackName:e.target.value})
  }

  const onChangeAddArtist = (e) => {
      this.setState({addTrackArtist:e.target.value})
  }

  const onChangeAddURL = (e) => {
      this.setState({addTrackURL:e.target.value})
  }

  const showAddTrackEditor = (itemId) => {
      this.setState({
          showAddTrackEditor:true,
          selectedPlaylistId: itemId,
      })
  }

  const addTrackEditor = () => {
      if (this.state.showAddTrackEditor) {
          return (
              <div>
                  <input placeholder="Nome da música" value={this.state.addTrackName} onChange={onChangeAddName}/>
                  <input placeholder="Nome do artista/banda" value ={this.state.addTrackArtist} onChange={onChangeAddArtist}/>
                  <input placeholder="URL" value={this.state.addTrackURL} onChange={onChangeAddURL}/>
                  <button onClick ={() => this.addTrackToPlaylist(this.state.selectedPlaylistId)}>Adicionar</button>
              </div>
          )
      }
  }

    return (
      <AppContainer>
        <Header>
          <Logo src={labefy}/>
        </Header>
        <FormCreatePlaylist></FormCreatePlaylist>

        <PlaylistsContainer>
    {(this.state.allPlaylists.length > 0)? <Title>Suas playlists:</Title>: <Title>Você ainda não adicionou nenhuma playlist :(</Title>}
                {this.state.allPlaylists.map ( (item) => {
                    return (
                        <SinglePlaylist onClick={() => this.getPlaylistTracks(item.id)}>
                            <PlaylistClosed>
                            <PlaylistName>{item.name}</PlaylistName>
                            <OpenDetailsButton onClick={() => this.getPlaylistTracks(item.id)}>Abrir playlist</OpenDetailsButton>                            
                            <DeleteContainer>
                            <DeleteLabel onClick={() => this.deletePlaylist(item.id)}>Deletar playlist</DeleteLabel>
                            <DeleteIcon src={deleteicon} onClick={() => this.deletePlaylist(item.id)}/>
                            </DeleteContainer>
                            </PlaylistClosed>
                        {item.id === this.state.selectedPlaylistId && playListDetails()}
                        </SinglePlaylist>
                    )
                })}

            </PlaylistsContainer>
      </AppContainer>
    );
  }
}

export default App;
