import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../../components/Header'

//routes
import { useHistory } from "react-router-dom";
import {goBack, goToHomePage} from '../../router/goToPages'

//hooks
import useForm from '../../hooks/useForm'

// api:
import {baseUrl, student} from '../../requisitions/apiRequisitions.js'

// styles:
import { Title, Button, TripInfoTitle, TripInfo, BackLink } from '../../styles/MainStyles'

import { FormContainer, InputContainer, Label, Input, Select, TextArea } from '../../styles/Forms'

import { ApplyToTripContainer, TitleContainer, SelectedTripContainer } from './styled'


const ApplyToTripPage = () => {

    const history= useHistory()

    useEffect( () => {
        const selectedTripId = window.localStorage.getItem("selectedTripId")
        getAllCountries()

        if (!selectedTripId) {
            goToHomePage(history)
        }
    }, [history] )

    const [countries, setCountries] = useState([])

    const tripName = localStorage.getItem("selectedTripName");

    // Controlando o form e fazendo ele funcionar:

    const {form, onChange, resetState} = useForm({
        name: "",
        age: 18,
        profession: "",
        country: "",
        applicationText: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
      };

    
    const submitForm = (event) => {
        event.preventDefault()
        applyToTrip()
    }

    const applyToTrip = () => {

        const tripId = localStorage.getItem("selectedTripId");
        const applyToTripUrl = `${baseUrl}${student}/trips/${tripId}/apply`
    
        const applyToTripBody = {
            name: form.name,
            age: form.age,
            applicationText: form.applicationText,
            profession: form.profession,
            country: form.country
        }

        axios
        .post(applyToTripUrl, applyToTripBody)
        .then ( (response) => {
            alert("Cadastro realizado com sucesso!")
            resetState()

        })
        .catch( (error) => {
            alert("Por favor, preencha todos os campos!")
        })
    }

    const getAllCountries = () => {

        axios
        .get('https://restcountries.eu/rest/v2/all')
        .then ( (response) => {
            setCountries(response.data)
        })
        .catch( (error) => {
            alert("Não foi possível carregar todos países")
        })
    }
    

    return (
        <ApplyToTripContainer>
            <Header/>
            <TitleContainer>
                <BackLink onClick={() => goBack (history) }>← Voltar</BackLink>
                <Title>Faça sua inscrição:</Title>
            </TitleContainer>

            <SelectedTripContainer>
                <TripInfoTitle>Viagem selecionada:</TripInfoTitle>
                <TripInfo><strong>{tripName}</strong></TripInfo>
            </SelectedTripContainer>
            
            <FormContainer 
            onSubmit={submitForm}
            form={"apply"}
            >
                <InputContainer>
                    <Label for="name">Nome completo</Label>
                    <Input 
                    name="name"
                    value={form.name}
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder={"Nome completo"}
                    id="name"
                    required/>
                </InputContainer>

                <InputContainer>
                    <Label for="age">Idade</Label>
                    <Input 
                    name="age"
                    value={form.age}
                    onChange={handleInputChange}
                    type={"number"} 
                    min={18}
                    placeholder={"Idade"}
                    id="age"
                    required/>
                </InputContainer>

                <InputContainer>
                    <Label for="profession">Profissão</Label>
                    <Input 
                    name="profession"
                    value={form.profession}
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder={"Profissão"}
                    id="profession"
                    required/>
                </InputContainer>

                <InputContainer>
                <Label for="country">País de origem</Label>
                    <Select 
                    name="country"
                    value={form.country}
                    onChange={handleInputChange}
                    type={"text"}
                    placeholder={"País de origem"}
                    id="country"
                    required>
                    <option value="">Selecione um país</option>

                    {countries.map( (country) => {
                        return (
                        <option value={country.name}>{country.name}</option>
                        )
                    })}

                    </Select>
                </InputContainer>

                <InputContainer>
                <Label for="applicationText">Por que você quer viajar com a LabeX?</Label>
                <TextArea 
                name="applicationText"
                value={form.applicationText}
                onChange={handleInputChange}
                type={"text"}
                placeholder={"Explique sua motivação!"}
                id="applicationText"
                minlength={30}
                required
                />
                </InputContainer>

                <Button>Enviar</Button>
            </FormContainer>
            
        </ApplyToTripContainer>
    )
}

export default ApplyToTripPage