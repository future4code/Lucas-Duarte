import React, { useEffect }  from 'react'
import Header from '../../components/Header'

import { useHistory } from "react-router-dom";
import {goToLoginPage, goToCreateTripPage, goToTripDetailsPage} from '../../router/goToPages'

// API
import useRequestData from '../../hooks/useRequestData';
import {baseUrl, student} from '../../requisitions/apiRequisitions.js'

//images:
import {loading} from '../../img/loading.gif'

// styles:
import {Title, Subtitle, Button, Loading} from '../../styles/MainStyles'
import {AdminPageContainer, AdminPanelContainer, BigSelect} from './styled'


const AdminPage = () => {

    const history = useHistory()

    useEffect( () => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLoginPage(history)
        }
    }, [history] )

    const getTripsUrl = `${baseUrl}${student}/trips`
    const [tripsObject, setTripsObject] = useRequestData(getTripsUrl, {})
    const trips = tripsObject.trips

    const selectTrip = (event) => {
        const id = event.target.value
        goToTripDetailsPage(history, id)
    }


    if (!trips) {
        return (
            <AdminPageContainer>
                   <Loading src={loading}/>
            </AdminPageContainer>
        )
    }

    return (
        <AdminPageContainer page={"admin"}>
            <Header></Header>
            <AdminPanelContainer>
            <Title>Bem-vindo ao Painel de controle!</Title>
            <Subtitle>Cadastre uma nova viagem:</Subtitle>
            <Button onClick={() => goToCreateTripPage(history)}>Criar nova viagem</Button>
            <Subtitle>Ou confira os candidatos das viagens cadastradas:</Subtitle>
        
        <BigSelect onChange={selectTrip}>
            <option value="">Selecione uma viagem</option>
        {trips.map ( (trip) => {
            return (
                <option value={trip.id}>
                {trip.name} (em {trip.date})
                </option>
            )
        })}
        </BigSelect>
        <br/>
            
            </AdminPanelContainer>
        </AdminPageContainer>
    )
}

export default AdminPage;