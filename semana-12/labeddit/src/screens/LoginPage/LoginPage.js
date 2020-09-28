import React from 'react'
import axios from 'axios'

// ROUTER:
import { useHistory } from "react-router-dom";
import { goToFeed, goToSignUp } from '../../routes/Coordinator'

// API:
import { baseUrl } from '../../services/api'

// HOOK:
import { useForm } from '../../hooks/useForm'

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
            console.log(error)
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        login()
    }

    return(
        <div>
            <h2>Login</h2>
            <form onSubmit = {submitForm}>
                <input
                name={'email'}
                value={form.email}
                onChange = {onChange}
                placeholder={'Email'}
                type={'email'}
                />

                <input
                name={'password'}
                value={form.password}
                onChange = {onChange}
                placeholder={'Senha'}
                type={'password'}
                />

                <button>Enviar</button>

                <p>Ou <strong onClick={() => goToSignUp(history) }>cadastre-se</strong></p>
            </form>
        </div>
    )
}

export default LoginPage