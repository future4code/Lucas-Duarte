import React from 'react'
import axios from 'axios'

// ROUTER:
import { useHistory } from "react-router-dom";
import { goToFeed, goBack } from '../../routes/Coordinator'

// API:
import { baseUrl } from '../../services/api'

// HOOK:
import { useForm } from '../../hooks/useForm'

// Styled:
import {PageContainer, RedditIcon, Title, Form, Input, Button, Link} from './styled-form'

// Images:
import redditIcon from '../../assets/img/reddit-icon.svg'

function SignUpPage() {

    const history = useHistory()

    const { form, onChange, resetState } = useForm({
        email: "",
        password: "",
        username: ""
    })

    const signUp = () => {
        
        const body = {
            email: form.email,
            username: form.username,
            password: form.password,
        }

        axios
        .post(`${baseUrl}/signup`, body)

        .then( (response) => {
            localStorage.setItem("token", response.data.token)
            goToFeed(history)
            resetState()
        })

        .catch( (error) => {
            console.log(error)
        })


    }

    const submitForm = (event) => {
        event.preventDefault()
        signUp()
    }

    return(
        <PageContainer>
            <RedditIcon src={redditIcon}/>
            <Form onSubmit = {submitForm}>
                <Title>Sign Up</Title>
                <Input
                name={'username'}
                value={form.username}
                onChange = {onChange}
                placeholder={'Username'}
                required
                autoFocus
                />
                <Input
                name={'email'}
                value={form.email}
                onChange = {onChange}
                placeholder={'Email'}
                type={'email'}
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
                <Button>Sign Up</Button>
                <p>Already a Labedditor? <Link onClick={() => goBack(history) }>Sign in</Link></p>
            </Form>
        </PageContainer>
    )
}

export default SignUpPage