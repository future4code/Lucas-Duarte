import React, { useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'

import { useHistory } from "react-router-dom";
import {goToLoginPage, goBack} from '../../router/goToPages'

//hooks
import useForm from '../../hooks/useForm'

// api:
import {baseUrl, student} from '../../requisitions/apiRequisitions.js'

// styles:
import {Title, Button, BackLink} from '../../styles/MainStyles'
import {FormContainer, InputContainer, Input, Label, Select, TextArea} from '../../styles/Forms'
import {AdminPageContainer, AdminPanelContainer} from './styled'


const CreateTripPage = () => {

    const history = useHistory()

    useEffect( () => {
        const token = window.localStorage.getItem("token")

        if (!token) {
            goToLoginPage(history)
        }
    }, [history] )

    // Controlando o form:

    const {form, onChange, resetState} = useForm({
        tripName: "",
        planet: 18,
        date: "",
        description: "",
        durationInDays: "",
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
      };

    const submitForm = (event) => {
        event.preventDefault()
        createTrip()
    }


    const createTrip = () => {

        const createTripUrl = `${baseUrl}${student}/trips`
        const token = localStorage.getItem("token")

        const createTripBody = {
            name: form.tripName,
            planet: form.planet,
            date: form.date,
            description: form.description,
            durationInDays: form.durationInDays,
        }

        axios
        .post(`${createTripUrl}`, createTripBody, {
            headers: {
                auth: token
            }
        }) 
        .then ( (response) => {
            alert("Viagem criada com sucesso!")
            resetState()
        })
        .catch ( (error) => {
            alert("Por favor, preencha todos os campos e tente de novo!")
        })

    
    }


    return (
        <AdminPageContainer>
            <Header></Header>


            <AdminPanelContainer>
                <BackLink onClick={() => goBack(history)}>←Voltar</BackLink>
                <Title>Cadastre uma nova viagem:</Title>
                <FormContainer onSubmit={submitForm} form="create-trip">

            <InputContainer>
                <Label for="tripName">Nome da viagem</Label>
                <Input 
                name="tripName"
                value={form.tripName}
                onChange={handleInputChange}
                type={"text"}
                placeholder={"Nome da viagem"}
                id="tripName"
                required/>
            </InputContainer>

            <InputContainer for="description">
            <Label>Descrição da viagem</Label>
                <TextArea 
                name="description"
                value={form.description}
                onChange={handleInputChange}
                type={"text"}
                placeholder={"Descrição da viagem"}
                id="description"
                minlength={10}
                required/>
            </InputContainer>

            <InputContainer>
                <Label for="planet">Planeta</Label>
                <Select 
                name="planet"
                value={form.planet}
                onChange={handleInputChange}
                placeholder={"Planeta de destino"}
                id="planet"
                required
                >
                <option value="">Selecione um planeta</option>
                <option value="Lua">Lua</option>
                <option value="Mercúrio">Mercúrio</option>
                <option value="Vênus">Vênus</option>
                <option value="Marte">Marte</option>
                <option value="Júpiter">Júpiter</option>
                <option value="Saturno">Saturno</option>
                <option value="Urano">Urano</option>
                <option value="Netuno">Netuno</option>
                </Select>
            </InputContainer>

            <InputContainer>
                <Label for="date">Data</Label>
                <Input 
                name="date"
                value={form.date}
                onChange={handleInputChange}
                type={"date"}
                placeholder={"Data da viagem (dd/mm/aaaa)"}
                id="date"
                required/>
            </InputContainer>

            <InputContainer>
                <Label for="durationInDays">Duração em dias</Label>
                <Input 
                name="durationInDays"
                value={form.durationInDays}
                onChange={handleInputChange}
                type={"number"} 
                placeholder={"Duração da viagem (em dias)"}
                min={3}
                id="durationInDays"
                title="O destino mais próximo da Terra fica a três dias de viagem!"
                required/>
            </InputContainer>

            <Button>Enviar</Button>
            </FormContainer>
            </AdminPanelContainer>

        </AdminPageContainer>
    )
}

export default CreateTripPage