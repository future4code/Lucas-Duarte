import React from 'react'
import styled from 'styled-components'

// routes:
import { useHistory } from "react-router-dom";
import {goToApplyToTripPage} from '../router/goToPages'

// hooks:
import useRequestData from '../hooks/useRequestData';

const HomePageContainer = styled.div`
    display: flex;
`

const TripCard = styled.div`
    border: 1px solid black;
    margin: 1em;
`

const HomePage = () => {

    const history = useHistory()

    const getTripsUrl = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/lucasduarte/trips"

    const [tripsObject, setTripsObject] = useRequestData(getTripsUrl, {})
    const trips = tripsObject.trips


    if (!trips) {
        return (
            <div>
                    carregando..
            </div>
        )
    }

    return (
        <HomePageContainer>
            {trips.map( (trip) => {
                return (
                    <TripCard>
                        <p>{trip.planet}</p>
                        <h3>{trip.name}</h3>
                        <p>{trip.date} ({trip.durationInDays} dias)</p>
                        <p>{trip.description}</p>
                        <button 
                        onClick={() => goToApplyToTripPage(history)}>
                            Inscreva-se
                        </button>
                    </TripCard>
                )
            })}
        </HomePageContainer>
    )
}

export default HomePage;