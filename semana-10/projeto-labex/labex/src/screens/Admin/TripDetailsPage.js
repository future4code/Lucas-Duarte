import React, {useEffect} from 'react'
import axios from 'axios'
import Header from '../../components/Header'

//routes
import { useHistory, useParams } from "react-router-dom";
import {goBack, goToLoginPage} from '../../router/goToPages'

// hook:
import useRequestData from '../../hooks/useRequestData';

// api:
import {baseUrl, student} from '../../requisitions/apiRequisitions.js'

// images:
import profile from '../../img/profile.svg'
import decideTrue from '../../img/decideTrue.svg'
import decideFalse from '../../img/decideFalse.svg'
import loading from '../../img/loading.gif'

// styles:
import {Subtitle, TripInfoTitle, TripInfo, BackLink, Loading} from '../../styles/MainStyles'
import { CarouselTitle, CarouselDetails } from '../../styles/Carousel'

import {AdminPageContainer, AdminPanelContainer} from './styled'
import {CandidatesGrid, CandidateContainer, ProfileImg, DecideContainer, DecideButton, DecideImg, DecideLabel} from './styled'


const TripDetailsPage = () => {

    // - - - - ROUTE - - - -

    const history = useHistory()
    const pathParams = useParams()

    // - - - - API - - - -

    const getTripDetailUrl = `${baseUrl}${student}/trip/${pathParams.id}`
    const auth = localStorage.getItem("token")

    // - - - - ESTADOS & CANDIDATOS - - - -
    
    const [tripsDetails, setTripsDetails] = useRequestData(getTripDetailUrl, {}, auth)

    const trip = tripsDetails.trip
    const candidates = tripsDetails.trip && tripsDetails.trip.candidates

    useEffect( () => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLoginPage(history)
        }

    }, [history] )


    const decideCandidate = (candidateId, boolean) => {

        const decideCandidateUrl = `${baseUrl}${student}/trips/${pathParams.id}/candidates/${candidateId}/decide`

        const decideCandidateBody = {
            approve: boolean,
        }

        axios
        .put(decideCandidateUrl, decideCandidateBody, {
            headers: {
                auth: window.localStorage.getItem("token")
            }
        })
        .then( (response) => {
            if (boolean) {
                alert("Candidato aprovado com sucesso!")
            } else {
                alert("Candidato recusado")
            }
            window.location.reload(true);
        })
        .catch( (error) => {
            alert("Erro a carregar candidatos. Recarregue a página!")
        })
    }

    if (!candidates) {
        return (
            <AdminPageContainer page="tripdetails">
                <Loading src={loading} />
            </AdminPageContainer>
        )
    }

    return (
        <AdminPageContainer page="tripdetails">
            <Header/>

            <AdminPanelContainer>
            <BackLink onClick={()=> goBack(history)}>← Voltar</BackLink>
       
            <Subtitle>Detalhes da viagem: <strong>{trip.name}</strong></Subtitle>

            {(candidates.length>0)? 
            <p>Número de candidatos: {candidates.length}</p>:
            <p>Essa viagem ainda não possui nenhum candidato.</p>
            }
        
            <CandidatesGrid>
            {candidates && candidates.map ( (candidate) => {
                return (
                    <CandidateContainer>
                       <ProfileImg src={profile}/>
             <CarouselTitle>{candidate.name}</CarouselTitle>
                <span>
                    <TripInfoTitle>Idade: </TripInfoTitle>
                    <TripInfo>{candidate.age}</TripInfo>
                </span>
                <span>
                    <TripInfoTitle>Profissão: </TripInfoTitle>
                    <TripInfo>{candidate.profession}</TripInfo>
                </span>
                <span>
                    <TripInfoTitle>País: </TripInfoTitle>
                    <TripInfo>{candidate.country}</TripInfo>
                </span>
            <CarouselDetails type="candidate">{candidate.applicationText}</CarouselDetails>
            <DecideContainer>
                <DecideButton onClick={() => decideCandidate(candidate.id, true)}>
                <DecideImg src={decideTrue}/>
                <DecideLabel>Aprovar</DecideLabel>
                </DecideButton>
                <DecideButton onClick={() => decideCandidate(candidate.id, false)}>
                <DecideImg src={decideFalse}/>
                <DecideLabel >Recusar</DecideLabel>
                </DecideButton>
            </DecideContainer>

                    </CandidateContainer>
                )
            })}
            </CandidatesGrid>

            </AdminPanelContainer>

        </AdminPageContainer>
    )
}

export default TripDetailsPage