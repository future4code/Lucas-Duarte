import React from 'react'

// ROUTER:
import { useHistory } from "react-router-dom";
import { goToFeed, goToSignUp } from '../../routes/Coordinator'

// FUNCTIONS:
import postData from '../../functions/postData'

// API:
import axios from 'axios'
import { baseUrl } from '../../services/api'

// HOOK:
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPages'

// STYLED:
import {PageContainer, RedditIcon, Title, Form, Input, Button, Link} from './styled-form'

// Images:
import redditIcon from '../../assets/img/reddit-icon.svg'

function LoginPage() {

    useUnprotectedPage()

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
            console.log(response.data)
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("username", response.data.user.username)

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