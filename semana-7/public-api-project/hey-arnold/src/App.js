import React from 'react';
import axios from 'axios'

import {AppContainer, Logo, Gif, Line} from './App-style'
import {CharacterContainer, CharacterName, CharacterImage} from './App-style'

import logo from './img/logo.png'
import line from './img/line.png'

import { thisExpression } from '@babel/types';

export default class App extends React.Component {

  state = {
    gifArray: [],
    allCharacters: [],
    selectedCharacter: [],
  }

  getAllCharacters = () => {
    axios
    .get("https://hey-arnold-api.herokuapp.com/api/v1/characters")
    .then ( (response) => {
      this.setState({allCharacters:response.data})
    })
    .catch ( (error) => {
      console.log("erro", error)
    })
  }

  getRandomGif = () => {
    axios
    .get("https://hey-arnold-api.herokuapp.com/api/v1/gifs/random?")
    .then( (response) => {
      this.setState({gifArray: response.data})
    })
    .catch( (error) => {
      console.log(error)
    })
  }

  getCharacterByName = (name) => {
    axios
    .get(`https://hey-arnold-api.herokuapp.com/api/v1/characters?name=${name}`)
    .then ( (response) => {
      console.log("selected", response.data)
      this.setState({selectedCharacter: response.data})
    })
    .catch( (error) => {
      console.log("erro", error)
    })
  }

  componentDidMount() {
    this.getAllCharacters()
    this.getRandomGif()
  }

  selectedCharacter = (event) => {
    const selectedCharacter = event.target.value
    console.log("aaaa", selectedCharacter)
    this.getCharacterByName(selectedCharacter)
  }

  render() {

    const randomGif = () => {
      return (
      <div>
      {this.state.gifArray.map( (item) => {
          return(
            <div>
              <Gif src={item.gifLink}/>
            </div>
          )
        })}
      </div>
      )}

      // const selector = () => {
      //   return (
      //     <div>
      //     <select name={"characters"} onChange={this.selectedCharacter}>
      //     <option value={""}></option>
      //     {this.state.allCharacters.map ( (character) => {
      //       return(
      //           <option key={character.id} value={character.name}>
      //             {character.name}
      //           </option>
      //       )
          
      //     })}
      //     </select>
      //     </div>
      //   )
      // }

      const characterBio = () => {
        return (
          <div>
            {this.state.selectedCharacter.map ( (item) => {
              return (
                <CharacterContainer>
                <CharacterName>{item.name}</CharacterName>
                <CharacterImage src={item.image}/>
                </CharacterContainer>
              )
            })}
          </div>
        )
      }
      

    return (
      <AppContainer>
        <Logo src={logo}/ >
        <Line src={line}/>
        <p>the content of this website is brought to you via the <a href="https://hey-arnold-api-documentation.netlify.app/" target="_blank">Hey Arnold API</a></p>
        {randomGif()}
        {/* {selector()} */}
        <div>
          <select name={"characters"} onChange={this.selectedCharacter}>
          <option default>select a character!</option>
          {this.state.allCharacters.map ( (character) => {
            return(
                <option key={character.id} value={character.name}>
                  {character.name}
                </option>
            )
          
          })}
          </select>
          </div>
        {characterBio()}

        

      </AppContainer>
    )
  }

}