import React from 'react';
import axios from 'axios';

import {PlaylistsContainer} from './ListOfPlaylists-style'

const axiosConfig = {
    headers: {
      Authorization: "lucas-duarte-jackson"
    }
  };

class ListOfPlaylists extends React.Component {

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

    // getAllPlaylists = () => {
        
    //     axios
    //     .get("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", axiosConfig)
    //     .then ((response) => {
    //         this.setState({allPlaylists:response.data.result.list})
    //     })
    //     .catch ((error) => {
    //         console.log("Erro no getAllPlaylists", error)
    //     })
    // }

    // componentDidMount = () => {
    //     this.getAllPlaylists()
    // }

    // getPlaylistTracks = (playlistId) => {

    //     axios
    //     .get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, axiosConfig)
    //     .then ( (response) => {
    //         console.log(response.data.result.quantity)
    //         console.log(response.data.result.tracks)
    //         this.setState({
    //             showPlaylistDetails:true,
    //             numberOfTracks: response.data.result.quantity,
    //             tracks: response.data.result.tracks,
    //         })
    //     })
    //     .catch ( (error) => {
    //         console.log("Erro no getPlaylistTracks", error)
    //     })
    // }

    // addTrackToPlaylist = (playlistId) => {

    //     const body = {
    //         name: this.state.addTrackName,
    //         artist: this.state.addTrackArtist ,
    //         url: this.state.addTrackURL, 
    //     }

    //     axios
    //     .post(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}/tracks`, body, axiosConfig)
    //     .then ( (response) => {
    //         this.getPlaylistTracks()
    //     })
    //     .catch ( (error) => {
    //         console.log("erro na addTracktoPlaylist", error)
    //     })
    // }

    // deletePlaylist = (playlistId) => {

    //     axios
    //     .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`, axiosConfig)
    //     .then( (response) => {
    //         this.getAllPlaylists()
    //     })
    //     .catch ( (error) => {
    //         console.log(error)
    //     })
    // }


    render() {

    // const playListDetails = () => {
    //     if (this.state.showPlaylistDetails)  {
    //         return (
    //             <div>
    //                 <p>Detalhes:</p>
    //                 <p>Número de faixas: {this.state.numberOfTracks}</p>
    //                 <p>Músicas: {this.state.tracks.map ( (track) => {
    //                     return (
    //                         <div>
    //                         <p>{track.artist} - {track.name}</p>
    //                         <audio controls>
    //                             <source src={track.url} type="audio/ogg"/>
    //                         Your browser does not support the audio element.
    //                         </audio>
    //                         </div>
    //                     )
    //                 })}</p>
    //             </div>
    //         )
    //     }
    //     } 

    // const onChangeAddName = (e) => {
    //     this.setState({addTrackName:e.target.value})
    // }

    // const onChangeAddArtist = (e) => {
    //     this.setState({addTrackArtist:e.target.value})
    // }

    // const onChangeAddURL = (e) => {
    //     this.setState({addTrackURL:e.target.value})
    // }

    // const showAddTrackEditor = (itemId) => {
    //     this.setState({
    //         showAddTrackEditor:true,
    //         selectedPlaylistId: itemId,
    //     })
    // }

    // const addTrackEditor = () => {
    //     if (this.state.showAddTrackEditor) {
    //         return (
    //             <div>
    //                 <input placeholder="Nome da música" value={this.state.addTrackName} onChange={onChangeAddName}/>
    //                 <input placeholder="Nome do artista/banda" value ={this.state.addTrackArtist} onChange={onChangeAddArtist}/>
    //                 <input placeholder="URL" value={this.state.addTrackURL} onChange={onChangeAddURL}/>
    //                 <button onClick ={() => this.addTrackToPlaylist(this.state.selectedPlaylistId)}>Adicionar</button>
    //             </div>
    //         )
    //     }
    // }

        return (
            <PlaylistsContainer>
                <div>
                <h3>Suas playlists:</h3>

                {this.state.allPlaylists.map ( (item) => {
                    return (
                        <div>
                            <p>{item.name}</p>
                            <button onClick={() => this.getPlaylistTracks(item.id)}>Detalhes da playlist</button>
                            <button onClick = {() => showAddTrackEditor(item.id)}>Adicionar música</button>
                            <button onClick={() => this.deletePlaylist(item.id)}>Apagar playlist</button>
                        </div>
                    )
                })}
                </div>

                {playListDetails()}
                {addTrackEditor()}
            </PlaylistsContainer>
        )
    }

}

export default ListOfPlaylists