import React from 'react'
import {useState } from 'react';
import Header from '../../components/Header'

// routes:
import { useHistory } from "react-router-dom";
import {goToApplyToTripPage} from '../../router/goToPages'

// api:
import {baseUrl, student} from '../../requisitions/apiRequisitions.js'

// hooks:
import useRequestData from '../../hooks/useRequestData';

// images:
import arrowNext from '../../img/arrow-icon-next.svg'
import arrowBack from '../../img/arrow-icon-back.svg'
import loading from '../../img/loading.gif'

// styles:
import {Title, Subtitle, Button, Loading, TripInfoTitle, TripInfo} from '../../styles/MainStyles'
import { CarouselCard, CarouselTitle, CarouselRow, CarouselDetails, ArrowButton, InvisibleArrow } from '../../styles/Carousel'
import {HomePageContainer, TitleContainer, TripSession} from './styled'


const HomePage = () => {

    const history = useHistory()

    const getTripsUrl = `${baseUrl}${student}/trips`

    const [tripsObject, setTripsObject] = useRequestData(getTripsUrl, {})
    const [index, setIndex] = useState(0)

    const trips = tripsObject.trips

    const getNextTrip = () => {
        setIndex(index + 1)
    }
        
    const getLastTrip = () => {
        setIndex(index - 1)
    }

    const currentTrip = tripsObject.trips && trips[index]

    const selectTrip = () => {

        localStorage.setItem("selectedTripId", currentTrip.id)
        localStorage.setItem("selectedTripName",currentTrip.name)
 
        goToApplyToTripPage(history, currentTrip.id)
    }

    if (!trips) {
        return (
            <HomePageContainer>
                    <Loading src={loading} />
            </HomePageContainer>
        )
    }
    
    return (
        <HomePageContainer>
            <Header/>
            <TitleContainer>
                <Title>EXPLORE A GALÁXIA</Title>
                <Subtitle>Escolha sua viagem interplanetária:</Subtitle>
            </TitleContainer>

            <TripSession>

            {index > 0 ? <ArrowButton src={arrowBack} onClick={getLastTrip} type={"back"}/>: <InvisibleArrow type={"back"}/>}

            <CarouselCard>
            <CarouselTitle>{currentTrip.name}</CarouselTitle>
                <CarouselRow>
                    <TripInfoTitle>Planeta de destino: </TripInfoTitle>
                    <TripInfo> {currentTrip.planet}</TripInfo>
                </CarouselRow>
                <CarouselRow>
                    <TripInfoTitle>Data de decolagem: </TripInfoTitle>
                    <TripInfo> {currentTrip.date}</TripInfo>
                </CarouselRow>
                <CarouselRow>
                    <TripInfoTitle>Duração: </TripInfoTitle>
                    <TripInfo> {currentTrip.durationInDays} dias</TripInfo>
                </CarouselRow>
            <CarouselDetails>{currentTrip.description}</CarouselDetails>
            <Button 
                onClick={selectTrip}>
                Inscreva-se
            </Button>
            </CarouselCard>

            {index === trips.length-1 ? <InvisibleArrow type={"next"}/>: <ArrowButton src={arrowNext} onClick={getNextTrip} type={"next"}/>}

            </TripSession>
        </HomePageContainer>
    )
}

export default HomePage;