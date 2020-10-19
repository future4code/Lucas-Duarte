import React from 'react'
import axios from 'axios';
import styled from 'styled-components'
import { useForm } from "../hooks/useForm";
import {url} from '../api/requisitions'

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 20vh;
    border: 1px solid red;
`



function Form() {

    const { form, onChange, resetState } = useForm({
        task: "",
        day: "",
    })

    const createTask = () => {

        const body = {
            text: form.task,
            day: form.day
        }

        axios. 
        post(`${url}`, body)
        
        .then ( (response) => {
            window.location.reload(true);
        })
        .catch ( (error) => {
            console.log(error)
        })

    }

    const submitForm = (event) => {
        event.preventDefault()
        createTask()
        resetState()
    }

    return (
        <FormContainer>
            <form onSubmit={submitForm}>

                <input
                name="task"
                value={form.task}
                onChange={onChange}
                type={"text"}
                placeholder="Digite uma tarefa"
                required
                />

                <select
                name="day"
                onChange={onChange}
                value={form.day}
                required>
                <option value="">Selecione um dia</option>
                <option value={"monday"}>Segunda</option>
                <option value={"tuesday"}>Terça</option>
                <option value={"wednesday"}>Quarta</option>
                <option value={"thursday"}>Quinta</option>
                <option value={"friday"}>Sexta</option>
                <option value={"saturday"}>Sábado</option>
                <option value={"sunday"}>Domingo</option>
                </select>
                <button>Adicionar</button>
            </form>
        </FormContainer>
    )
}

export default Form;