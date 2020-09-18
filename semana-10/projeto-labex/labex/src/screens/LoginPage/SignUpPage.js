import React, {useEffect} from 'react'
import axios from 'axios'
import Header from '../../components/Header'

//hooks
import useForm from '../../hooks/useForm'

// api:
import {baseUrl, student} from '../../requisitions/apiRequisitions.js'

import { useHistory } from "react-router-dom";
import { goToLoginPage, goToAdminPage } from '../../router/goToPages';

// styles:
import {Title, Subtitle, Button} from '../../styles/MainStyles'
import {FormContainer, InputContainer, Label, Input} from '../../styles/Forms'
import {LoginPageContainer, TitleContainer} from './styled'

const SignUpPage = () => {

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
        signUp()
    }

    const signUp = () => {

        const signUpUrl = `${baseUrl}${student}/signup`

        const signUpBody = {
            email: form.email,
            password: form.password,
        }

        axios
        .post(signUpUrl, signUpBody)
        .then ( (response) => {
            goToLoginPage(history)
        })
        .catch( (error) => {
            alert("Opa! Digite um email e senha válidos!")
        })
    }

    return (
        <LoginPageContainer>
            <Header/>
            <TitleContainer>
                <Title>Cadastre-se</Title>
                <Subtitle>Bem-vindo à página secreta de cadastro!</Subtitle>
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
                    required
                    />
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
                    required/>
                </InputContainer>
                <Button>Cadastrar</Button>
            </FormContainer>
        </LoginPageContainer>
    )
}

export default SignUpPage