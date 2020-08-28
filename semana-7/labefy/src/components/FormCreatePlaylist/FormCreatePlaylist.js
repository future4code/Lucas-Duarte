import React from 'react';
import axios from 'axios';

import {FormContainer, CallToAction, ContainerInputButton, InputAddPlaylist, ButtonAddPlaylist} from './Formstyle'

const axiosConfig = {
    headers: {
      Authorization: "lucas-duarte-jackson"
    }
  };

class FormCreatePlaylist extends React.Component {

    state = {
        playlistName: "",
      }

      onEnter = (event) => {
        if(this.state.playlistName !== "" && event.key === "Enter") {
          this.createPlaylist()
        }
      }
    
    createPlaylist = () => {
    
        const body = {
          name: this.state.playlistName,
        }
    
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists", body, axiosConfig)
        .then ( (response) => {
          console.log(response)
          this.setState({playlistName:""})
        })
        .catch ( (error) => {
          console.log("Erro na createPlaylist", error)
        })
    }

    

render() {

    const onChangeInputPlaylist = (event) => {
        this.setState({playlistName:event.target.value})
      }

    return (
        <FormContainer>
          <CallToAction>Adicione uma playlist:</CallToAction>
          <ContainerInputButton>
            <InputAddPlaylist placeholder="Nome da playlist" value={this.state.playlistName} onChange ={onChangeInputPlaylist}
            onKeyDown={this.onEnter}/>
            <ButtonAddPlaylist onClick={this.createPlaylist}>CRIAR</ButtonAddPlaylist>
          </ContainerInputButton>
        </FormContainer>
    )
}
}

export default FormCreatePlaylist