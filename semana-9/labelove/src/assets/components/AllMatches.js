import React, { useState, useEffect } from 'react';
import axios from 'axios';

//animation
import Lottie from 'react-lottie'
import animatedCircleSpark from '../img/circle-spark.json'

//style
import {AllMatchesContainer, MatchesTitle, NoMatchesContainer, NoMatchesAnimation, MatchesGrid, MatchIcon, AvatarIcon, MatchName, CircleSpark} from './style-AllMatches'

import {MatchesIcon, LoadingText, LoadingContainer, LoadingGif} from '../../App-style'

//imagens
import returnIcon from '../img/return.svg'
import cryingHeart from '../img/crying-heart.gif'
import loadingIcon from '../img/heartbeating.gif'


function AllMatches(props) {

// Hook e função que retorna todos os matches:
    const [matches, setMatches] = useState(null)

    useEffect( () => {
        getMatches()
    }, [])


  const getMatches = async () => {

    try {
        const response = await axios.get(`${props.baseUrl}${props.id}/matches`)
        console.log("matches:", response.data.matches)
        setMatches(response.data.matches)
    }
    catch (error) {
        console.log("Erro:", error)
    }
    }   

    // Hook + função do Lottie para animar:
    // const [animationState, setAnimationState] = useState({isStopped: false, isPaused:false})

    const [sparkState, setSparkState] = useState({
        isStopped: false, isPaused: false
    })

      const animateSpark = {
        loop: false,
        autoplay: true, 
        animationData: animatedCircleSpark,
        rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
        }
      }

    if (!matches) {
        return (
            <LoadingContainer>
            <LoadingGif src={loadingIcon}/>
            <LoadingText>carregando matches ...</LoadingText>
            </LoadingContainer>
        )
    }

    return(
        <div>
            <MatchesIcon 
            src={returnIcon} 
            onClick={props.goToApp}/>
        
        <AllMatchesContainer>

            {matches.length === 0 &&
            <NoMatchesContainer>
                <MatchesTitle>
                    Você ainda não tem nenhum match.
                </MatchesTitle>
                <NoMatchesAnimation src={cryingHeart}/>
            </NoMatchesContainer>
            }

            {matches.length > 0 &&
            <MatchesTitle>
                Novos matches!
            </MatchesTitle>
            }
            <MatchesGrid>
            {matches.map( (match) => {
                return (
                <MatchIcon>
                    
                <AvatarIcon key={match.name} src={match.photo}>
                <CircleSpark>
                        <Lottie 
                        options={animateSpark}
                        height={100}
                        width={100}
                        isStopped={sparkState.isStopped}
                        isPaused={sparkState.isPaused}
                        />
                    </CircleSpark>
                </AvatarIcon>
                <MatchName key={match.name}>
                    {match.name}
                </MatchName>
                </MatchIcon>
                )
            })}
            </MatchesGrid>
        </AllMatchesContainer>
        </div>
    )

}

export default AllMatches;