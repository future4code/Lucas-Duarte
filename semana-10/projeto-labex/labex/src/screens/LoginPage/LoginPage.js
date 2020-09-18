import React, { useEffect } from 'react'
import axios from 'axios'
import Header from '../../components/Header'

import { useHistory } from "react-router-dom"
import {goToAdminPage} from '../../router/goToPages'

//hooks
import useForm from '../../hooks/useForm'

// api:
import {baseUrl, student} from '../../requisitions/apiRequisitions.js'

// styles:
import {Title, Subtitle, Button, TripInfoTitle, TripInfo} from '../../styles/MainStyles'
import {FormContainer, InputContainer, Input, Label} from '../../styles/Forms'
import {LoginPageContainer, TitleContainer, TipContainer} from './styled'

// -------- COMPONENTE: --------

const LoginPage = () => {

    const history = useHistory()

    useEffect( () => {
        const token = window.localStorage.getItem("token")

        if (token) {
            goToAdminPage(history)
        }
    },[history])


    const {form, onChange, resetState} = useForm({
        email: "",
        password: ""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        onChange(name, value);
      };

    const submitForm = (event) => {
        event.preventDefault()
        login()
    }

    const login = () => {

        const loginUrl = `${baseUrl}${student}/login`

        const loginBody = {
            email: form.email,
            password: form.password,
        }

        axios
        .post(loginUrl, loginBody)
        .then ( (response) => {
            localStorage.setItem("token", response.data.token)
            goToAdminPage(history)
        })
        .catch( (error) => {
            alert("Opa! Não identificamos seu cadastro!")
        })
}   


    return (
        <LoginPageContainer>
            <Header/>
            <TitleContainer>
                <Title>Login</Title>
                <Subtitle>Acesse a área restrita para <br/>administrar as viagens:</Subtitle>
            </TitleContainer>

            <FormContainer onSubmit={submitForm}>
            <InputContainer>
                <Label for="email">Email</Label>
                <Input 
                name="email"
                value={form.email}
                onChange={handleInputChange}
                type="email"
                placeholder={"Email"}
                id="email"
                required/>
            </InputContainer>

            <InputContainer>
                <Label for="password">Senha</Label>
                <Input 
                name="password"
                value={form.password}
                onChange={handleInputChange}
                type="password"
                placeholder={"Senha"}
                id="password"
                required
                />
            </InputContainer>

            <Button>Fazer login</Button>

            <TipContainer>
                Email e senha para testes:
                <br/><br/>
                <TripInfoTitle>Email:</TripInfoTitle>
                <TripInfo>admin@labex.com</TripInfo>
                <br/>
                <TripInfoTitle>Senha:</TripInfoTitle>
                <TripInfo>aliens</TripInfo>
            </TipContainer>

            </FormContainer>

        </LoginPageContainer>
    )

}

export default LoginPage