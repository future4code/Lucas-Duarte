import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components'


const CardProfile = styled.div`
  width: 50%;
`

const ProfilePic = styled.img`
  width: 50%;
`

function App() {

  const [profile, setProfile] = useState('')

  useEffect(() => {
    getProfileToChoose()
  }, [])

  const getProfileToChoose = async () => {

    try {
      const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucass/person")
      console.log(response.data.profile)
      setProfile(response.data.profile)
    }
    catch (error) {
      console.log("Erro getProfile:", error.response)
    }

  }


  const choosePerson = async () => {

    const body = {
      id: profile.id,
	    choice: true
    }

    try {
      const response = await axios.post("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucass/choose-person", body)
    }

    catch (error) {
      console.log("Erro:", error.response)
    }

    getProfileToChoose()
  }

  const getMatches = async () => {

    try {
        const response = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucass/matches")
        
        console.log("Matches:", response.data)
    }
    catch (error) {
        console.log("Erro:", error)
    }
}

  const clearAll = async () => {

    try {
      const response = await axios.put("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/lucass/clear")

      console.log("Limpou!", response)
    }
    catch (error){
      console.log("Erro na limpeza:", error)
    }
  }
 



  return (
    <div>
        <button onClick={getMatches}> Ver matches</button>
      <CardProfile>
       <ProfilePic src={profile.photo}/> 
       <p>{profile.name}</p>
       <p>Idade: {profile.age}</p> 
       <p>Bio: {profile.bio}</p> 
      </CardProfile>
      <button onClick={getProfileToChoose}>Não curti</button>
      <button onClick={choosePerson}>Dar like</button>
      <br/>
      <button onClick={clearAll}> Limpar swipes e matches</button>

    </div>
  );
}

export default App;