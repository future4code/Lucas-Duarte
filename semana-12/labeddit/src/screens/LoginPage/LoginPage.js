import React from 'react'
import axios from 'axios'
import styled from 'styled-components'


// ROUTER:
import { useHistory } from "react-router-dom";
import { goToFeed, goToSignUp } from '../../routes/Coordinator'

// API:
import { baseUrl } from '../../services/api'

// HOOK:
import { useForm } from '../../hooks/useForm'

// STYLED:
import {PageContainer, RedditIcon, Title, Form, Input, Button, Link} from './styled-form'

// Images:
import redditIcon from '../../assets/img/reddit-icon.svg'

function LoginPage() {

    const history = useHistory()

    const { form, onChange, resetState } = useForm({
        email: "",
        password: "",
    })

    const login = () => {
        
        const body = {
            email: form.email,
            password: form.password
        }

        axios
        .post(`${baseUrl}/login`, body)

        .then ( (response) => {
            localStorage.setItem("token", response.data.token)
            goToFeed(history)
            resetState()
        })
        .catch( (error) => {
            alert("Cadastro não identificado. Tente novamente!")
            resetState()
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        login()
    }

    return(
        <PageContainer>
            <RedditIcon src={redditIcon}/>
            <Form onSubmit = {submitForm}>
            <Title>Sign in</Title>

                <Input
                name={'email'}
                value={form.email}
                onChange = {onChange}
                placeholder={'Email'}
                type={'email'}
                autoFocus
                required
                />

                <Input
                name={'password'}
                value={form.password}
                onChange = {onChange}
                placeholder={'Password'}
                type={'password'}
                required
                />

                <Button>Sign In</Button>

                <p>New in Labeddit? <Link onClick={() => goToSignUp(history) }>Sign up</Link></p>
            </Form>
        </PageContainer>
    )
}

export default LoginPage