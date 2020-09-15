import React from 'react'
import styled from 'styled-components'

// routes:
import { useHistory } from "react-router-dom";
import {goToApplyToTripPage} from '../router/goToPages'

// hooks:
import useRequestData from '../hooks/useRequestData';

const HomePageContainer = styled.div`
    display: flex;
    min-height: 85vh;
    
    /* background-image: url("https://blenderartists.org/uploads/default/original/4X/7/e/2/7e2d7bea4ac21388c4a96e1371f375c4ce00094b.jpg");
    background-position: center;
    background-size:cover; */

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
            <HomePageContainer>
                    carregando..
            </HomePageContainer>
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