import React from 'react'

// ROUTER:
import { useHistory } from "react-router-dom";
import { goToFeed, goToLogin } from '../../routes/Coordinator'

// API:
import axios from 'axios'
import { baseUrl } from '../../services/api'

// HOOKS:
import useForm from '../../hooks/useForm'
import useUnprotectedPage from '../../hooks/useUnprotectedPages'

// STYLED:
import {PageContainer, RedditIcon, Title, Form, Input, Button, Link} from './styled-form'

// IMAGES:
import redditIcon from '../../assets/img/reddit-icon.svg'

function SignUpPage() {

    useUnprotectedPage()

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
            localStorage.setItem("username", response.data.user.username)
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
                <p>Already a Labedditor? <Link onClick={() => goToLogin(history) }>Sign in</Link></p>
            </Form>
        </PageContainer>
    )
}

export default SignUpPage