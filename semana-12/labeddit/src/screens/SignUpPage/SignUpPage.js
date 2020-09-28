import React from 'react'
import axios from 'axios'

// ROUTER:
import { useHistory } from "react-router-dom";
import { goToFeed, goBack } from '../../routes/Coordinator'

// API:
import { baseUrl } from '../../services/api'

// HOOK:
import { useForm } from '../../hooks/useForm'


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
        <div>
            <h2>Cadastro</h2>
            <p onClick={() => goBack(history)}>Voltar</p>
            <form onSubmit = {submitForm}>
                <input
                name={'username'}
                value={form.username}
                onChange = {onChange}
                placeholder={'Nome de usuário'}
                />
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
            </form>
        </div>
    )
}

export default SignUpPage