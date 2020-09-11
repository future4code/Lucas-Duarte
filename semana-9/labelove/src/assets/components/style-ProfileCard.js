import styled from 'styled-components'
import {css, keyframes } from 'styled-components'

const SlideRightAnimation = keyframes`

  0% {
    -webkit-transform: translateZ(0) translateX(0);
            transform: translateZ(0) translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-1100px) translateX(1000px);
            transform: translateZ(-1100px) translateX(1000px);
    opacity: 0;
  }

`

const SlideLeftAnimation = keyframes`
  0% {
    -webkit-transform: translateZ(0) translateX(0);
            transform: translateZ(0) translateX(0);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-1100px) translateX(-1000px);
            transform: translateZ(-1100px) translateX(-1000px);
    opacity: 0;
  }

`

export const ProfileCardContainer = styled.div`
  display: flex;
  flex-direction: column; 
`

export const CardProfile = styled.div`
    width: 20em;

      animation: ${props => {
        if (props.slideRight) {
          return css `${SlideRightAnimation} 700ms ease-in-out 0s`
        } else if (props.slideLeft) {
          return css `${SlideLeftAnimation} 700ms ease-in-out 0s`
        }
      }};


`

export const BackgroundImage = styled.div`
  background-image: url(${props=> props.src});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 10px 10px 0 0;
  width: 100%;
  height: 20em;
  border: 1px solid #E2E4E3;
  border-bottom: none;
`

export const ProfileContainer = styled.div`
  border: 1px solid #E2E4E3;
  border-radius: 0 0 10px 10px;
  box-shadow: 0px 5px 0px 0px #F0F2F1;
`


// INFORMAÇÕES DO PERFIL: 

export const InfoContainer = styled.div`
  align-self: flex-end;
  margin-left: 1em;
  margin-right: 0.8em;
`

export const ProfileName = styled.h3`
  color: #404040;
  font-weight: 400;
`

export const Strong = styled.strong`
  font-weight: 700;
  font-size: 1em;
`

export const ProfileBio = styled.p`
  color: #8F8F8F;
  font-size: 0.8em;
  margin-top: -1em;
`

// BOTÕES

export const MatchContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    margin-top: 1.3em;
`

export const MatchButton = styled.img`
  height: 2em;
  border: 10px solid #F5F5F5;
  border-radius: 50px;
  padding: 30px;
  transition: transform 0.3s;

  &:hover {
    background-color: #F5F5F5;
    cursor: pointer;
  }
  &:active {
    transform: scale(0.95);
  }
`

