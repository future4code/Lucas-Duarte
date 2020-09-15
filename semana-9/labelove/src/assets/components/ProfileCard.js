import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Lottie from 'react-lottie'

//style
import {ProfileCardContainer, CardProfile, ProfilePic, ProfileContainer, MatchContainer, MatchButton} from './style-ProfileCard'
import {BackgroundImage, InfoContainer, ProfileName, Strong, ProfileBio} from './style-ProfileCard'

import {MatchesIcon, LoadingContainer, LoadingText, LoadingGif} from '../../App-style'

// imagens
import matchesicon from '../img/matchesicon.svg'
import likeButton from '../img/like.svg'
import dislikeButton from '../img/dislike.svg'
import loadingIcon from '../img/heartbeating.gif'


function ProfileCard(props) {


    const [currentProfile, setCurrentProfile] = useState(null)

    const [slideRight, setSlideRight] = useState(false)
    const [slideLeft, setSlideLeft] = useState(false)
    
    const getProfileToChoose = async () => {
    
      try {
          const response = await axios
          .get(`${props.baseUrl}${props.id}/person`)
          setCurrentProfile(response.data.profile)
        }
        catch (error) {
          console.log("Erro getProfile:", error.response)
        }

      setSlideRight(false)
      setSlideLeft(false)
    
    }

      useEffect(() => {
        getProfileToChoose()
      }, [])

      const choosePerson = async (boolean) => {

        const body = {
          id: currentProfile.id,
          choice: boolean
        }
    
        try {
          const response = await axios.post(`${props.baseUrl}${props.id}/choose-person`, body)
        }
    
        catch (error) {
          console.log("Erro:", error.response)
        }
    
        if (body.choice) {
          setSlideRight(true)
        } else {
          setSlideLeft(true)
        }


        getProfileToChoose()
      }




      if (!currentProfile) {
        return (
          <LoadingContainer>
            <LoadingGif src={loadingIcon}/>
            <LoadingText>carregando perfis...</LoadingText>
          </LoadingContainer>
        )
      }

      return (
        <ProfileCardContainer>
          <MatchesIcon src={matchesicon} onClick={props.goToMatches} alt={"Ver meus matches"}/>

          <CardProfile
            slideRight={slideRight}
            slideLeft={slideLeft}
          >
            <BackgroundImage src= {currentProfile.photo}></BackgroundImage>
            <ProfileContainer>
                <InfoContainer>
                  <ProfileName>
                    <Strong>
                    {currentProfile.name}
                    </Strong>
                    , {currentProfile.age}
                  </ProfileName>
                  <ProfileBio>{currentProfile.bio}</ProfileBio> 
                </InfoContainer>
            </ProfileContainer>
          </CardProfile>

        <MatchContainer>
            <MatchButton onClick={() => choosePerson(false)} src={dislikeButton} />
            <MatchButton onClick={() => choosePerson(true)} src={likeButton}/ >
        </MatchContainer>
        </ProfileCardContainer>
      )



}

export default ProfileCard