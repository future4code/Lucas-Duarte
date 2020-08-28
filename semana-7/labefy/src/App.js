import React from 'react';
import axios from 'axios';

// style
import {AppContainer, Header, Logo, PlaylistsContainer} from './App-style'
import {PlaylistsList, Title, PlaylistName, OpenIcon, PlaylistTitle} from './App-style'

//style of playlist
import {SinglePlaylist, PlaylistClosed, OpenDetailsButton} from './App-style'
import {DeleteContainer, DeleteIcon, DeleteLabel} from './App-style'
// style of playlist details
import {DetailsContainer} from './App-style'
import {EmptyPlaylistContainer, AddTrackLabel, Player, TrackContainer, TrackIcon} from './App-style'

//style do form de adicionar música:
import {AddTrackEditor, EditorTitle, InputAndLabel, LabelAddTrack, InputAddTrack, FormFirstRow, AddButton, Tip} from './App-style'

//style do footer
import {Footer, Credit, LabenuLogo} from './App-style'

// componentes
import FormCreatePlaylist from './components/FormCreatePlaylist/FormCreatePlaylist'

// images
import labefy from './components/img/labefy.png'
import deleteicon from './components/img/trash.svg'
import arrowdown from './components/img/arrow-down.svg'
import songicon from './components/img/track-icon.svg'
import labenu from './components/img/labenu.png'

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
    addTrackURL: "http://spoti4.future4.com.br/1.mp3",
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
          // showAddTrackEditor: false,
          selectedPlaylistId: playlistId,
          numberOfTracks: response.data.result.quantity,
          tracks: response.data.result.tracks,
      })
  })
  .catch ( (error) => {
      console.log("Erro no getPlaylistTracks", error)
  })
}

onEnterAddTrack = (event) => {
  if(this.state.addTrackArtist !== "" && this.state.addTrackName !== "" && this.state.addTrackURL !== "" && event.key === "Enter") {
    this.addTrackToPlaylist(this.state.selectedPlaylistId)
  }
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
        addTrackName: "",
        addTrackArtist: "",
        addTrackURL: "http://spoti4.future4.com.br/1.mp3",    
      })
      this.getPlaylistTracks()
  })
  .catch ( (error) => {
      alert("Algo deu errado. Tente novamente.")
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
          alert("Algo deu errado. Tente novamente.")
      })
  }

}


  render() {

    const playListDetails = () => {
      if (this.state.showPlaylistDetails)  {
          return (
              <DetailsContainer>
                {(this.state.numberOfTracks === 0)? <EmptyPlaylistContainer><p>Esta playlist está vazia.<AddTrackLabel onClick = {() => showAddTrackEditor(this.state.selectedPlaylistId)}>Adicione músicas!</AddTrackLabel></p>                {addTrackEditor()}</EmptyPlaylistContainer>:
                <div>
                 {(this.state.numberOfTracks === 1)? <p>Esta playlist tem apenas {this.state.numberOfTracks} música.</p>:                   <p>Esta playlist tem <strong>{this.state.numberOfTracks}</strong> músicas.</p>}
                <p>{this.state.tracks.map ( (track) => {
                  return (
                      <div>
                      <TrackContainer>
                      <TrackIcon src={songicon}/>
                      <p><strong>{track.artist}</strong> - {track.name}</p>
                      </TrackContainer>
                      <Player controls>
                          <source src={track.url} type="audio/ogg"/>
                      Your browser does not support the audio element.
                      </Player>
                      </div>
                  )
              })} </p>
              <AddTrackLabel onClick = {() => showAddTrackEditor(this.state.selectedPlaylistId)}>Adicione + músicas</AddTrackLabel>
                  {addTrackEditor()}
                </div>
              }
                  
                  
              </DetailsContainer>
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
          showAddTrackEditor:!this.state.showAddTrackEditor,
          selectedPlaylistId: itemId,
      })
  }

  const addTrackEditor = () => {
      if (this.state.showAddTrackEditor) {
          return (
              <AddTrackEditor>
                  <EditorTitle>Adicione uma música:</EditorTitle>
                  <InputAndLabel>
                  <LabelAddTrack>Nome da música</LabelAddTrack>
                  <InputAddTrack placeholder="Nome da música" value={this.state.addTrackName} onChange={onChangeAddName}/>
                  </InputAndLabel>
                  <InputAndLabel>
                  <LabelAddTrack>Artista/Banda</LabelAddTrack>
                  <InputAddTrack placeholder="Nome do artista/banda" value ={this.state.addTrackArtist} onChange={onChangeAddArtist}/>
                  </InputAndLabel>
                  <InputAndLabel type={"url"}>
                  <LabelAddTrack>URL da música</LabelAddTrack>
                  <InputAddTrack placeholder="URL" value={this.state.addTrackURL} onChange={onChangeAddURL} onKeyDown={this.onEnterAddTrack}/>
                  <Tip>Escolha entre 100 músicas selecionadas, alterando o número nessa URL: <br/><strong><em>http://spoti4.future4.com.br/1.mp3</em></strong></Tip>
                  </InputAndLabel>
                  <AddButton onClick ={() => this.addTrackToPlaylist(this.state.selectedPlaylistId)}>Adicionar</AddButton>
              </AddTrackEditor>
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
                            <PlaylistTitle>
                            <OpenIcon src={arrowdown}/>
                            <PlaylistName>{item.name}</PlaylistName>
                            </PlaylistTitle>
                            {/* <OpenDetailsButton onClick={() => this.getPlaylistTracks(item.id)}>Abrir playlist</OpenDetailsButton>                             */}
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
          <Footer>
          <Credit>Labefy foi criado por <strong>@dolucasduarte</strong> a partir de uma API da Labenu!</Credit>
          <LabenuLogo src={labenu}/>
          </Footer>
      </AppContainer>
    );
  }
}

export default App;
